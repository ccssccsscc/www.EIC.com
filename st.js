// Выбираем кнопку
const btn = document.querySelector('.btn-toggle');
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function() {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle('dark-theme'); 
}) 
alert("Вы зашли на сайт ECS");
let user = prompt("Вы согласны с правилами сайта?", '');
if (user == 'Да'|| user=='да') {
  alert( 'Добро пожаловать' );
} else  {
  alert( 'Покиньте пожалуйства сайт' );
}
