// function myFunction() {
//     var first = document.getElementById("firstSection");
//     if (first.style.display === "none") {
//         first.style.display = "block";
//     } else {
//         first.style.display = "none";
//     }
//   }

//   function myBackend() {
//     var second = document.getElementById("Backend");
//     if (second.style.display === "none") {
//         second.style.display = "block";
//         first.style.display = "none";
//     } else {
//         second.style.display = "none";
//     }
//   }


function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();