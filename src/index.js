module.exports = function reverse (n) {
   return Math.abs(n).toString().split('').reverse().join('');
}
//input = -468 => |-468| => '468' => [4, 6, 8] => [8, 6, 4] => [864] = output