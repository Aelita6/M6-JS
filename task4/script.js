
const userText = prompt('Введите текст');

const userTextField = document.querySelector('a');


document.querySelector('a').addEventListener('click', () => {
    prompt ('Измените текст ссылки')
});


userTextField.textContent = userText;