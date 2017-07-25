<!-- Select a single header. -->

// document.querySelector("h3").innerHTML = "work in progress";

<!-- Identify select headers within a larger array. -->

// var x = document.querySelectorAll("h3");
// x[0].innerHTML = "work in progress";
// x[1].innerHTML = "work in progress";
// x[2].innerHTML = "work in progress";
// x[3].innerHTML = "work in progress";
// x[4].innerHTML = "work in progress";
// x[5].innerHTML = "work in progress";
// x[6].innerHTML = "work in progress";

<!-- Select all headers using a loop. -->

// var changeHeader = document.querySelectorAll("h3");
// var i;
// for (i = 0; i < changeHeader.length; i++) {
//   changeHeader[i].innerHTML = "work in progress";
// }

<!-- Use D3 to accomplish the same tasks. -->

// d3.selectAll("p").style("background-color", "black");
