/**
 * Snaps a color component (0-255) to the nearest web-safe value.
 * Web-safe values are multiples of 51 (0, 51, 102, 153, 204, 255).
 */
export const snapComponentToWebSafe = (c: number): number => {
  return Math.round(c / 51) * 51;
};

/**
 * Snaps a hex color string to the nearest web-safe color.
 */
export const snapToWebSafe = (hex: string): string => {
  // Remove # if present
  let cleanHex = hex.replace('#', '');
  
  // Handle 3-digit hex
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  
  if (cleanHex.length !== 6) return hex; // Return original if invalid
  
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  const sr = snapComponentToWebSafe(r).toString(16).padStart(2, '0');
  const sg = snapComponentToWebSafe(g).toString(16).padStart(2, '0');
  const sb = snapComponentToWebSafe(b).toString(16).padStart(2, '0');
  
  return `#${sr}${sg}${sb}`;
};
