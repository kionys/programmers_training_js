function solution(num_list) {
    var answer = [];
    var a = [];
    var b = [];
    
    num_list.map((item)=>{
        if(item % 2 === 0){
            a.push(item);
        }else{
            b.push(item);
        }
    })
    answer = [a.length, b.length];
    return answer;
}