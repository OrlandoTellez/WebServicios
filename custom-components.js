
class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.shadowRoot.innerHTML = await this.getTemplate();
  }

  async getTemplate() {
    //const htmlFile = await fetch('./components/custom-navbar.html');
    //const template = await htmlFile.text();
    //return template;
    try {
    const htmlFile = await fetch('../components/custom-navbar.html');
      
      if (!htmlFile.ok) {
        throw new Error(`Error al cargar ${htmlFile.url}: ${htmlFile.statusText}`);
      }
      const template = await htmlFile.text();
      return template;
    } catch (error) {
      console.error(error);
     
    }
  }
}


class StreamingCard extends HTMLElement {
  static get observedAttributes() {
    return ['imgSrc', 'text', 'link'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const shadow = this.shadowRoot;
    shadow.innerHTML = await this.getTemplate();
    /** @type {HTMLImageElement} */
    this.img = shadow.getElementById('card-image');
    /** @type {HTMLElement} */
    this.text = shadow.getElementById('card-text');
    /** @type {HTMLAnchorElement} */
    this.link = shadow.getElementById('card-link');

    this.img.src = this.getAttribute('imgSrc');
    this.text.innerText = this.getAttribute('text');
    this.link.href = this.getAttribute('link');

  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'imgSrc':
        if (this.img) this.img.src = newValue;
        break;
      case 'text':
        if (this.text) this.text.innerText = newValue;
        break;
      case 'link':
        if (this.link) this.link.href = newValue;
        break;
      default:
        break;
    }
  }

  async getTemplate() {
    const htmlFile = await fetch('./components/streaming-card.html');
    const template = await htmlFile.text();
    return template;
  }
}



class StreamingcardCombo extends HTMLElement  {
  static get observedAttributes() {
    return['imgSrc', 'text', 'link']
  }

constructor() {
  super();
  this.attachShadow({ mode: 'open' });
}

async connectedCallback() {
  const shadow = this.shadowRoot;
  shadow.innerHTML = await this.getTemplate();
  /** @type {HTMLImageElement}*/
  this.img = shadow.getElementById('cardcombo-image');
  /** @type {HTMLElement} */
  this.text = shadow.getElementById('cardcombo-text');
  /** @type {HTMLAnchorElement} */
  this.link = shadow.getElementById('cardcombo-link');

  this.img.src = this.getAttribute('imgSrc');
    this.text.innerText = this.getAttribute('text');
    this.link.href = this.getAttribute('link');
}
  
attributeChangedCallback(name, oldValue, newValue) {
  switch (name) {
    case 'imgSrc':
      if (this.img) this.img.src = newValue;
      break
      case 'text':
        if (this.text) this.text.innerText = newValue;
        break
        case 'link':
          if (this.link) this.link.href = newValue;
          break;
          default:
          break;
  }
}
async getTemplate() {
  const htmlFile = await fetch('../components/streaming-cardcombo.html');
  const template = await htmlFile.text();
  return template;
}
}

class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.shadowRoot.innerHTML = await this.getTemplate();
  }

  async getTemplate() {
    try {
    const htmlFile = await fetch('../components/footer.html');
      
      if (!htmlFile.ok) {
        throw new Error(`Error al cargar ${htmlFile.url}: ${htmlFile.statusText}`);
      }
      const template = await htmlFile.text();
      return template;
    } catch (error) {
      console.error(error);
     
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
customElements.define('streaming-card', StreamingCard);
customElements.define('streaming-cardcombo', StreamingcardCombo);
customElements.define("footer-pagina", Footer)

