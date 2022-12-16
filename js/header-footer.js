class header extends HTMLElement {
        connectedCallback() {
                this.parentNode.innerHTML = `
                        <nav class="navigation-menu">
                                <section>
                                        <a href="index.html">
                                                <img src="./img/gs25-logo.webp" alt="GS25 Logo" width="140px" height="44.282px">
                                        </a>
                                </section>
                                <ul class="nav-links">
                                        <li class="nav-item"><a href="index.html">Нүүр хуудас</a></li>
                                        <li class="nav-item"><a href="product.html">Бүтээгдэхүүн</a></li>
                                        <li class="nav-item"><a href="location.html">Байршил</a></li>
                                        <li class="nav-item"><a href="hr.html">Хүний нөөц</a></li>
                                        <li class="nav-item"><a href="about.html">Бидний тухай</a></li>                                             
                                </ul>
                                <div class="hamburger">
                                        <div class="line1"></div>
                                        <div class="line2"></div>
                                        <div class="line3"></div>
                                </div>
                        </nav>
                `
        }
}

customElements.define("gs25-header", header);

class footer extends HTMLElement {
        connectedCallback() {
                this.parentNode.innerHTML = `
                <section class="footer">
                        <section class="footer-logo">
                                <picture>
                                        <source media="(min-width:1200px)" srcset="img/gs25-footer.png">
                                        <source media="(min-width:720px)" srcset="img/gs25-footer.png">
                                        <img src="img/gs25-footer.png" alt="gs25-footer" width="100%" height="auto">
                                </picture>
                        </section>
                        <article class="footer-all-menu">
                                <section class="footer-main-menu footer-col">
                                <ul>
                                        <li><h4>ҮНДСЭН ЦЭС</h4></li>
                                        <li><a href="#">Нүүр хуудас</a></li>
                                        <li><a href="product.html">Бүтээгдэхүүн</a></li>
                                        <li><a href="location.html">Байршил</a></li>
                                        <li><a href="hr.html">Хүний нөөц</a></li>
                                        <li><a href="about.html">Бидний тухай</a></li>
                                </ul>
                                </section>
                                <section class="footer-products footer-col">
                                        <ul>
                                                <li><h4>БҮТЭЭГДЭХҮҮН</h4></li>
                                                <li><a href="#">Бүх бүтээгдэхүүн</a></li>
                                                <li><a href="#">Бэлэн бүтээгдэхүүн</a></li>
                                                <li><a href="#">Амттан</a></li>
                                                <li><a href="#">Шингэн хүнс</a></li>
                                                <li><a href="#">Ахуйн бараа</a></li>
                                                <li><a href="#">Түргэн хоолнууд</a></li>
                                                <li><a href="#">Урамшуулалтай бүтээгдэхүүн</a></li>
                                        </ul>
                                </section>
                                <section class="footer-address footer-col">
                                        <ul>
                                                <li><h4>ХАЯГ</h4></li>
                                                <li>GS25 Mongolia Distribution Center<br>18-р хороо, Хан-Уул дүүрэг</li>
                                                <li>
                                                <address>
                                                        <a href="mailto:info@digitalconcept.mn">info@digitalconcept.mn</a><a href="tel:+97676092525">+976 76092525</a>
                                                </address>
                                                </li>
                                                <li>
                                                <address>
                                                        <a href="tel:+97676092525">+976 76092525</a>
                                                </address>
                                                </li>
                                        </ul>
                                </section>
                                <section class="footer-contact footer-col">
                                        <h4>ХОЛБОГДОХ</h4>
                                        <form action="" method="get">
                                                <label for="feedback_type">Төрөл</label>
                                                <input type="text" name="type" id="feedback_type" placeholder="Хамтран ажиллах">
                                                <div>
                                                <label for="feedback_email">Имейл</label>
                                                <input type="email" name="mail" id="feedback_email" placeholder="example@gmail.com">
                                                <label for="feedback_phone">Утас</label>
                                                <input type="tel" name="phone" id="feedback_phone" placeholder="99123456">
                                                </div>
                                                <label for="feedback_comment">Сэтгэгдэл</label>
                                                <textarea name="comment" id="feedback_comment" cols="30" rows="10"></textarea>
                                                <input class="feedback_send" type="submit" value="Илгээх" onclick="">
                                        </form>
                                </section>
                        </article>
                        <section class="footer-app-social">
                                <section class="app-download">
                                        <p>GS25 АПП ТАТАХ</p>
                                        <a href="https://apps.apple.com/us/app/gs25mn/id1562621269?uo=4">
                                                <img src="./img/apple-app-store.png" alt="apple-app-store" width="140px" height="42px">
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=mn.infinite.gs25&pli=1">
                                                <img src="./img/google-play-store.png" alt="google-play-store" width="140px" height="42px">
                                        </a>
                                </section>
                                <section class="social">
                                        <a href="https://www.facebook.com/gs25mn">
                                                <img src="img/facebook-icon.svg" alt="fb" width="30px" height="30px">
                                        </a>
                                        <a href="https://www.instagram.com/gs25mn/">
                                                <img src="img/instagram-icon.svg" alt="fb" width="30px" height="30px">
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCNZRSkhwGeT-NkjDtlj0CHg">
                                                <img src="img/youtube-icon.svg" alt="fb" width="30px" height="30px">
                                        </a>
                                </section>
                        </section>
                        <section class="copyright">
                                <p>&copyCreated By GS25</p>
                        </section>
                </section>
                `
        }
}
customElements.define("gs25-footer", footer);