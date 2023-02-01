export function useMode(mode, styleLigth, styleDark) {
  return mode ? styleLigth : styleDark;
}
