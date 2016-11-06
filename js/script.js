var test = {
    questions: ["Вопрос №1", "Вопрос №2", "Вопрос №3"],
    answers: [
        ["Вариант ответа №1.1", "Вариант ответа №1.2", "Вариант ответа №1.3"],
        ["Вариант ответа №2.1", "Вариант ответа №2.2", "Вариант ответа №2.3"],
        ["Вариант ответа №3.1", "Вариант ответа №3.2", "Вариант ответа №3.3"]
    ],
    genTitle: function () {
        var h1 = document.createElement('h1');
        h1.innerHTML = 'Тест по программированию';
        document.body.appendChild(h1);
    },

    genForm: function() {
        var form = document.createElement('form');
        form.action = '#';
        document.body.appendChild(form);

        return findForm = document.querySelector('form');
    },

    genQuestions: function () {
        var questLength = this.questions.length;

        for (var i = 0; i < questLength; i++){
            var div = document.createElement('div');
            div.className = 'funkyradio' + ' ' + i;
            findForm.appendChild(div);
            var p = document.createElement('p');
            p.innerHTML = this.questions[i];
            div.appendChild(p);
        }
    },
    genAnswers: function () {
        var questLength = this.questions.length;
        var answLength = this.answers.length;

        for (var i = 0; i < questLength; i++){
            var findClass = 'funkyradio' + ' ' + i;
            var findDiv = document.getElementsByClassName(findClass);

            for (var j = 0; j < answLength; j++){
                var funkDiv = document.createElement('div');
                funkDiv.className = 'funkyradio-primary';
                var input = document.createElement('input');
                var label = document.createElement('label');
                input.id = 'radio' + [i] + [j];
                input.type = 'radio';
                input.name = 'radio' + [i];
                label.htmlFor = 'radio' + [i] + [j];
                label.innerHTML = this.answers[i][j];
                findDiv[0].appendChild(funkDiv);
                funkDiv.appendChild(input);
                funkDiv.appendChild(label);
            }
        }
    },

    genButton: function() {
        var button = document.createElement('p');
        button.className = "btn btn-primary";
        button.innerHTML = 'Проверить мои результаты';
        findForm.appendChild(button);
    }

};

test.genTitle();
test.genForm();
test.genQuestions();
test.genAnswers();
test.genButton();
