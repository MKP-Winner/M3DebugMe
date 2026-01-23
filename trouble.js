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

// Sets the customization for each individual color/div tag
// .innerHTML is used to add content within each div tag.
// .style.backgroundColor is used to assign a different background color to each div

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

/* SUMMARY OF ALL FIXES:
 * 1. Line 2: Added missing semicolon after v2 = 4
 * 2. Line 4-5: Uncommented alert and created 'equals' variable
 * 3. Line 9: Fixed getElementsById → getElementById (singular)
 * 4. Line 13: Fixed typo stlye → style
 * 5. Line 23: Fixed getelementById → getElementById
 * 6. Line 30: Fixed innerhtml → innerHTML (case-sensitive)
 * 7. Line 41: Fixed variable name purple → green
 */