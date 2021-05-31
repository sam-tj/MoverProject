var lastDirection = "...";
var lastSpeed = 0;

function sendMovementData(direction) {
  console.log("sendMovementData " + direction);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      lastDirection = this.response;
      document.getElementById("currentDirection").innerHTML =
        "Current State " + lastDirection + " at speed " + lastSpeed;
      if (this.responseText == "stop") {
        document.getElementById("powerSwitch").checked = false;
        document.getElementById("slider-id-01").value = 0;
        document.getElementById("fwd_button").setAttribute("disabled", "");
        document.getElementById("lft_button").setAttribute("disabled", "");
        document.getElementById("rgt_button").setAttribute("disabled", "");
        document.getElementById("bwd_button").setAttribute("disabled", "");
        document.getElementById("slider-id-01").setAttribute("disabled", "");
      }
    }
  };
  xhttp.open("GET", "setDIR?Motionstate=" + direction, true);
  xhttp.send();
}
function sendPowerData() {
  //console.log(
  //"sendPowerData " + document.getElementById("powerSwitch").checked
  //);
  console.log(document.getElementById("slider-id-01").value);
  var state = document.getElementById("powerSwitch").checked;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(
        "sendPowerData " + document.getElementById("powerSwitch").checked
      );
      if (this.responseText == "true") {
        document.getElementById("powerSwitch").checked = true;
        document.getElementById("fwd_button").removeAttribute("disabled");
        document.getElementById("lft_button").removeAttribute("disabled");
        document.getElementById("rgt_button").removeAttribute("disabled");
        document.getElementById("bwd_button").removeAttribute("disabled");
        document.getElementById("slider-id-01").removeAttribute("disabled");
      } else if (this.responseText == "false") {
        document.getElementById("powerSwitch").checked = false;
        document.getElementById("slider-id-01").value = 0;
        document.getElementById("fwd_button").setAttribute("disabled", "");
        document.getElementById("lft_button").setAttribute("disabled", "");
        document.getElementById("rgt_button").setAttribute("disabled", "");
        document.getElementById("bwd_button").setAttribute("disabled", "");
        document.getElementById("slider-id-01").setAttribute("disabled", "");
      }
    }
  };
  xhttp.open("GET", "setPower?Powerstate=" + state, true);
  xhttp.send();
}
function sendSpeedData(speed) {
  //console.log("sendSpeedData " + speed);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      lastSpeed = this.response;
      document.getElementById("currentDirection").innerHTML =
        "Current State " + lastDirection + " at speed " + lastSpeed;
      // document.getElementById("currentDirection").innerHTML =
      //   "Going " + this.responseText;
      console.log("sendSpeedData " + speed);
    }
  };
  xhttp.open("GET", "setSpeed?Speedstate=" + speed, true);
  xhttp.send();
}

// setInterval(function () {
//   // Call a function repetatively with 2 Second interval
//   getData();
// }, 2000); //2000mSeconds update rate

// function getData() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("ADCValue").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "readADC", true);
//   xhttp.send();
// }
