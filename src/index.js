const prods = [
  {
    id: 1,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "iPhone 14 Max",
    price: 120000,
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/500/500/fe8ea87e1cc00f90cfee61e30ab43923/a87566e1a761e1c090ea9f430097c6b7513f7dfffb8344890c6ee14ea956bd0f.jpg.webp",
  },
  {
    id: 2,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "Macbook Pro 16",
    price: 140000,
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647459339-macbook-pro-1647459332.jpg?crop=1xw:1xh;center,top&resize=480:*",
  },
  {
    id: 3,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "MacBook Air",
    price: 80000,
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/500/500/318259187cb6d5356730f526caa8ae93/f90f6266dac6bf12212723b31fa2a073677c5ca54cefbc551f8d896ae1a67af5.jpg.webp",
  },
  {
    id: 4,
    category: "Бытовая техника",
    categoryId: 2,
    title: "Стиральная машина Dexp",
    price: 36000,
    image:
      "https://c.dns-shop.ru/thumb/st4/fit/500/500/1339fedb6ac5c9d743a081cd8f0dd6b5/694ad01323083fe783ad3f22cefea291b26eaf45a2146051127157208d275696.jpg.webp",
  },
  {
    id: 5,
    category: "Прочее",
    categoryId: 3,
    title: "Моноколесо Ninebot One-Z10",
    price: 140000,
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/500/500/388414237b6dfeca5258482c9421d443/0ac89525a5eee6f214b5db96b39d8be9dc01dd818a72f0d8ceb066fc9e467c53.jpg.webp",
  },
  {
    id: 6,
    category: "Прочее",
    categoryId: 3,
    title: "Квадрокоптер DJI Mavic Mini",
    price: 100000,
    image:
      "https://c.dns-shop.ru/thumb/st4/fit/500/500/a4ec440255a343eed9a8063cfdb86754/99a103dae90736d965224ae0d9de812fdb06270a97d4159c66c252cf51941021.jpg.webp",
  },
  {
    id: 7,
    category: "Бытовая техника",
    categoryId: 2,
    title: "Кофемашина Polaris",
    price: 30000,
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/500/500/035ad66e1bf19c002de90b2d9a59a6db/e4d802326bba7e5a1b47f288c8a703f39c78bf1a80a9c94724a9a43d03a796ba.jpg.webp",
  },
  {
    id: 8,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "Смарт-часы Apple Watch SE",
    price: 28000,
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/500/500/482d8ee2696fc7f3aea89b3938c63b9d/12c1189c921ae40e34e194de284730ff7062c992fbdc12d1b35465a5973c01e2.jpg.webp",
  },
  {
    id: 9,
    category: "Бытовая техника",
    categoryId: 2,
    title: "Холодильник Side by Side Aceline",
    price: 35000,
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/500/500/99d17d612b18f4baa42b9602a67fc100/1ff1aa22df6b685eb75f5b1d0634364da314dbfcfa37925acaaa8197fa9c1ba6.jpg.webp",
  },
  {
    id: 10,
    category: "Прочее",
    categoryId: 3,
    title: "Электросамокат Ninebot",
    price: 55000,
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/500/500/5b44052c5fd39791d335a026e6059815/85210ab228944859cf777f5673c96323e95ce0982d1f53149b5ad46220723aca.jpg.webp",
  },
  {
    id: 11,
    category: "Гаджеты и аксессуары",
    categoryId: 1,
    title: "Apple iPhone 12",
    price: 66000,
    image:
      "https://c.dns-shop.ru/thumb/st4/fit/500/500/f8fa3939b16d446b4dc0347a5dcb4d85/15592be6e1d2e99f0d576feb215b6f06f2a99fa3812a099602922d3611f206b5.jpg.webp",
  },
  {
    id: 12,
    category: "Бытовая техника",
    categoryId: 2,
    title: "Робот-пылесос iBoto Smart",
    price: 20500,
    image:
      "https://c.dns-shop.ru/thumb/st1/fit/500/500/c91b78511a5aa9404a5bfc0794c16023/9d5f73f371b4cd74aa0bb22b088a8b7d3253216d9e1b7a5a74af4427ff110216.jpg.webp",
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

const modal = document.querySelector(".modal_wrapper");
window.onclick = (e) =>
  e.target == modal ? (modal.style.display = "none") : null;

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

const list = document.querySelector(".filters");
const items = document.querySelectorAll(".product");
const lists = document.querySelectorAll(".filter");

const all = document.createElement("div");
all.textContent = "Все";
all.dataset.id = "all";
all.style.cursor = "pointer";
all.style.fontWeight = "500";
all.onmouseover = () => {
  all.style.textDecoration = "underline";
};
all.onmouseout = () => {
  all.style.textDecoration = "none";
};
all.onclick = () => {
  all.style.fontWeight = "500";
};
list.prepend(all);

function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    window.scroll(0, 0);

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

const arrow = document.querySelector(".arrow");
arrow.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollBy({
    top: -1000,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (pageYOffset >= 100) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

const handleTheme = (check) => {
  if (check) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark");
  }
};

const header = document.querySelector(".header");
const check = document.createElement("input");
check.type = "checkbox";
check.className = "apple-switch";
header.append(check);

check.onchange = () => {
  handleTheme(check.checked);
};
