class header extends HTMLElement {
        connectedCallback() {
                this.parentNode.innerHTML = `
                        <section>
                
                        </section>
                        <section>
                        <picture>
                                <a href="index.html">
                                <img src="./img/logo.svg" alt="GS25 Logo" width="100px" height="40px">
                                </a>
                        </picture>
                        <nav>
                                <ul>
                                <li><a href="product.html">Бүтээгдэхүүн</a></li>
                                <li><a href="location.html">Байршил</a></li>
                                <li><a href="hr.html">Хүний нөөц</a></li>
                                <li><a href="aboutus.html">Бидний тухай</a></li>
                                </ul>
                        </nav>
                        </section>
                `
        }
}

customElements.define("gs25-header", header);

class footer extends HTMLElement {
        connectedCallback() {
                this.parentNode.innerHTML = `
                <section>
                        <section>
                        <section>
                                <p>GS25 АПП ТАТАХ</p>
                        </section>
                        <section>
                                <a href="https://apps.apple.com/us/app/gs25mn/id1562621269?uo=4">
                                <img src="./img/apple-app-store.png" alt="apple-app-store" width="140px" height="42px">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=mn.infinite.gs25&pli=1">
                                <img src="./img/google-play-store.png" alt="google-play-store" width="140px" height="42px">
                                </a>
                        </section>
                        </section>
                        <section>
                        <a href="https://www.facebook.com/gs25mn">
                                <img src="./img/facebook-icon.svg" alt="facebook-icon" height="40px" width="40px">
                        </a>
                        <a href="https://www.instagram.com/gs25mn/">
                                <img src="./img/instagram-icon.svg" alt="instagram-icon" height="40px" width="40px">
                        </a>
                        <a href="https://www.youtube.com/channel/UCNZRSkhwGeT-NkjDtlj0CHg">
                                <img src="./img/youtube-icon.svg" alt="youtube-icon" height="40px" width="40px">
                        </a>
                        </section>
                </section>
                <section>
                        <section>
                        <address>
                                <a href="mailto:info@digitalconcept.mn">info@digitalconcept.mn</a><a href="tel:+97676092525">+976 76092525</a>
                        </address>
                        </section>
                        <section>
                        <span>&copy;</span>
                        <p>Created By Mega 2022</p>
                        </section>
                </section>
                `
        }
}
customElements.define("gs25-footer", footer);