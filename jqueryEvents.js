
// #1 - click event
// $("button").on("click", function() {
//     $("#id-site-welcome-image").css('width', '500px');
// });
// function func1() {
//     $("#id-site-welcome-image").css('width', '500px');
// }

// Same but with annonymus function
// $("button").on("click", function() {
//     $("#id-site-welcome-image").css('width', '500px');
// });

// #2 - include Ready Event:
// Do stuff after the HTML document is loaded FULLY - CONSIDERED BEST PRACTICE
// $("document").ready(function() {
//     $("button").click(function() {
//         $("#id-site-welcome-image").css('width', '500px');
//     });
// });

// #3 - double click event:
// $("document").ready(function() {
//     $("button").dblclick(function() {
//         $("#id-site-welcome-image").css('width', '500px');
//     });
// });

// #4 - mouse enter event
// $("document").ready(function() {
//     $("#id-site-welcome-image").mouseenter(function() {
//         $("#id-site-welcome-image").css('width', '500px');
//     });
//     $("#id-site-welcome-image").mouseleave(function() {
//         $("#id-site-welcome-image").css('width', '250px');
//     });
// });

// #5 - hover event that contains both mouse enter and mouse leave events
// $("#id-site-welcome-image").hover(func1, func2);
// function func1() {
//     $("#id-site-welcome-image").css('width', '500px');
// }

// function func2() {
//     $("#id-site-welcome-image").css('width', '250px');
// }