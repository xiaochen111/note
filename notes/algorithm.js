//快速排序 => 未完待续
const arr = [1, 6, 11, 2, 78, 5, 23, 1, 4, 6];
const max = Math.max(...arr);
const index = arr.findIndex((item, index) => {
    return item == max;
});
console.log(max, index);