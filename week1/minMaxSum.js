const test1 = [1, 2, 3, 4, 5];
const test2 = [7, 69, 2, 221, 8974];

const miniMaxSum = (arr) => {
    let sumMin = 0;
    let sumMax = 0;
   
    const min = arr.sort((a, b) => b - a).slice(1, arr.length);
    const max = arr.sort((a,b) => a - b).slice(1, arr.length);

    min.forEach((item) => {
        sumMin += item;
    })

    max.forEach((item) => {
        sumMax += item;
    })

    console.log(sumMin, sumMax);
   
}

miniMaxSum(test1);
miniMaxSum(test2);