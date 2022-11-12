export function calc(num) {
  let res = num;

  function add (number) {
    res += number;
    return this;
  }
  
  function subtract (number) {
    res -= number;
    return this;
  }
  
  function mult (number) {
    res *= number;
    return this;
  }
  
  function div (number) {
    res /= number;
    return this;
  }

  const result = () => res;

  return {
    add,
    subtract,
    mult,
    div,
    result
  }
}

calc(3).add(2).mult(4).div(10).subtract(5).result(); // -3