function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// 修改后的函数，直接跳转到主页
function checkPassword() {
    window.location.href = 'index.html';
}

// 保留的DOMContentLoaded事件
document.addEventListener('DOMContentLoaded', () => {
    const savedPassword = sessionStorage.getItem('saved_password');
    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
});





// 禁止选中文本
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// 禁止复制
document.addEventListener('copy', function (e) {
    e.preventDefault();
});

// 禁止鼠标拖拽图片
const images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
}