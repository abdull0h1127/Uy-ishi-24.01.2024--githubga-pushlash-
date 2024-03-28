let Total = (price, amount) => {
  let result = price * amount;
  return result.toFixed(2);
};

let result1 = Total(4.99, 5);
console.log(result1);
