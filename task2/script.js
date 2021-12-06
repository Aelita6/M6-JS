const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    console.log('Служит для вывода информации в консоль');
})

document.querySelector('#alert').addEventListener('click', () => {
    alert ('Предназначен для вывода в браузере диалогового окна с сообщением и кнопкой ОК');
});

document.querySelector('#prompt').addEventListener('click', () => {
    prompt ('Предназначен предназначен для вывода диалогового окна с сообщением,текстовым полем для ввода данных и кнопками «ОК» и «Отмена»');
});