  /* ENQUUEE SCSS FOR COMPILING WHEN RUN */
  import "../styles/product-sas-main.scss"; 

  /* START - SCRIPT FOR GET ATTRIBUTE FORM custom-product-card */
  class ProductCard extends HTMLElement {
    connectedCallback() {
      const title = this.getAttribute("title");
      const price = this.getAttribute("price");
      const image = this.getAttribute("image");
      const link = this.getAttribute("link");
  
      this.innerHTML = `
        <div class="product-card">
          <img src="${image}" alt="${title}" class="product-card__image">
          <a href="${link}" class="wrapper-product-link"><h2 class="product-card__title">${title}</h2></a>
          <p class="product-card__price">${price}</p>
        </div>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('custom-product-card', ProductCard);
/* START - SCRIPT FOR GET ATTRIBUTE FORM custom-product-card */