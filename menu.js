
/* When the user clicks on the button,
			toggle between hiding and showing the dropdown content http://www.w3schools.com/howto/howto_js_dropdown.asp*/
			function menuBar() {
			    document.getElementById("myDropdown").classList.toggle("show");
			}

			// make dropdown menu appear and dissapear when user clicks on it
			window.onclick = function(event) {
			  if (!event.target.matches('.dropbtn')) {

			    var dropdowns = document.getElementsByClassName("dropdown-content");
			    var i;
			    for (i = 0; i < dropdowns.length; i++) {
			      var openDropdown = dropdowns[i];
			      if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			      }
			    }
			  }
			}
