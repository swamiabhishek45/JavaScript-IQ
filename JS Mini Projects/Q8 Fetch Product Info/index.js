(async () => {
  const producetElem = document.querySelector("#productContainer");
  const searchInput = document.querySelector("#searchInput");

  const url = "https://fakestoreapi.com/products";
  const fetchProducts = async () => {
    try {
      // const res = await fetch(url);
      // const data = await res.json();
      // return data;

      return (await fetch(url)).json();

    } catch (error) {
      throw error;
    }
  };

  const products = await fetchProducts();

  const generateProducts = (product) => {
    return `<div class="product-card">
        <div class="image-container">
          <img
            src="${product.image}"
            alt=""
          />
        </div>
        <div class="product-content">
          <h2>${product.title}</h2>
          <p>
           ${product.description.split(" ").slice(0, 40).join(" ")}
          </p>
          <button>
             ${product.price} $
          </button>
        </div>
      </div>`;
  };

  const renderProducts = (products) => {
    producetElem.innerHTML = "";
    products.forEach((product) => {
      producetElem.innerHTML += generateProducts(product);
    });
  };

  // search input 

  const filterHandler = (e) => {
    const searchText = e.target.value.toLowerCase();

    const filteredProducts = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchText) ||
        product.price.toString().toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText)
      );
    });
    renderProducts(filteredProducts);
  };

  searchInput.addEventListener("keyup", filterHandler);

  renderProducts(products);
})();
