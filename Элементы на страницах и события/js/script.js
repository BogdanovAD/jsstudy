let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0], //возвращает эл-т со страницы по номеру(в данном случае 1й)
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'), //возвращает первый и единственный эл-т со страницы(в данном случае class)
    mailInput = document.querySelectorAll('.contactform_mail'),
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];

// function hover() {
//     heading.textContent = 'Действительно всё!';
// }
// chooseBtn.onmouseenter = hover; старый метод

chooseBtn.addEventListener('mouseenter', function () {
    heading.textContent = 'Действительно всё!';
});

chooseBtn.addEventListener('mouseleave', function () {
    heading.textContent = 'Все включено!';
});

receiveBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});
//При клике на кнопку "Получить консультацию" мы меняем у окна modal css св-во display с none на block

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});
//При клике на крестик прячем окно

nameInput.addEventListener('input', function () {
    text.value = `Меня зовут ${nameInput} я хочу спросить: `;
});
