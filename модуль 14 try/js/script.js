
$(function() {
  "use strict";
  var html = $('#test').html();
  var data = {
    question1:" Что из этого язык программирования?",
    question2:" Какой формат передачи данных наиболее распостранен?",
    question3:" Как платил Незнайка за свои вопросы?",
    q1o1: "js",
    q1o2: "ps",
    q1o3: "pzdc",
    q2o1: "SQL",
    q2o2: "jSon",
    q2o3: "XML",
    q3o1: "ПАРТИЗАН СПАЛИЛ В PZDC РОДНУЮ ХАТУ",
    q3o2: "литалп ен",
    q3o3: "ЭТО ЗНАЕТ МОЯ СВОБОДА. ЭТО ЗНАЕТ МОЕ ПОРАЖЕНИЕ. ЭТО ЗНАЕТ МОЕ ТОРЖЕСТВО.",
    ball: 0
  };

  localStorage.setItem('test', JSON.stringify(data));

  var testData = localStorage.getItem('test');
  testData = JSON.parse(testData);
  var content = tmpl(html, testData);

  $('body').append(content);




  function checkTest() {
    var secLi = $("input:checked");

    for (var i = 0; i < secLi.length; i++) {
      if (secLi[i].value == "true") {
        data.ball++;
      }
      else{
        data.ball--;
      }
    }
    if (data.ball < 0) {
      data.ball = 0;
    }
    var modBody = $('.modal-body').html("Ваш балл " + data.ball);

    console.log("ball is", data.ball);
    data.ball = 0;
  }
  $('.butTest').on('click', checkTest);
});
