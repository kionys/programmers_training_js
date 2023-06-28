function solution(money) {
    var answer = [];
    const iceUsingNum = Math.floor(money / 5500);
    const iceAfterNum = Math.floor(money % 5500);
    answer.push(iceUsingNum)
    answer.push(iceAfterNum)
    
    return answer;
}