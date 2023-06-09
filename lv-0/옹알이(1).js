function solution(babbling) {
    var answer = 0;
    const commonArr = ["aya", "ye", "woo", "ma"]
    const copyBabbling = [ ...babbling];
         
    for(let a = 0; a < copyBabbling.length; a++){
        for(let b = 0; b < commonArr.length; b++){
          //주의: "-" 말고 "" 처럼 공백으로 치환 시 치환 후에 중복 값이 생길 수 있다.
          //따라서, "-" 로 치환한다.
          copyBabbling[a] = copyBabbling[a].replace(commonArr[b], "-")
        }
    }

    for(let a = 0; a < copyBabbling.length; a++){
      //split 으로 배열을 "-" 기준으로 문자열로 만들고 문자열이 된 값들을 join으로 묶어 공백인지 비교.
      if(copyBabbling[a].split("-").join("") === "") answer++; 
    }
    return answer;
  }