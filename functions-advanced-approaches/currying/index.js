export const mult = (num1) => (num2) => num1 * num2;

export const twice = (num) => mult(num)(2);

export const triple = (num) => mult(num)(3);