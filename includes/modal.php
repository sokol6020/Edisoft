<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Добавление маршрута</h5>
        <button type="button" onclick="exampleModal.toggle();" class="close" data-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body">
        <div class="ma-day">
          Маршрут на день
          <div class="input_date date_time" onclick="loadDate();" >
          <input type="text" class="datepicker">
          <span>
            📅
          </span>
          <div id="calendar"></div>
        </div></div>
        <div class="names-ma-day">
          <p class="torg-ma">Торговые точки</p>
          <p class="org-ma">Торговые организации</p>
          <p class="pot-ma">Потенциальные торговые точки</p>
        </div>
        <div class="inp-ma">
          <input placeholder="Название" type="text">
          <input placeholder="Адрес" type="text">
          <input placeholder="Сеть" type="text">
          <input placeholder="ТО" type="text">
          <input placeholder="Код" type="text">
        </div>
        <div class="tab-ma">
        <table>
          <tr><th></th><th>НАЗВАНИЕ</th><th>АДРЕС</th><th>СЕТЬ</th><th>ТО</th><th>ПОСЕЩЕН</th><th>КОД</th></tr>
          <tr><td><input type="checkbox" name="" id=""><label class="checkbox"></label></td><td>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</td><td>143090, Краснозгамегск, Молодежная д 2/1</td><td>Белый ветер</br>ЦИФРОВОЙ</td><td>Общество с ограниченной ответственностью "Евросеть-Ритейл"</td><td>21.01.2022 </br> 14:27:15</td><td>44000000404</td></tr>
          <tr><td><input type="checkbox" name="" id=""><label class="checkbox"></label></td><td>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</td><td>143090, Краснозгамегск, Молодежная д 2/1</td><td>Белый ветер</br>ЦИФРОВОЙ</td><td>Общество с ограниченной ответственностью "Евросеть-Ритейл"</td><td>21.01.2022 </br> 14:27:15</td><td>44000000404</td></tr>
          <tr><td><input type="checkbox" name="" id=""><label class="checkbox"></label></td><td>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</td><td>143090, Краснозгамегск, Молодежная д 2/1</td><td>Белый ветер</br>ЦИФРОВОЙ</td><td>Общество с ограниченной ответственностью "Евросеть-Ритейл"</td><td>21.01.2022 </br> 14:27:15</td><td>44000000404</td></tr>
          <tr><td><input type="checkbox" name="" id=""><label class="checkbox"></label></td><td>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</td><td>143090, Краснозгамегск, Молодежная д 2/1</td><td>Белый ветер</br>ЦИФРОВОЙ</td><td>Общество с ограниченной ответственностью "Евросеть-Ритейл"</td><td>21.01.2022 </br> 14:27:15</td><td>44000000404</td></tr>
          <tr><td><input type="checkbox" name="" id=""><label class="checkbox"></label></td><td>205, МЮЗ, ОАО Московский Ювелирный завод, г. Химки, Микрорайон Икея, корпус 2</td><td>143090, Краснозгамегск, Молодежная д 2/1</td><td>Белый ветер</br>ЦИФРОВОЙ</td><td>Общество с ограниченной ответственностью "Евросеть-Ритейл"</td><td>21.01.2022 </br> 14:27:15</td><td>44000000404</td></tr>
        </table>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Добавить</button>
      </div>
      </div>
    </div>
  </div>
</div>