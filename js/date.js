$(document).ready(function() {
  calendarReady();
  formatDate();
  createCalendar();

});
var exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'));

$("body").on("click", ".date-set", function () {
  var date = $(this).attr('data-id');
  $('.datepicker').val(date);
  $('#calendar').fadeOut(0);
});

function loadDate() {
  if($('#calendar').css('display') == "none"){
    $('#calendar').fadeIn(0);
  }
  else{
    $('#calendar').fadeOut(0);
  }
}

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join('.');
}

function createCalendar(elem, year, month) {

  elem = document.getElementById('calendar');

  let d = new Date(Date.now());
  let table = '<table>';
  let arrMonthName = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  
  for (let i = 0; i < 7; i++) {
    let monthName = arrMonthName[d.getMonth()]; // получаем название месяца
    table += "<div class='date-set' data-id='"+formatDate(d)+"'>"+d.getDate()+' '+monthName+'</div>';
    d.setDate(d.getDate() + 1);
  }
 
  // закрыть таблицу
  table += '</table>';
 
  elem.innerHTML = table;
}


function calendarReady() {
  $('.main-day').each(function(i){
  
    if ($(this).attr('data-key') == '1-1-2022'){
      $(this).find( ".day" ).after('<p class="holiday">Выходной</p>');
    };
    if ($(this).attr('data-key') == '6-1-2022'){
      $(this).find( ".day" ).after('<p class="holiday">Отпуск</p>');
    };
    if ($(this).attr('data-key') == '7-1-2022'){
      $(this).find( ".day" ).after('<p class="holiday">Отпуск</p>');
    };
    if ($(this).attr('data-key') == '19-1-2022'){
      $(this).find( ".day" ).after('<p class="holiday">Выходной</p>');
    };
    if ($(this).attr('data-key') == '31-1-2022'){
      $(this).find( ".day" ).after('<p class="holiday">Выходной</p>');
    };
  
    if ($(this).attr('data-key') == '2-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Сидор Васильевич</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
    };

    if ($(this).attr('data-key') == '3-1-2022'){
      $(this).find( ".day" ).after('<p class="more-workers" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = more-workers-table><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p></div><div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Все 14 маршрутов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };
    if ($(this).attr('data-key') == '4-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };
    if ($(this).attr('data-key') == '5-1-2022'){
            $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };
    if ($(this).attr('data-key') == '8-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Сидор Васильевич</p>');
    };
    if ($(this).attr('data-key') == '11-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Сидор Васильевич</p>');
    };
    if ($(this).attr('data-key') == '12-1-2022'){
           $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Сидор Васильевич</p>');
    };
    if ($(this).attr('data-key') == '14-1-2022'){
      $(this).find( ".day" ).after('<p class="more-workers" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = more-workers-table><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p></div><div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Все 14 маршрутов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
            $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Сидор Васильевич</p>');
    };
    if ($(this).attr('data-key') == '15-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };
    if ($(this).attr('data-key') == '16-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };
    if ($(this).attr('data-key') == '17-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };

    if ($(this).attr('data-key') == '22-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Сидор Васильевич</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
    };

    if ($(this).attr('data-key') == '23-1-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };
    if ($(this).attr('data-key') == '25-1-2022'){
      $(this).find( ".day" ).after('<p class="more-workers" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = more-workers-table><p>Сергей Иванович</p><p>Василий Соловьёв</p><p>Сергей Иванович</p><p>Захар Михайлович</p></div><div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Все 4 маршрута</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };
    if ($(this).attr('data-key') == '27-1-2022'){
        $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
    };




    if ($(this).attr('data-key') == '2-2-2022'){
      $(this).find( ".day" ).after('<p class="holiday">Отпуск</p>');
    };
    if ($(this).attr('data-key') == '18-2-2022'){
      $(this).find( ".day" ).after('<p class="holiday">Выходной</p>');
    };
    if ($(this).attr('data-key') == '28-2-2022'){
      $(this).find( ".day" ).after('<p class="holiday">Выходной</p>');
    };

    if ($(this).attr('data-key') == '8-2-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Сидор Васильевич</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
    };

    if ($(this).attr('data-key') == '11-2-2022'){
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Захар Иванович</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Сидор Васильевич</p>');
      $(this).find( ".day" ).after('<p class="worker" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-html="true" title="<div class = class-tooltip><div class = head-tooltip ><p>НАИМЕНОВАНИЕ</p><p>КОД 7701045900000202</p></div><div class =`body-tooltip`><div class=body-tooltip-info>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</div><p>СЕТЬ</p><div class= body-tooltip-info >Белый ветер цифровой</div></div></div><div class = class-tooltip><p>ПОСЕЩЕНИЕ</p><div class= body-tooltip-info >14:27:15<br>21.01.2022</div><p>АДРЕС</p><div class= body-tooltip-info >143090, Краснозгамегск, Молодежная д 2/1</div></div></div>">Генадий Стрельцов</p>');
    };
  });

    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) { 
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
  }