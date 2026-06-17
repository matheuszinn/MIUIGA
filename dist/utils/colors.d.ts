/**
 * Snaps a color component (0-255) to the nearest web-safe value.
 * Web-safe values are multiples of 51 (0, 51, 102, 153, 204, 255).
 */
export declare const snapComponentToWebSafe: (c: number) => number;
/**
 * Snaps a hex color string to the nearest web-safe color.
 */
export declare const snapToWebSafe: (hex: string) => string;
//# sourceMappingURL=colors.d.ts.map