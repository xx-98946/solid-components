export default function getTargetPosition(target: HTMLElement) {
  const rect = target.getClientRects()[0];
  const { top, right, bottom, left } = rect;
  const yCenter = (top + bottom) / 2;
  const xCenter = (left + right) / 2;
  return {
    top,
    right,
    bottom,
    left,
    xCenter,
    yCenter,
  };
}
