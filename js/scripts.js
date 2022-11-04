window.onload = function() {
     let form = document.querySelector("form");
     form.onsubmit = function(event)  {
      event.preventDefault();

      //We access two HTML element: the legal-age and minor elements, and assign class hidden to them
      let legalAge = document.getElementById("legal-age");
      legalAge.setAttribute("class", "hidden");
      let minor = document.getElementById("minor");
      minor.setAttribute("class", "hidden");

      //We get the age of the user
      const age = parseInt(document.querySelector("input#age").value);

      //We check if age is greater than 18
      if(age >= 18) {
        legalAge.removeAttribute("class");
      } else {
        minor.removeAttribute("class");
      }
     };

  }
