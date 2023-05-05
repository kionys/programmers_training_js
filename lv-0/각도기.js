function solution(angle) {
    var answer = 0;  
     
    //예각(1 ~ 89)
    if(0 < angle && angle < 90) answer = 1;

    //직각(90)
    if(angle == 90) answer = 2;
    
    //둔각(91 ~ 179)
    if(90 < angle && angle < 180) answer = 3;
     
    //평각(180)
    if(angle === 180) answer = 4;
    
    return answer;
}