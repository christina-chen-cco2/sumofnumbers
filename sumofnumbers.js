function sumFor(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

function sumRecursion(nums) {
  let i = 0;
  if (i === nums.length) {
    return 0;
  }
  return sumRecursion(nums[i++]);
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (value, memo) { return value + memo; }, 0);
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`sumFor: ${sumFor(list)}\nsumWhile: ${sumWhile(list)}\nsumRecursion: ${sumRecursion(list)}
\nsumTheSimpleWay: ${sumTheSimpleWay(list)}\n`);
