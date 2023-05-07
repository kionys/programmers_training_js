function solution(numbers) {
  var answer = [];
  if (numbers) {
    numbers.map((item) => {
      return answer.push(item * 2);
    });
  }
  return answer;
}
