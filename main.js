

let toggleBtn = document.querySelector('.btn-toggle');

let sideBar = document.querySelector('.side-bar')



toggleBtn.onclick = () => {
    sideBar.classList.toggle("show");
}
