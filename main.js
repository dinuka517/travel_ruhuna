
function openImg(img) {
    document.getElementById("imgModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeImg() {
    document.getElementById("imgModal").style.display = "none";
}


var navbuttons = document.getElementById("navbuttons");

        function showMenu(){
            navbuttons.style.right = "0";
        }
        function hideMenu(){
            navbuttons.style.right = "-200px";
        }
        
document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic Form Validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Simple Email Regex
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success Message
            alert("Thank you, " + name + "! Your message has been sent successfully. (Static Demo)");
            
            // Clear Form
            this.reset();
        });