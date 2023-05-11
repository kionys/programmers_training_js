function solution(array) {
    var answer = 0;
    const mdNum = Math.floor(array.length/2)
    const ascArray = array.sort((a,b)=>a-b);
    answer = ascArray[mdNum]
    return answer;
}