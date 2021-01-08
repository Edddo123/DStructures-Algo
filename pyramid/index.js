//my first attempt
function pyramid1(n) {
    let step = ''
    for (let i = 0; i < n; i++) {

        for (j = 0; j < 2 * n - 1; j++) {
            if (j >= n - 1 - i && j <= n - 1 + i) {
                step += '#'
            }

            else { step += ' ' }

        }
        console.log(step)
        step = ''
    }

}

//recursion

function pyramid2(n, row = 0, level = '') {
    if (row === n) {
      return;
    }
  
    if (level.length === 2 * n - 1) {
      console.log(level);
      return pyramid(n, row + 1);
    }
  
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
      add = '#';
    } else {
      add = ' ';
    }
    pyramid(n, row, level + add);
  }


pyramid2(3)