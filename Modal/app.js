const openBtn = document.querySelector(".open-modal");
const modalContainer = document.querySelector(".modal-container")
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener('click', function() {
    modalContainer.classList.add("show");
})

closeBtn.addEventListener('click', function() {
    modalContainer.classList.remove("show");
})
