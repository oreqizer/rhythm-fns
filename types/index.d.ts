declare module 'rhythm-fns' {
  export function getBoxMargin(
    baseFontSize: number,
    baseLineRatio: number,
    heightScale: number,
    margins: number
  ): number;

  export function getLines(
    baseFontSize: number,
    baseLineRatio: number,
    scale: number,
  ): number;
}
