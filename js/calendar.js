function calendar(id, year, month) {
  var Dlast = new Date(year, month + 1, 0).getDate(),
    D = new Date(year, month, Dlast),
    DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
    calendar = '<tr>',
    month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  if (DNfirst != 0) {
    for (var i = 1; i < DNfirst; i++) calendar += '<td>';
  } else {
     for (var i = 0; i < 6; i++) calendar += '<td>';
  }
  for (var i = 1; i <= Dlast; i++) {
     if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">'+'<p>' + i;
     } else {
       calendar += '<td>'+'<p>' + i;
     }
     if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
       calendar += '<tr>';
     }
  }
  for (var i = DNlast; i < 7; i++) calendar += '<td> ';
  document.querySelector('#' + id + ' tbody').innerHTML = calendar;
  document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) { 
    document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
  }
}
calendar("mini-calendar", new Date().getFullYear(), new Date().getMonth());
document.querySelector('#mini-calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  calendar("mini-calendar", document.querySelector('#mini-calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#mini-calendar thead td:nth-child(2)').dataset.month) - 1);
}
document.querySelector('#mini-calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  calendar("mini-calendar", document.querySelector('#mini-calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#mini-calendar thead td:nth-child(2)').dataset.month) + 1);
}

calendar2();

function calendar2() {

calendar2 = {};

// Названия месяцев
calendar2.monthName=[
  'Январь', 'Февраль', 'Март', 'Апрель',
  'Май', 'Июнь', 'Июль', 'Август',
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

// Названия дней недели
calendar2.dayName=[
  'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'
];

// Выбранная дата
calendar2.selectedDate = {
  'Day' : null,
  'Month' : null,
  'Year' : null
};

// ID элемента для размещения календарика
calendar2.element_id=null;

// Выбор даты
calendar2.selectDate = function(day,month,year) {
  calendar2.selectedDate={
    'Day' : day,
    'Month' : month,
    'Year' : year
  };
  calendar2.drawCalendar(month,year);
}

// Отрисовка календарика на выбранный месяц и год
calendar2.drawCalendar = function(month,year) {
  var tmp='';
  tmp+='<table class="calendar">';

  // Месяц и навигация
  tmp+='<div class="head-month">';
  tmp+='<div class="navigation arrow" '+
       'onclick="calendar2.drawCalendar('+(month>1?(month-1):12)+
       ','+(month>1?year:(year-1))+');calendarReady();"><img src="../images/headermenu/v3.png" alt=""><\/div>';
  tmp+='<div colspan="5" class="navigation">'+
       calendar2.monthName[(month-1)]+'  '+year+'<\/div>';
  tmp+='<div class="navigation arrow" '+
       'onclick="calendar2.drawCalendar('+(month<12?(month+1):1)+
       ','+(month<12?year:(year+1))+');calendarReady();"><img src="../images/headermenu/v1.png" alt=""><\/div>';
  tmp+='<\/div>';

  // Шапка таблицы с днями недели
  tmp+='<tr class="head-days">';
  tmp+='<th>'+calendar2.dayName[0]+'<\/th>';
  tmp+='<th>'+calendar2.dayName[1]+'<\/th>';
  tmp+='<th>'+calendar2.dayName[2]+'<\/th>';
  tmp+='<th>'+calendar2.dayName[3]+'<\/th>';
  tmp+='<th>'+calendar2.dayName[4]+'<\/th>';
  tmp+='<th>'+calendar2.dayName[5]+'<\/th>';
  tmp+='<th>'+calendar2.dayName[6]+'<\/th>';
  tmp+='<\/tr>';

  // Количество дней в месяце
  var total_days = 32 - new Date(year, (month-1), 32).getDate();
  // Начальный день месяца
  var start_day = new Date(year, (month-1), 1).getDay();
  if (start_day==0) { start_day=7; }
  start_day--;
  // Количество ячеек в таблице
  var final_index=Math.ceil((total_days+start_day)/7)*7;

  var day=1;
  var index=0;
  do {
    // Начало строки таблицы
    if (index%7==0) {
      tmp+='<tr class="tr-table">';
    }
    // Пустые ячейки до начала месяца или после окончания
    if ((index<start_day) || (index>=(total_days+start_day))) {
      tmp+='<td><\/td>';
    }
    else {
      var class_name='';
      // Выбранный день
      if (calendar2.selectedDate.Day==day &&
          calendar2.selectedDate.Month==month &&
          calendar2.selectedDate.Year==year) {
        class_name='selected';
      }
      // Ячейка с датой
      if (calendar2.selectedDate.Day==day &&
        calendar2.selectedDate.Month==month) {
        tmp+='<td class="main-day today" data-key="'+day+'-'+month+'-'+year+'">'+'<div class="day">'+day+'<\/div>'+'<\/td>';
       } 
       else{
        tmp+='<td class="main-day" data-key="'+day+'-'+month+'-'+year+'">'+'<div class="day">'+day+'<\/div>'+'<\/td>';
       }

      day++;
    }
    // Конец строки таблицы
    if (index%7==6) {
      tmp+='<\/tr>';
    }
    index++;
  }
  while (index<final_index);

  tmp+='<\/table>';

  // Вставить таблицу календарика на страницу
  var el=document.getElementById(calendar2.element_id);
  if (el) {
    el.innerHTML=tmp;
  }
}

// ID элемента для размещения календарика
calendar2.element_id = 'calendar_table';

// По умолчанию используется текущая дата
calendar2.selectedDate={
  'Day' : new Date().getDate(),
  'Month' : parseInt(new Date().getMonth())+1,
  'Year' : new Date().getFullYear()
};

// Нарисовать календарик
calendar2.drawCalendar(
  calendar2.selectedDate.Month,
  calendar2.selectedDate.Year
);


}