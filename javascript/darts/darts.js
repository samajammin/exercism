export const solve = (x, y) => {
  const distanceFromCenter = Math.sqrt(x ** 2 + y ** 2);
  if (distanceFromCenter <= 1) {
    return 10;
  } else if (distanceFromCenter <= 5) {
    return 5;
  } else if (distanceFromCenter <= 10) {
    return 1;
  } else {
    return 0;
  }
};
