var divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.body.appendChild(divWrapper);

var titleAdd = document.createElement('h2');
titleAdd.innerHTML = 'Тест по программированию';
divWrapper.appendChild(titleAdd);

var formAdd = document.createElement('form');
formAdd.action = '#';
divWrapper.appendChild(formAdd);

var formAddObject = {
    questions: ["1. Вопрос №1", "2. Вопрос №2", "3. Вопрос №3"],
    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],

    block: function () {
        for (var i = 0; i < this.questions.length; i++) {
            var pAdd = document.createElement('p');
            pAdd.classList.add('question');
            pAdd.innerHTML = this.questions[i];
            formAdd.appendChild(pAdd);

            for (var j = 0; j < this.answers.length; j++) {
                var labelAdd,
                    inputAdd;

                inputAdd = document.createElement('input');
                inputAdd.type = 'checkbox';
                inputAdd.classList.add('check');
                formAdd.appendChild(inputAdd);

                labelAdd = document.createElement('label');
                labelAdd.innerHTML = this.answers[j];
                labelAdd.classList.add('checktext');
                formAdd.appendChild(labelAdd);
            }
        }
    },
    button: function () {
        inputSubmit = document.createElement('input');
        inputSubmit.type = 'submit';
        inputSubmit.value = 'Проверить мои результаты';
        inputSubmit.classList.add('buttonform');
        formAdd.appendChild(inputSubmit);
    }
}

formAddObject.block();
formAddObject.button();
