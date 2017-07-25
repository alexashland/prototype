<!-- Select a single header. -->

// document.querySelector("h3").innerHTML = "work in progress";

<!-- Identify select headers within a larger array. -->

// var changeHeader = document.querySelectorAll("h3");
// changeHeader[0].innerHTML = "work in progress";
// changeHeader[1].innerHTML = "work in progress";
// changeHeader[2].innerHTML = "work in progress";
// changeHeader[3].innerHTML = "work in progress";
// changeHeader[4].innerHTML = "work in progress";
// changeHeader[5].innerHTML = "work in progress";
// changeHeader[6].innerHTML = "work in progress";

<!-- Select all headers using a loop. -->

// var changeHeader = document.querySelectorAll("h3");
// var i;
// for (i = 0; i < changeHeader.length; i++) {
//   changeHeader[i].innerHTML = "work in progress";
// }

<!-- Use D3 to accomplish the same tasks.  Select the first element you come across. -->

// d3.select("h3").text("work in progress");

<!-- Use D3 to accomplish the same tasks.  Select all elements. -->

// d3.selectAll("h3").text("work in progress");
