const product = {
  "버터": {
    stock: 10,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/355b9e1f-f942-408d-9bee-556442eabe2e.JPG",
  },
  "크림치즈": {
    stock: 5,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/519f4cdd-98e7-4953-93a5-da62f44156e0.JPG",
  },
  "까망베르": {
    stock: 3,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/4fb64f92-5cb4-45d5-984c-faacfc734112.JPG",
  },
  "모짜렐라": {
    stock: 4,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/77f28904-5616-4e4d-acdc-9453cbe48f78.JPG",
  },
  "토스트": {
    stock: 9,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/512549bf-032c-4132-886f-92e8a95f74bb.jpg",
  },
  "마카롱": {
    stock: 1,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/9c6f87c4-a4f3-4199-956a-240aeae2ceae.jpg",
  },
  "딸기 타르트": {
    stock: 3,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/a55976f4-2c11-4807-9600-ba36d5ed2182.jpg",
  },
  "초코 타르트": {
    stock: 4,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/76d7eb59-92cc-4222-8c32-adc06903e481.jpg",
  },
  "에끌레어": {
    stock: 2,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/22266a91-ac44-40b6-828f-6142521d8c82.jpg",
  },
  "쿠키도우": {
    stock: 1,
    image:
      "https://cdn-mart.baemin.com/sellergoods/main/155aa9d8-8873-4142-b4ce-55b3a682f246.jpg",
  },
  "오레오": {
    stock: 1,
    image:
      "https://cdn-mart.baemin.com/goods/53/00_D70-RM-65711_[%EB%93%A0%EB%93%A0]%20%EB%8F%99%EC%84%9C%20%EC%98%A4%EB%A0%88%EC%98%A4_%ED%99%94%EC%9D%B4%ED%8A%B8%20100g.jpg",
  },
  "빙수토핑": {
    stock: 3,
    image:
      "https://cdn-mart.baemin.com/goods/47/S150-RM-58596_[%EB%93%A0%EB%93%A0]-%EC%8A%A4%EB%85%B8%EC%9A%B0%EB%B9%99-%EB%B0%B0%EB%A6%AC%EB%AF%B9%EC%8A%A4%ED%86%A0%ED%95%91-260g-12%EA%B0%9C_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
  },
};

const purchasedProducts = [];

function renderVendingMachine() {
  Object.keys(product).forEach((productName) => {
    const $$products = document.querySelectorAll(".product")
      
    $$products.forEach(($product) => {
      if ($product.innerText === productName && product[productName].stock === 0) {
        console.log('hey')
        $product.style.background = "red";
      }
    });
  });
}

function purchase(productName) {
  if (product[productName].stock === 0) {
    return;
  }

  product[productName].stock -= 1;
  purchasedProducts.push(productName);
}

function takeOutProducts() {
  let productListTemplate = ``

  purchasedProducts.forEach(purchasedProduct => productListTemplate += `
    <div class="purchased-product">
      <img
      class="purchased-product-image"
        src="${product[purchasedProduct].image}"
        alt="product"
      />
      <h3 class="purchased-product-label">${purchasedProduct}</h3>
    </div>
  `)
  
  document.body.insertAdjacentHTML("beforeend", `
    <div class="take-out-product-list">
      ${productListTemplate}
    </div>
  `);
}

const $$purchaseButtons = document.querySelectorAll(".purchase-button")

$$purchaseButtons.forEach(($purchaseButton) => {
  $purchaseButton.addEventListener('click', function(event) {
    const productName = event.target.innerText;
    purchase(productName);
    console.log(product)
    renderVendingMachine();
  })
});

renderVendingMachine()

const $output = document.querySelector('.output');
$output.addEventListener('click', function() {
  takeOutProducts();
})

