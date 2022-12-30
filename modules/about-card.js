class AboutCardItem {
  constructor(src, alt, name, paragraph) {
    this.src = src;
    this.alt = alt;
    this.name = name;
    this.paragraph = paragraph;
  }
  render() {
    return `          <article class="about_item">
                        <div class="about_img">
                        <img src="${this.src}" alt="about1" />
                        </div>
                        <div class="about_item_title">
                        <h5>${this.name}</h5>
                        <p>
                            ${this.paragraph}
                        </p>
                        </div>
                    </article>`;
  }
}

export default class AboutCard {
  constructor(aboutUrl) {
    this.aboutUrl = aboutUrl;
  }

  Download(targetElement) {
    fetch(`${this.aboutUrl}`)
      .then((result) => {
        result.json().then((jsob) => {
          document.getElementsByClassName(targetElement)[0].insertAdjacentHTML(
            "beforeend",
            jsob
              .map((aboutCard) => {
                const _aboutCard = new AboutCardItem(
                  aboutCard.src,
                  aboutCard.alt,
                  aboutCard.name,
                  aboutCard.paragraph
                );
                return _aboutCard.render();
              })
              .reduce((prevVal, curVal) => prevVal + curVal, "")
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
const aboutCard = new AboutCard("./json/about.json");
aboutCard.Download("aboutAllItem");
