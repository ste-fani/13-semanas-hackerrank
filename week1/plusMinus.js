const test1 = [-4, 3, -9, 0, 4, 1];
const test2 = [1, 2, 3, -1, -2, -3, 0, 0];

const plusMinus = (arr) => {
    let total = 0;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for(let i = 0; i < arr.length; i++) {
        total = arr.length;
        
        if(arr[i] > 0 ) {
            positive++
        }else if(arr[i] < 0) {
            negative++;
        }else {
            zero++;
        }
    }
    
    positive = positive / total;
    negative = negative / total;
    zero = zero / total;
    
    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));

}

plusMinus(test1);
plusMinus(test2);