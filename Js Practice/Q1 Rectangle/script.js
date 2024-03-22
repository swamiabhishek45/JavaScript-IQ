var rectangle = document.querySelector(".rectangle");

rectangle.addEventListener("mousemove", function (details) {
  var rectLoc = rectangle.getBoundingClientRect();

  var mouseLoc = details.clientX;

  var insideRectVal = mouseLoc - rectLoc.left;

  //   if (insideRectVal < rectLoc.width / 2) {
  //     var redColor = gsap.utils.mapRange(
  //       0,
  //       rectLoc.width / 2,
  //       255,
  //       0,
  //       insideRectVal
  //     );
  //     gsap.to(rectangle, {
  //       backgroundColor: `rgb(${redColor}, 0, 0)`,
  //       ease: Power4,
  //     });
  //   } else {
  //     var greenColor = gsap.utils.mapRange(
  //       rectLoc.width / 2,
  //       rectLoc.width,
  //       0,
  //       255,
  //       insideRectVal
  //     );
  //     gsap.to(rectangle, {
  //       backgroundColor: `rgb(0, ${greenColor}, 0)`,
  //       ease: Power4,
  //     });
  //   }

  if (insideRectVal < rectLoc.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectLoc.width / 2,
      255,
      0,
      insideRectVal
    );

    rectangle.style.backgroundColor = `rgb(${redColor}, 0, 0)`;
  } else {
    var greenColor = gsap.utils.mapRange(
      rectLoc.width / 2,
      rectLoc.width,
      0,
      255,
      insideRectVal
    );

    rectangle.style.backgroundColor = `rgb(0, ${greenColor}, 0)`;
  }
});

rectangle.addEventListener("mouseleave", function () {
  // gsap.to(rectangle, {
  //     backgroundColor: "white"
  // })
  rectangle.style.backgroundColor = "white";
});
