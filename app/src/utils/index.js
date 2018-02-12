// Order object by desc
// - Call method: Array.sort(orderObjDesc);
export const orderObjDesc = function(a, b) {
  if (a.positive < b.positive) {
    return 1;
  }
  if (a.positive > b.positive) {
    return -1;
  }
  return 0;
}