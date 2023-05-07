function solution(numbers) {
  var answer = 0;
  var avg = 0;
  if (numbers.length > 0) {
    answer = numbers.reduce((a, b) => {
      return a + b;
    }, 0);
    avg = answer / numbers.length;
  }

  return avg;
}
