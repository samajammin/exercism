export const isArmstrongNumber = num => {
  if (typeof num !== "number") {
    throw new Error("Must supply a number.");
  }
  const numString = String(num);
  const numDigits = numString.length;
  return (
    num ===
    numString.split("").reduce((sum, str) => sum + Number(str) ** numDigits, 0)
  );
};
