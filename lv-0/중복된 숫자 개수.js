function solution(array, n) {
    var answer = 0;
    var filterArray = array.filter((item)=>{
        return item === n;
    });
    answer = filterArray.length;
    return answer;
}