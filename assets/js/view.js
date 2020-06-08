function myFunction(x) {
  if (x.matches) { // If media query matches
    $(".main").tiltedpage_scroll({
        sectionContainer: ".book-card", 
        angle: 40, 
        opacity: false,
        scale: true,
        outAnimation: true
    })
  } else {
       $(".main").tiltedpage_scroll({
            sectionContainer: ".book-card", 
            angle: 20, 
            opacity: false,
            scale: true,
            outAnimation: false
        })
  }
}

var x = window.matchMedia("(max-width: 500px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
