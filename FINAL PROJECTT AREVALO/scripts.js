document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('nav ul li a');

    // Add click event listeners to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the target section id from the href attribute
            var targetId = this.getAttribute('href').substring(1);

            // Scroll smoothly to the target section with a delay
            setTimeout(function() {
                document.getElementById(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 300); // Adjust the delay (in milliseconds) as needed
        });
    });
});

