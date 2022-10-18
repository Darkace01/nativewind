/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "tailwindcss/resolveConfig" {
  export default function (options: unknown): any;
}

declare module "tailwindcss/lib/util/validateConfig" {
  export function validateConfig(options: unknown): any;
}

declare module "tailwindcss/lib/util/resolveConfigPath" {
  export default function (pathOrConfig?: unknown): string | null;
}

declare module "tailwindcss/lib/util/withAlphaVariable" {
  export default function (options: unknown): any;
}

declare module "tailwindcss/lib/util/flattenColorPalette" {
  export default function (options: unknown): any;
}

declare module "tailwindcss/lib/util/toColorValue" {
  export default function (options: unknown): any;
}

declare module "tailwindcss/lib/util/isPlainObject" {
  export default function (options: unknown): boolean;
}
