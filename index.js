const GRID_WIDTH = 500;
let isMouseDown = false;

function main() {

  document.body.onmousedown = () => isMouseDown = true;
  document.body.onmouseup = () => isMouseDown = false;

  const grid = document.querySelector("div.grid");
  let numRows = 16;

  createGrid(grid, numRows);

  document.querySelector("button.clear").addEventListener("click", () => {
    grid.innerHTML = "";
    createGrid(grid, numRows);
  });
}

// Generate square grid with given numRows
function createGrid(grid, numRows) {
  // Create numRows of rows
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    // For each row, fill with squares
    for (let j = 0; j < numRows; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.height = `${GRID_WIDTH / numRows}px`;
      square.style.width = `${GRID_WIDTH / numRows}px`;
      square.onmousedown = () => isMouseDown = true;
      square.onmouseup = () => isMouseDown = false;
      square.addEventListener("mouseover", (event) => {
        if(isMouseDown) event.target.style.backgroundColor = "black";
      });
      row.append(square);
    }
    grid.append(row);
  }
}

main();
