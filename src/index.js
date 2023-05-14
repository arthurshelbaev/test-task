const prods = [
  {
    id: 1,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "MacBook",
    price: 100000,
    image: "http://intocode.ru/d/react-project-1/images/1.jpg",
  },
  {
    id: 2,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "Galaxy",
    price: 35999,
    image: "http://intocode.ru/d/react-project-1/images/2.jpg",
  },
  {
    id: 3,
    category: "Бытовая техника",
    categoryId: 2,
    title: "Монитор Samsung",
    price: 12000,
    image: "http://intocode.ru/d/react-project-1/images/4.jpg",
  },
  {
    id: 4,
    category: "Прочее",
    categoryId: 3,
    title: "Скутер",
    price: 65500,
    image: "http://intocode.ru/d/react-project-1/images/3.jpg",
  },
  {
    id: 5,
    category: "Прочее",
    categoryId: 3,
    title: "Респераторная маска",
    price: 500,
    image: "http://intocode.ru/d/react-project-1/images/5.jpg",
  },
  {
    id: 6,
    category: "Бытовая техника",
    categoryId: 2,
    title: "Стиральная машина",
    price: 100000,
    image: "http://intocode.ru/d/react-project-1/images/6.jpg",
  },
  {
    id: 7,
    category: "Бытовая техника",
    categoryId: 2,
    title: "Белый холодильник",
    price: 43100,
    image: "http://intocode.ru/d/react-project-1/images/7.jpg",
  },
  {
    id: 8,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "Колонка",
    price: 3000,
    image: "http://intocode.ru/d/react-project-1/images/8.jpg",
  },
  {
    id: 9,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "Наушники",
    price: 1500,
    image: "http://intocode.ru/d/react-project-1/images/9.jpg",
    date: new Date(),
  },
];

//   const res = await fetch(
//     "https://dummyjson.com/products?limit=15&select=title,price,category,images"
//   );
//   const data = await res.json();
//   const fetchProducts = data.products;

let categories = [];

const main = document.querySelector("main");
const products = document.querySelector(".products");

const modal = document.querySelector(".modal");

const close = document.querySelector(".close");
close.onclick = () => {
  modal.style.display = "none";
};

const buy = document.querySelector(".modal_buy");
const inputCounter = document.querySelector(".input_counter");
inputCounter.value = 0;

buy.onclick = () => {
  alert("Заказ успешно не выполнен!");
  modal.style.display = "none";
};

prods.map((elem) => {
  if (!categories.includes(elem.category)) {
    categories.push(elem.category);
    const filters = document.querySelector(".filters");
    const filter = document.createElement("div");
    filter.dataset.id =
      elem.categoryId === 1
        ? "devices"
        : elem.categoryId === 2
        ? "tech"
        : "other";
    filter.className = `filter`;
    filter.style.cursor = "pointer";
    filter.textContent = elem.category;
    filters.append(filter);
  }
});

prods.map((elem) => {
  const product = document.createElement("div");
  product.className = "product";
  product.dataset.id =
    elem.categoryId === 1
      ? "devices"
      : elem.categoryId === 2
      ? "tech"
      : "other";
  const imageCase = document.createElement("div");
  imageCase.className = "image_case";
  const image = document.createElement("img");
  image.className = "image";
  image.src = elem.image;
  imageCase.append(image);
  product.append(imageCase);

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = elem.title;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = elem.price + "₽";

  const info = document.createElement("div");
  info.className = "info";
  info.append(title);
  info.append(price);

  const button = document.createElement("button");
  button.className = "button";
  const basket = document.createElement("img");
  basket.className = "basket";
  basket.src = "./basket.png";
  button.append(basket);
  button.onclick = () => {
    modal.style.display = "block";
  };

  const downBlock = document.createElement("div");
  downBlock.className = "down_block";
  downBlock.append(info);
  downBlock.append(button);
  product.append(downBlock);

  products.append(product);
});

document.body.append(main);
main.append(products);

const list = document.querySelector(".filters")
const items = document.querySelectorAll(".product");
const lists = document.querySelectorAll(".filter");

const all = document.createElement("div");
all.textContent = "Все";
all.dataset.id = "all";
all.style.cursor = "pointer";
all.style.fontWeight = "500"
all.onclick = () => {all.style.fontWeight = "500" }
list.prepend(all);

function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;

    switch (targetId) {
      case "all":
        items.forEach((item) => {
          item.style.display = "flex";
        });
        select("all");
        break;
      case "devices":
        filtered("devices");
        select("devices");
        break;
      case "tech":
        filtered("tech");
        select("tech");
        break;
      case "other":
        filtered("other");
        select("other");
        break;

      default:
        break;
    }
  });
}
function filtered(className) {
  items.forEach((item) => {
    if (item.dataset.id === className) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
function select(className) {
  lists.forEach((item) => {
    if (item.dataset.id === className) {
      item.style.fontWeight = "500";
      all.style.fontWeight = "300";
    } else {
      item.style.fontWeight = "300";
    }
  });
}
filter();

const arrow = document.querySelector(".arrow")
arrow.onclick = () => {
  window.scroll(0, 0)
}

window.addEventListener("scroll", function () {
  if (pageYOffset >= 50) {
    arrow.style.display = "block"
  } else {
    arrow.style.display = "none";
  }
});

const handleTheme = (check) => {
  if (check) {
    document.body.setAttribute("dark", '')
  } else {
    document.body.removeAttribute("dark");
  }
};

const header = document.querySelector(".header")
const check = document.createElement("input")
check.type = "checkbox"
check.className = "apple-switch"
header.append(check)


check.onchange = () => {
  handleTheme(check.checked)
}
