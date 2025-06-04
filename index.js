const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

function openModal() {
    document.getElementById("taskModal").classList.add("active");
}
function closeModal() {

    document.getElementById("taskModal").classList.remove("active");

}
function opencreate() {
    document.getElementById("create").classList.add("active");
}
function openjoin() {
    document.getElementById("Join").classList.add("active");
}
function opennewtask() {
    document.getElementById("taskModal").classList.add("active");
}
function closejoin() {
    document.getElementById("Join").classList.remove("active");
}
function closecreat() {
    document.getElementById("create").classList.remove("active");
}

