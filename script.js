function buyHint(hint) {
    alert(`Вы купили "${hint}"! Спасибо за покупку.`);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Ваше сообщение отправлено!');
});
