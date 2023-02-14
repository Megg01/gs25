class JobItem {
        constructor(name, p_one, p_two) {
                this.name = name;
                this.p_one = p_one;
                this.p_two = p_two;
        }
        render() {
                return `
                <div class="hr-click-container">
                        <div class="hr-click-name">
                                <h3>${this.name}</h3>
                        </div>
                        <div class="hr-click-table">
                                <div class="col col-1">
                                        <h4>Гүйцэтгэх үндсэн үүрэг</h4>
                                        <p>${this.p_one}</p>
                                </div>
                                <div class="col col-2">
                                        <h4>Тавигдах шаардлага</h4>
                                        <ul>
                                                ${this.p_two}
                                        </ul>
                                </div>
                        </div>
                        <div class="hr-click-anket">
                                <a href="https://jobs-gs25.web.app/job-application" target="_blank">Анкет илгээх</a>
                        </div>
                        <button onclick="remove(this.parentNode)">x</button>
                </div>
                `;
        }
        download(url){
                fetch(url)
                        .then(response => response.json())
                                .then(data => {
                                        console.log(data);
                                        return data;
                        });
        }
}
function clickJob(parent_node){
        let text = document.getElementsByClassName(parent_node)[0].childNodes[3].textContent;
        let returnValue = "";

        const datas = hrJobDatas.filter(hrJobData => hrJobData.name == text);
        console.log(datas[0].name);
        if(datas.length > 0){
                let obj = new JobItem(
                        datas[0].name,
                        datas[0].p_one,
                        datas[0].p_two
                );
                returnValue = obj.render();
        }

        document.getElementsByClassName("click-hr-job")[0].innerHTML = returnValue;
}
function remove(element) {
        element.parentNode.removeChild(element);
}
const hrJobDatas =
[
        {
                name: "Дэлгүүрийн Ажилтан",
                p_one: "GS25 ая тухтай дэлгүүрээр үйлчлүүлж буй үйлчлүүлэгчдэд нөхөрсөг, найрсаг ая тухтай үйлчилгээг үзүүлэн шинэхэн бүтээгдэхүүнээр үйлчлэн дэлгүүрийн өдөр тутмын хэвийн үйл ажиллагааг ханган ажиллана. Ажлын байрны тодорхойлолтонд заасан ажил үүргийг гүйцэтгэнэ.",
                p_two: "<li>Бүрэн дунд болон түүнээс дээш боловсролтой</li><li>Цагийн менежмент сайтай, хариуцлагатай</li><li>Ажлын хурд, хөрвөх чадвар сайтай</li><li>Харилцааны ур чадвартай</li><li>Тууштай ажиллаж өсөн дэвших хүсэл тэмүүлэлтэй</li>"
        },
        {
                name: "Дэлгүүрийн Менежер",
                p_one: "Дэлгүүрийн ажилтнуудыг удирдан зохион байгуулах, бараа бүтээгдэхүүний удирдлагад хяналт тавих, дэлгүүрийн хэвийн үйл ажиллагааг ханган үйлчилгээний стандартыг хэвшүүлэн  үйлчлүүлэгчдэд нөхөрсөг аятай үйлчилгээг хяналт тавьж дэмжлэг үзүүлэн ажиллах. Ажлын байрны тодорхойлолтонд заасан чиг үүргийг гүйцэтгэнэ.",
                p_two: "<li>Бакалавр болон түүнээс дээш зэрэгтэй</li><li>Асуудал шийдвэрлэх чадвар сайтай</li><li>Борлуулалт хийх ур чадвартай</li><li>Хариуцлагатай, ажлын хурд сайтай</li><li>Багаар ажиллах чадвартай</li><li>Сурган зөвлөх, тайлбарлах чадвартай</li><li>Ачаалал даах чадвартай</li>"
        },
        {
                name: "Бусад",
                p_one: "",
                p_two: ""
        }
];