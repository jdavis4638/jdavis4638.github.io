$(document).ready(function(){
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = toggle.nextElementSibling;
            content.classList.toggle('active');
        });

        // Add an event listener for the "keydown" event to handle the "Enter" key
        toggle.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default behavior (e.g., form submission)
                const content = toggle.nextElementSibling;
                content.classList.toggle('active');
            }
        });
    });
});