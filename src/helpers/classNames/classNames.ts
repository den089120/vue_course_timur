
export type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods, additional: Array<string>): string {
  const str: Array<string> = Object.entries(mods).filter(([, value]) => Boolean(value)).map(([key]) => key)
  return [cls, ...str, ...additional].join(' ')
}
