function solution(sides) {
  var obj = { a: sides[0], b: sides[1], c: sides[2] };
  var max = Math.max.apply(null, sides);
  var namuge = obj.a + obj.b + obj.c - max;

  return namuge > max ? 1 : 2;
}
