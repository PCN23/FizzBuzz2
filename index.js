let n = 0;
// used a while loop, it can be ran until we meet out highest number which is 100
while (n < 100) {
// increment the value of n by one
    n++;
// if divisable by 3 or 5 say fizzbuzz
    if (n % 15 === 0) {
        console.log('FIZZBUZZ');
    }
// if divisable by 3 return fizz
    else if (n % 3 === 0) {
        console.log('FIZZ');
    }
// if divisable by 3 return buzz
    else if (n % 5 === 0) {
        console.log('BUZZ');
    }
// return number
    else {
        console.log(n);
    }
};