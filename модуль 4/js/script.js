var objtest = {

  createTitle: function() {
      var textTitle = document.createElement('h1');
      var body = document.querySelector('body');
      var header = document.createElement('header');
        console.log(header);
      textTitle.innerHTML = 'Тест по программированию';
      body.appendChild(header);
      header.insertBefore(textTitle, header.firstChild);
      textTitle.style.textAlign = 'center';
    },
    createList: function() {
    var list = document.createElement('ol');
    var header = document.getElementsByTagName('header');
    console.log(header);
    header[0].appendChild(list);

    var date = ["Вопрос №1", "Вопрос №2", "Вопрос №3"];

    for (var i = 0; i < date.length; i++) {
      var li = document.createElement('li');
      li.innerHTML = date[i];
      list.appendChild(li);
      console.log(li);
      var vloList = document.createElement('ol');
      li.appendChild(vloList);
      vloList.innerHTML = "<li>Вариант ответа №1</li><li>Вариант ответа №2</li><li>Вариант ответа №3</li>";

      }
    },
    createButton: function() {
    var button = document.createElement('button');
    button.classList.add("btn-primary");
    button.style.display = " block";
    button.style.margin = " 0 auto";
    button.style.padding = "15px";
    button.innerHTML = "Проверить мои результаты";
    var header = document.getElementsByTagName('header');
    header[0].appendChild(button);
  }
}

objtest.createTitle();
objtest.createList();
objtest.createButton();
