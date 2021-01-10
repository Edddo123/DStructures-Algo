function matrix(n) {
    const results = []
    for (i = 0; i < n; i++) {
        results.push([])
    }
    let counter = 1; //to count numbers from 1 to n
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startRow <= endRow && startCol <= endCol) {
        //start first line
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter
            counter++
        }
        endCol--;

        //fill last row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter
            counter++
        }
        startCol++;

    }
    return results
} 