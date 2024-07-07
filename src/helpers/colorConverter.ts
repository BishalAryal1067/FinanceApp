import tailwindConfig from "../../tailwind.config.js";

export function convertToHex(colorClass: string): string {
  return tailwindConfig.theme.colors[colorClass];
}
