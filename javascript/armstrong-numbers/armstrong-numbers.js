export const isArmstrongNumber = num => {
  if (typeof num !== "number") {
    throw new Error("Must supply a number.");
  }
  const numString = num.toString();
  let sum = 0;
  for (const str of numString) {
    sum += Number(str) ** numString.length;
  }
  return sum === num;
};
