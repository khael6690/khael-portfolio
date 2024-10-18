AOS.init({
    // disable: "phone",
    offset: 120,
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
});

const scriptURL =
    "https://script.google.com/macros/s/AKfycbxNx_rg376Nr-XC_qepgyiGIw3Y7Eq4DlSGUPvrU15yTzb1M_xGJRmQYVWyudjp0W1GEQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    $('.btn-submit').html('<i class="fa fa-spinner fa-spin" style="font-size:16px;"></i>');
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // Success message
            $('.btn-submit').html('Send Message');
            const alert = document.querySelector('.alert')
            alert.style.display = "block"
            //clear all fields
            form.reset()
            console.log("Success!", response);
        })
        .catch((error) => {
            // Fail message

            //clear all fields
            console.error("Error!", error.message);
        });
})


const close = document.querySelector('.btn-close')
close.addEventListener('click', (e) => {
    e.preventDefault()
    const alert = document.querySelector('.alert')
    alert.style.display = "none"
})

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })

        }
    })

    let header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const backTop = document.querySelector('#to-top')

    if (fixedNav == 0) {
        backTop.style.display = "none"
    }
    else {
        backTop.style.display = "block"
    }

    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 500,
    loop: true,
})