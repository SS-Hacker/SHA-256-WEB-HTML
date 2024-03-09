function calculateSHA256() {
      var inputString = document.getElementById("inputString").value;
      if (inputString.trim() === "") {
        alert("Please enter a string to generate SHA-256 hash.");
        return;
      }
      window.crypto.subtle.digest({ name: "SHA-256" }, new TextEncoder().encode(inputString))
        .then(hashBuffer => {
          var hashArray = Array.from(new Uint8Array(hashBuffer));
          var hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
          document.getElementById("result").textContent = "SHA-256 Hash: " + hashHex;
        })
        .catch(error => console.error(error));
    }