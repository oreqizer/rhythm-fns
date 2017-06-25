declare module 'rhythm-fns' {
  export function getBoxMargin(
    baseFontSize: number,
    baseLineRatio: number,
    heightScale: number,
    margins: number
  ): number;

  export function getLineHeight(
    baseFontSize: number,
    baseLineRatio: number,
    fontSize: number,
  ): number;

  export function getLineMargin(
    baseFontSize: number,
    baseLineRatio: number,
    margins: number,
  ): number;

  export function getLineMargin(
    baseFontSize: number,
    baseLineRatio: number,
    margins: number,
    maybeBorder: number,
  ): number;
}
