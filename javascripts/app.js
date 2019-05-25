// Rover Object Goes Here
// ======================
var rover = { // Object
  direction: "N", // String
  x : 0, // Number
  y : 0, // Number
  travelLog: [], // Array
};
// ======================

function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
  
    case "E":
      rover.direction = "N";
      break;
  
    case "S":
      rover.direction = "E";
      break;
  
    case "W":
      rover.direction = "S";
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
  
    case "E":
      rover.direction = "S";
      break;
  
    case "S":
      rover.direction = "W";
      break;
  
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called")

  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        rover.y -= 1;
      }
      break;
  
    case "E":
      if (rover.x < 9) {
        rover.x += 1;
      }
      break;
  
    case "S":
      if (rover.y < 9) {
        rover.y += 1;
      }
      break;
  
    case "W":
      if (rover.x > 0) {
        rover.x -= 1;
      }
      break;
  }
}

function moveBackwards(rover) {
  console.log("moveBackwards was called")

  switch (rover.direction) {
    case "N":
      if (rover.y < 9) {
        rover.y += 1;
      }
      break;
  
    case "E":
      if (rover.x < 9) {
        rover.x -= 1;
      }
      break;
  
    case "S":
      if (rover.y > 0) {
        rover.y -= 1;
      }
      break;

    case "W":
      if (rover.x > 0) {
        rover.x += 1;
      }
      break;
  }
}

function logTravel(rover) {
  rover.travelLog.push({
    x: rover.x,
    y: rover.y,
  });
} 

function command(commands) {
  for (let i = 0; i < commands.length; i++) {
    const c = commands[i];

    // just have it log when moving forward / backwards - otherwise roaver is just moving on the spot
    switch (c) {
      case "f":
        moveForward(rover);
        logTravel(rover);
        break;

      case "b":
        moveBackwards(rover);
        logTravel(rover);
        break;
  
      case "r":
        turnRight(rover);
        break;
  
      case "l":
        turnLeft(rover);
        break;

      default:
        console.log("This is not a valid rover command!");
    }
  }

}

command('llflbbfrfflrrrrrllrfff');

console.log(rover);
