class ProductCardItem {
  constructor(src, alt, name, price, bonus) {
    this.src = src;
    this.alt = alt;
    this.name = name;
    this.price = price;
    this.bonus = bonus;
  }
  render_proCard() {
    return `<div class="clickProduct">
      <div class="clickProduct-img">
        <img src="${this.src}" alt="hotdog-icon" />
      </div>
      <div class="clickProduct-desc">
        <div class="clickProduct-name">
          <h4>${this.name}</h4>
        </div>
        <div class="clickProduct-price">
          <p>Үнэ: ${this.price}</p>
        </div>
        <div class="clickProduct-table">
          <div>
            <h5>ТЭЖЭЭЛЛЭГ ЧАНАР (100гр)</h5>
            <div>
              <ul>
                <li>Илчлэг: 314</li>
                <li>Өөх тос: 18.6 гр</li>
                <li>Уураг: 11.4 гр</li>
                <li>Натри: 810 мг</li>
                <li>Нүүрс ус: 24.3</li>
                <li>Элсэн чихэр: 4 гр</li>
              </ul>
            </div>
          </div>
          <div>
            <h5>ОРЦ НАЙРЛАГА</h5>
            <div>
              <p>Гурил, үхрийн махан зайдас амтлагч</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
    `;
  }
}
function clickJob(parent_node) {
  let text =
    document.getElementsByClassName(parent_node)[0].childNodes[3].textContent;
  let returnValue = "";

  for (const data of hrJobData) {
    if (text == data.name) {
      let obj = new JobItem(data.name, data.p_one, data.p_two);
      returnValue = obj.render();
      break;
    }
  }

  document.getElementsByClassName("click-hr-job")[0].innerHTML = returnValue;
}
function remove(element) {
  element.parentNode.removeChild(element);
}
