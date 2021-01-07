//1st attempt

function steps1(n) {
    let step = ''
    for(let i=0;i<n;i++) {
        for(let j=0;j<n;j++) {
            if(j<=i) {
                step += '#'
            }
            else {
                step += ' '
            }
        }
        console.log(step)
        step = ''
                     
    }
}
//recursive approach

function steps2(n, row = 0, stair = '') {
    if (n === row) {
      return;
    }
  
    if (n === stair.length) {
      console.log(stair);
      return steps(n, row + 1);
    }
  
    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
  }

steps1(3)


//recursion reminder

function printNumber(n) {
    if(n === 0) {
        return
    }
    console.log(n)
    printNumber(n-1)
}


printNumber(10)