function init () {

	//Функция-конструктор объекта
	function Duck(sound) {
		this.sound = sound;
		this.quack = function() {console.log(this.sound);} 
	}
	var toy = new Duck("quack quack"); //создаем объект toy (прототип) с this.sound="quack quack"

	toy.quack(); //Вызываем метод quack объекта toy

	console.log(typeof toy); //Определяем тип переменной toy
	console.log(toy instanceof Duck); //Оператор instanceof позволяет проверить, какому классу принадлежит объект, с учетом прототипного наследования. 
	//Если toy принадлежит к Duck, то возвращается true, иначе false.
}
window.onload = init; 


