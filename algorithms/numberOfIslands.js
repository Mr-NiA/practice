let grid1 = [
    [1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0]
]
let grid2 = [
    [1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]

let numIslands = function (grid) {
    let counter = 0;
    let colL = grid[0].length
    let rowL = grid.length
    if (rowL === 0) return 0;

    function markNeighbour(grid, r, c) {
        grid[r][c] = 6;

        if (grid?.[r + 1]?.[c] === 1) {
            markNeighbour(grid, r + 1, c)
        }
        if (grid?.[r - 1]?.[c] === 1) {
            markNeighbour(grid, r - 1, c)
        }
        if (grid?.[r]?.[c + 1] === 1) {
            markNeighbour(grid, r, c + 1)
        }
        if (grid?.[r]?.[c - 1] === 1) {
            markNeighbour(grid, r, c - 1)
        }
    }

    for (let r = 0; r < rowL; r++) {
        for (let c = 0; c < colL; c++) {
            if (grid[r][c] === 1) {
                counter++
                markNeighbour(grid, r, c)
            }
        }
    }

    return counter
}

console.log(numIslands(grid1))
console.log(numIslands(grid2))
