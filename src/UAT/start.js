const data = require("./data.js");

const map_size = data.map_size;
const commends = data.commands;
let instruct = {
  row: map_size.split("*")[0],
  column: map_size.split("*")[1],
};

let map = [];
for (let i = 0; i < instruct.row; i++) {
  map[i] = [];
  for (let j = 0; j < instruct.column; j++) {
    map[i][j] = "";
  }
}

function getPositionByCommend(position) {

}



function paddingData(commends) {
  for (let row = 0; row < instruct.row; row++) {
    for (let column = 0; column < instruct.column; column++) {

    }
  }
  commends.forEach((commend, position) => {
    const [x, y] = getPositionByCommend(position);
    commend.split.forEach((landmark, coordinate) => {
      switch (coordinate) {
        case 0:
          map[x][y] = landmark;
          break;
        case 1:
          if (map[x - 1][y]) {
            map[x][y] = landmark;
          }
          break;
        case 2:
          if (map[x][y + 1]) {
            map[x][y + 1] = landmark;
          }
          break;
        case 3:
          if (map[x + 1][y]) {
            map[x + 1][y] = landmark;
          }
          break;
        case 4:
          if (map[x][y - 1]) {
            map[x][y - 1] = landmark
          }
          break;
        default:
          break
      }

    })
  })
}

console.log("map", map);