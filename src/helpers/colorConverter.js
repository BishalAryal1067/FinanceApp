import tailwindConfig from "../../tailwind.config";

export function convertToHex(colorClass) {
  return tailwindConfig.theme.colors[colorClass];
}
