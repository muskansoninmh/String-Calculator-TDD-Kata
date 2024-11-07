const add = (numbers) => {
  // For empty string
  if (!numbers || numbers.trim() === "") {
    return 0;
  } else if (!numbers.includes(",") && numbers.length === 1) {
    if (Math.sign(Number(numbers)) === -1) {
      return "Negative numbers not allowed";
    } else {
      return Number(numbers);
    }
  } else {
    const arr = numbers
      .replace(/[^0-9\-]+/g, ",")
      .trim()
      .split(",");

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) {
        if (Math.sign(arr[i]) === -1) {
          return "Negative numbers not allowed";
        } else if (isFinite(arr[i])) {
          sum = sum + Number(arr[i]);
        }
      }
    }
    return sum;
  }
};

module.exports = add;
