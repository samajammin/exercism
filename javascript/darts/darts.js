export const solve = (x, y) => {
  const r = x * x + y * y;
  if (r > 100) return 0;
  if (r > 25) return 1;
  if (r > 1) return 5;
  return 10;
};
