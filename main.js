const add = (numbers) => {
  // For empty string
  if (!numbers || numbers.trim() === "") {
    return 0;
  } else if (!numbers.includes(",") && numbers.length === 1) {
    return Number(numbers);
  } else if (numbers.includes(",")) {
    const arr = numbers.split(",");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + Number(arr[i]);
    }
    return sum;
  }
};

module.exports = add;
