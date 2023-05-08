function solution(numbers) {
    var answer = 0;
    numbers.sort((a, b) => b - a);
    const max = numbers.splice(0, 2)
    answer = max[0] * max[1]
    return answer;
}