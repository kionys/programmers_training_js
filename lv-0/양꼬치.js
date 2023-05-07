function solution(n, k) {
  var answer = 0;
  var lambSkewers = n * 12000;
  var tsingTao = k * 2000;

  var service = Math.floor(n / 10);
  answer = lambSkewers + tsingTao;
  answer -= service * 2000;

  return answer;
}
