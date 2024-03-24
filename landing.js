function sendMessage(button) {
    var userInput = button.previousElementSibling.value;
    var chatMessages = button.parentElement.querySelector(".chat-messages");

    // Display user message
    chatMessages.innerHTML += '<div class="user-message">' + userInput + '</div>';

    // Send user message to ChatGPT API
    fetch('YOUR_CHATGPT_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Display ChatGPT response
        chatMessages.innerHTML += '<div class="bot-message">' + data.message + '</div>';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


(function ($) {
    'use strict';

function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        340: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        540: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

var swiper = new Swiper(".testi-slider", {
    slidesPerView: 1,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1040: {
            slidesPerView: 3
        }


    }
});

var navDropdown = document.getElementById("navbarNavDropdown");
if(navDropdown) {
    Array.from(navbarNavDropdown.querySelectorAll(".nav-link")).forEach((elem) => {
        elem.addEventListener("click", (e) => { 
            if(navbarNavDropdown.querySelector(".nav-link.active")) {
                navbarNavDropdown.querySelector(".nav-link.active").classList.remove("active");
            }

            elem.classList.add("active");
        });
    })
}

})(jQuery)