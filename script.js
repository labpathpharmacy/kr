function closeAllSubMenus() {
    const subMenus = document.querySelectorAll('.sb2, .sb');
    subMenus.forEach(menu => menu.classList.remove('show-menu'));
    const mb2 = document.getElementById('mb2');
    const mb = document.getElementById('mb');
    if (mb2) {
        mb2.innerText = '보고서';
        mb2.style.backgroundColor = '';
        mb2.style.color = '';
    }
    if (mb) {
        mb.innerText = '문의하기';
        mb.style.backgroundColor = '';
        mb.style.color = '';
    }
}
function toggleMenu3() {
    event.preventDefault(); 
    const menu = document.querySelector('.mc3');
    const button = document.getElementById('mb3');
    if (menu.classList.contains('show-menu')) {
        closeAllSubMenus();
    }
    menu.classList.toggle('show-menu');
    toggleButtonText(button,'☰ 메뉴');
}
window.onclick = function(event) {
    if (!event.target.matches('.bc button')) {
        const menu3 = document.querySelector('.mc3');
        if (menu3) menu3.classList.remove('show-menu');
        const button3 = document.getElementById('mb3');
        if (button3) button3.innerText = '☰ 메뉴';
        closeAllSubMenus();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("pop");
    const closeBtn = document.getElementById("end");
    popup.classList.add("show");
    closeBtn.addEventListener("click", function() {
        popup.classList.remove("show");
    });
});
