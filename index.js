const product = {
  코카콜라: {
    stock: 1,
    image: "./images/coke.png",
  },
  닥터페퍼: {
    stock: 5,
    image: "./images/dr-pepper.png",
  },
  제로코크: {
    stock: 3,
    image: "./images/coke-zero.png",
  },
  미린다: {
    stock: 4,
    image: "./images/mirinda.png",
  },
  맥콜: {
    stock: 9,
    image: "./images/mccol.png",
  },
  "7Up": {
    stock: 1,
    image: "./images/7up-cherry.png",
  },
  레몬음료: {
    stock: 3,
    image: "./images/sierra-mist.png",
  },
  라임음료: {
    stock: 4,
    image: "./images/bubbly-lime.png",
  },
  망고음료: {
    stock: 2,
    image: "./images/bubbly-mango.png",
  },
  탄산수: {
    stock: 1,
    image: "./images/bubbly.png",
  },
  루트비어: {
    stock: 1,
    image: "./images/root-beer.png",
  },
  펩시콜라: {
    stock: 3,
    image: "./images/pepsi.png",
  },
  제로펩시: {
    stock: 3,
    image: "./images/pepsi-diet.png",
  },
  환타: {
    stock: 3,
    image: "./images/fanta-pine.png",
  },
  Sprite: {
    stock: 3,
    image: "./images/sprite.png",
  },
};

const productList = [
  "코카콜라",
  "닥터페퍼",
  "제로코크",
  "미린다",
  "맥콜",
  "7Up",
  "레몬음료",
  "라임음료",
  "망고음료",
  "탄산수",
  "루트비어",
  "펩시콜라",
  "제로펩시",
  "환타",
  "Sprite",
];

let purchasedProducts = [];

const $$digitButtons = document.querySelectorAll(".digit-button");
const $$productLabels = document.querySelectorAll(".product-label");
const $preview = document.querySelector(".preview");
const $purchaseButton = document.querySelector(".purchase-button");
const $output = document.querySelector(".output");

function inputDigit(digit) {
  if ($preview.innerText.length >= 2) {
    return;
  }

  $preview.innerText += digit;
}

$$digitButtons.forEach(($digitButton) => {
  $digitButton.addEventListener("click", function (event) {
    const digit = event.target.innerText;
    inputDigit(digit);
  });
});

function renderVendingMachine() {
  Object.keys(product).forEach((productName) => {
    $$productLabels.forEach(($productLabel) => {
      if (
        $productLabel.innerText === productName &&
        product[productName].stock === 0
      ) {
        $productLabel.style.background = "black";
        $productLabel.style.color = "red";
        $productLabel.innerText = "Sold";
      }
    });
  });
}

function purchase(productName) {
  if (!product[productName]) {
    alert("존재하지 않는 상품입니다!");
    $preview.innerText = "";
    return;
  }

  if (product[productName].stock === 0) {
    return;
  }

  product[productName].stock -= 1;
  purchasedProducts.push(productName);
  $preview.innerText = "";
  renderVendingMachine();
}

$purchaseButton.addEventListener("click", function () {
  const productIndex = Number($preview.innerText) - 1;
  purchase(productList[productIndex]);
});

function takeOutProducts() {
  let productListTemplate = ``;

  purchasedProducts.forEach(
    (purchasedProduct) =>
      (productListTemplate += `
    <div class="purchased-product">
      <img
      class="purchased-product-image"
        src="${product[purchasedProduct].image}"
        alt="product"
      />
      <h3 class="purchased-product-label">${purchasedProduct}</h3>
    </div>
  `)
  );

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="take-out-product-list">
      ${productListTemplate}
    </div>
  `
  );

  purchasedProducts = [];
}

$output.addEventListener("click", function () {
  takeOutProducts();
});

renderVendingMachine();
