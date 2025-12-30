// DFDDS Source code.ts
// This plugin exports design tokens, text styles, and effect styles from Figma

// 1. Define Interfaces to satisfy TypeScript
interface ExportData {
  metadata: { rootUnit: string; schema: string };
  variables: any[];
  textStyles: any[];
  effectStyles: any[];
}

async function runExport() {
  // 2. Explicitly type the object so it's not "never"
  const exportData: ExportData = {
    metadata: { rootUnit: "10px", schema: "2-tier" },
    variables: [],
    textStyles: [],
    effectStyles: []
  };

  // Helpers: convert normalized RGBA to hex + opacity
  const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
  const ch = (n: number) => {
    const v = Math.round(clamp01(n) * 255).toString(16).toUpperCase();
    return v.length === 1 ? "0" + v : v;
  };
  const rgbaToHexOpacity = (c: any) => {
    // Expect fields r,g,b,a in [0,1]
    if (c && typeof c.r === 'number' && typeof c.g === 'number' && typeof c.b === 'number') {
      const hex = `#${ch(c.r)}${ch(c.g)}${ch(c.b)}`;
      const opacity = typeof c.a === 'number' ? clamp01(c.a) : 1;
      return { hex, opacity };
    }
    return c;
  };

  // 3. Extract Variables
  const vars = await figma.variables.getLocalVariablesAsync();
  vars.forEach(v => {
    // For COLOR variables, convert each mode value to { hex, opacity }
    let valuesByMode: any = v.valuesByMode;
    if (v.resolvedType === 'COLOR' && valuesByMode && typeof valuesByMode === 'object') {
      const formatted: Record<string, any> = {};
      for (const modeId in valuesByMode) {
        const val = (valuesByMode as any)[modeId];
        formatted[modeId] = rgbaToHexOpacity(val);
      }
      valuesByMode = formatted;
    }

    exportData.variables.push({
      name: v.name,
      resolvedType: v.resolvedType,
      valuesByMode,
      description: v.description
    });
  });

  // 4. Extract Text Styles
  const textStyles = await figma.getLocalTextStylesAsync();
  for (const style of textStyles) {
    exportData.textStyles.push({
      name: style.name,
      font: style.fontName,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      description: style.description
    });
  }

  // 5. Extract Effect Styles
  const effectStyles = await figma.getLocalEffectStylesAsync();
  for (const style of effectStyles) {
    exportData.effectStyles.push({
      name: style.name,
      effects: style.effects,
      description: style.description
    });
  }

  figma.showUI(__html__, { visible: false });
  figma.ui.postMessage({ type: 'DOWNLOAD_JSON', payload: exportData });
}

figma.ui.onmessage = (msg) => { if (msg.type === 'CLOSE') figma.closePlugin(); };
runExport();