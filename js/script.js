// Burger Menu
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
})


// Spoiler Footer
document.querySelectorAll('.more-info__title').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll('.more-info__links').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.more-info__links').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})

