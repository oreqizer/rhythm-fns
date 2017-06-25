declare module 'rhythm-fns' {
  declare export function getBoxMargin(
    baseFontSize: number,
    baseLineRatio: number,
    heightScale: number,
    margins: number
  ): number;

  declare export function getLineHeight(
    baseFontSize: number,
    baseLineRatio: number,
    fontSize: number,
  ): number;

  declare export function getLineMargin(
    baseFontSize: number,
    baseLineRatio: number,
    margins: number
  ): number;
}
