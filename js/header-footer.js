class header extends HTMLElement {
        constructor(){
                super();
        }
        connectedCallback() {
                this.parentNode.innerHTML = `
                        <nav class="navigation-menu">
                                <section class="header-logo">
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
                                <cart-comp onclick="location.href='cart.html'"></cart-comp>
                        </nav>
                `;
        }
}

customElements.define("gs25-header", header);

class footer extends HTMLElement {
        constructor(){
                super();
        }
        connectedCallback() {
                this.parentNode.innerHTML = `
                        <div class="footer-logo" style="background-image:url('./img/gs25-footer.webp');"></div>
                        <article class="footer-all-menu">
                                <section class="footer-main-menu footer-col">
                                        <ul>
                                                <li><h4>ҮНДСЭН ЦЭС</h4></li>
                                                <li><a href="index.html">Нүүр хуудас</a></li>
                                                <li><a href="product.html">Бүтээгдэхүүн</a></li>
                                                <li><a href="location.html">Байршил</a></li>
                                                <li><a href="hr.html">Хүний нөөц</a></li>
                                                <li><a href="about.html">Бидний тухай</a></li>
                                        </ul>
                                </section>
                                <section class="footer-products footer-col">
                                        <ul>
                                                <li><h4>БҮТЭЭГДЭХҮҮН</h4></li>
                                                <li><a href="product.html">Бүх бүтээгдэхүүн</a></li>
                                                <li><a href="/product.html?category=belen">Бэлэн бүтээгдэхүүн</a></li>
                                                <li><a href="/product.html?category=snack">Амттан</a></li>
                                                <li><a href="/product.html?category=drink">Шингэн хүнс</a></li>
                                                <li><a href="/product.html?category=home">Ахуйн бараа</a></li>
                                                <li><a href="/product.html?category=fastfood">Түргэн хоолнууд</a></li>
                                                <li><a href="/product.html?category=bonus">Урамшуулалтай бүтээгдэхүүн</a></li>
                                        </ul>
                                </section>
                                <section class="footer-address footer-col">
                                        <ul>
                                                <li><h4>ХАЯГ</h4></li>
                                                <li>GS25 Mongolia Distribution Center<br>18-р хороо, Хан-Уул дүүрэг</li>
                                                <li>
                                                <address>
                                                        <a href="mailto:info@digitalconcept.mn">info@digitalconcept.mn</a>
                                                </address>
                                                <address>
                                                        
                                                        <a href="tel:+97676092525">+976 76092525</a>
                                                </address>
                                                </li>
                                        </ul>
                                </section>
                                <section class="footer-app-social footer-col">
                                        <section class="app-download">
                                                <h4>GS25 АПП ТАТАХ</h4>
                                                <br>
                                                <a href="https://apps.apple.com/us/app/gs25mn/id1562621269?uo=4" target="_blank">
                                                        <img src="./img/apple-app-store.png" alt="apple-app-store" width="140px" height="42px">
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=mn.infinite.gs25&pli=1" target="_blank">
                                                        <img src="./img/google-play-store.png" alt="google-play-store" width="140px" height="42px">
                                                </a>
                                        </section>
                                        <section class="social">
                                                <a href="https://www.facebook.com/gs25mn" class="icon" arial-label="Facebook" target="_blank">
                                                        <img src="img/social-icon-fb.webp" alt="facebook" width="64px" height="64px">
                                                </a>
                                                <a href="https://www.instagram.com/gs25mn/" class="icon" arial-label="Instagram" target="_blank">
                                                        <img src="img/social-icon-ig.webp" alt="facebook" width="64px" height="64px">
                                                </a>
                                                <a href="https://www.youtube.com/channel/UCNZRSkhwGeT-NkjDtlj0CHg" class="icon" arial-label="Youtube" target="_blank">
                                                        <img src="img/social-icon-yt.webp" alt="facebook" width="64px" height="64px">
                                                </a>
                                        </section>
                                </section>
                        </article>
                        <div class="footer-line"></div>
                        <section class="copyright">
                                <p>Copyright &copy2022 Digital Concept. All Rights Reserved</p>
                        </section>
                `;
  }
}
customElements.define("gs25-footer", footer);
