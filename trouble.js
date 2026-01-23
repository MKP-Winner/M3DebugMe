let v1 = 3;
// FIXED: Added missing semicolon after v2 = 4
let v2 = 4;

// FIXED: Uncommented the alert and defined the missing 'equals' variable
let equals = " equals ";
alert("3 times 4" + equals + v1 * v2);

// This sets the general styling for the divs within the section tag using .style
// FIXED: Changed getElementsById to getElementById (singular, not plural)
let section = document.getElementById("s1");
section.style.width = "50%";
section.style.textAlign = "center";
section.style.fontFamily = "arial, serif";
// FIXED: Changed 'stlye' to 'style' (typo correction)
section.style.fontWeight = "bold";
section.style.fontStyle = "italic";
section.style.fontSize = "20px";

// RED
// FIXED: Changed getelementById to getElementById (correct capitalization)
const red = document.getElementById("red");
red.innerHTML = "RED";
red.style.backgroundColor = "red";

// ORANGE
const orange = document.getElementById("orange");
// FIXED: Changed 'innerhtml' to 'innerHTML' (correct capitalization)
orange.innerHTML = "ORANGE";
orange.style.backgroundColor = "orange";

// YELLOW
const yellow = document.getElementById("yellow");
yellow.innerHTML = "YELLOW";
yellow.style.backgroundColor = "yellow";

// GREEN
// FIXED: Changed variable name from 'purple' to 'green' to match the element
const green = document.getElementById("green");
green.innerHTML = "GREEN";
green.style.backgroundColor = "green";

// INDIGO
const indigo = document.getElementById("indigo");
indigo.innerHTML = "INDIGO";
indigo.style.backgroundColor = "indigo";

// VIOLET
const violet = document.getElementById("violet");
violet.innerHTML = "VIOLET";
violet.style.backgroundColor = "violet";