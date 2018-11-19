function GoogleCallback() {
  console.log('arguments', arguments);
}


$(function() {

var text = "найти";




function startSearch() {
  var request = $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyD0_m5BSSTwadkX7ZI9TsbOWoKsg1OO3k0&cx=text&q=query' + '&callback=GoogleCallback&context=?',
    dataType: 'jsonp',
  });
  console.log(request);
}


function Human() {
  this.name = "Andry";
  this.age = 21;
  this.gender = "male";
  this.height = "185cm";
  this.weight = "90kg";
}

function Worker(WorkPlace, Salary ) {
  this.workPlace = WorkPlace;
  this.salary = Salary;
}



function Student(Place, Stip ) {
  this.placeOfStudy = Place;
  this.scholarship = Stip;

}

Worker.prototype = new Human();

Student.prototype = new Human();

Worker.prototype.Work = function () {
  console.log(this.name + " Работает в " + this.workPlace + " с окладом в " + this.salary);
};

Student.prototype.Watch = function() {
  console.log(this.name + " смотрит сериалы " + "учится в " + this.placeOfStudy + " имея стипендию в " + this.scholarship);
}


var zndry = new Worker("shtab", "3000");

zndry.Work();
var andry = new Student("hogh", 1000);

andry.Watch();
$('.btn-outline-primary').on('click', startSearch);
});
