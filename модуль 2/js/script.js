// function NewPow(num, pow) {
//   var result = num;
//
//   for (var i = 1; i < pow; i++) {
//     var result = result * num;
//   }
//
//   return result;
// }
//
//
// var num = +prompt("Введите число", "");
// var pow = +prompt("Введите степень", "");
//
// var result2 = NewPow(num, pow);
//
// console.log("Результат = " + result2);

var arr = []

function AddNames() {
  for (var i = 0; i < 5; i++) {
    arr[i] = prompt("Введите имя " + (i + 1), "");
  }
}

function CheakName() {
  var cName = prompt("Введите имя для проверки ", "");
  var cheakflag = 0;
  for (var i = 0; i < arr.length; i++) {
    if (cName == arr[i]) {
      cheakflag = 1;
      authUserName = arr[i];
    }
  }
  if (cheakflag == 1) {
    alert("Успех, вы вошли, " + authUserName);
  }
  else {
    alert("Это фиаско");
  }
}

// var name = prompt("Введите имена через запятаую", "");
// var arr = name.split(',');
console.log(arr);
AddNames();
alert(arr);
CheakName();
