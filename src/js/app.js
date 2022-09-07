// TODO: write your code here
export default function healthIndicator(arr) {
  arr.sort((a, b) => b.health - a.health);
  return arr;
}
