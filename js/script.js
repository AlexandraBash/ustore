let goods = [
    {
        'name': "Абрикосовые косточки",
        'cost': 55,
        'img': './assets/abrikos.jpg',
        'sklad': 'Нет в наличии',
        'type': 'Экзотика',
        'btn': 'В корзину',
        'tag': 1,
        'inCart': 0
    },
    {
        'name': "Арахис",
        'cost': 30,
        'img': './assets/arahis.jpg',
        'sklad': 'В наличии',
        'type': 'Классический вкус',
        'btn': 'В корзину',
        'tag': 2,
        'inCart': 0
    }, {
        'name': "Бразильский орех",
        'cost': 60,
        'img': './assets/braz.jpg',
        'sklad': 'В наличии',
        'type': 'Экзотика',
        'btn': 'В корзину',
        'tag': 3,
        'inCart': 0
    }, {
        'name': "Фисташки",
        'cost': 70,
        'img': './assets/fist.jpg',
        'sklad': 'Нет в наличии',
        'type': 'Классический вкус',
        'btn': 'В корзину',
        'tag': 4,
        'inCart': 0
    }, {
        'name': "Грецкий орех",
        'cost': 30,
        'img': './assets/grez.jpg',
        'sklad': 'В наличии',
        'type': 'Классический вкус',
        'btn': 'В корзину',
        'tag': 5,
        'inCart': 0
    }, {
        'name': "Каштан сьедобный",
        'cost': 40,
        'img': './assets/kashtan.jpg',
        'sklad': 'В наличии',
        'type': 'Экзотика',
        'btn': 'В корзину',
        'tag': 6,
        'inCart': 0
    }, {
        'name': "Кедровый орех",
        'cost': 70,
        'img': './assets/kedr.jpg',
        'sklad': 'Нет в наличии',
        'type': 'Экзотика',
        'btn': 'В корзину',
        'tag': 7,
        'inCart': 0
    }, {
        'name': "Кешью",
        'cost': 55,
        'img': './assets/kesh.jpg',
        'sklad': 'В наличии',
        'type': 'Классический вкус',
        'btn': 'В корзину',
        'tag': 8,
        'inCart': 0
    }, {
        'name': "Лесной орех",
        'cost': 40,
        'img': './assets/les.jpg',
        'sklad': 'В наличии',
        'type': 'Классический вкус',
        'btn': 'В корзину',
        'tag': 9,
        'inCart': 0
    }, {
        'name': "Орех макадамия",
        'cost': 60,
        'img': './assets/makad.jpeg',
        'sklad': 'В наличии',
        'type': 'Экзотика',
        'btn': 'В корзину',
        'tag': 10,
        'inCart': 0
    }, {
        'name': "Миндаль",
        'cost': 50,
        'img': './assets/mind.jpg',
        'sklad': 'Нет в наличии',
        'type': 'Классический вкус',
        'btn': 'В корзину',
        'tag': 11,
        'inCart': 0
    }, {
        'name': "Мускатный орех",
        'cost': 55,
        'img': './assets/musc.jpg',
        'sklad': 'В наличии',
        'type': 'Классический вкус',
        'btn': 'В корзину',
        'tag': 12,
        'inCart': 0
    }, {
        'name': "Орех пекан",
        'cost': 74,
        'img': './assets/pekan.jpg',
        'sklad': 'В наличии',
        'type': 'Экзотика',
        'btn': 'В корзину',
        'tag': 13,
        'inCart': 0
    }, {
        'name': "Асорти",
        'cost': 40,
        'img': './assets/asorti.jpeg',
        'sklad': 'В наличии',
        'type': 'Коллекция вкусов',
        'btn': 'В корзину',
        'tag': 14,
        'inCart': 0
    },];

let goodsNew = JSON.parse(JSON.stringify(goods));
////////////пагинация//////////////
let page = document.querySelector('#page');
let pagination = document.querySelector('#pagination');
let currentPage = 1;
let notesonPage = 6;

let items = [];

function getPaginate() {
    countOfItems = Math.ceil(goodsNew.length / notesonPage);
    let render = '<button class="prev-button-pag" id="prev" style="display: none;">&lt;</button>';
    for (let i = 1; i <= countOfItems; i++) {
        render += '<li id="p-' + i + '"' + (i === +currentPage ? 'class="active page-num"' : 'class="page-num"') + '>' + i + '</li>'
    }
    render += '<button class="next-button-pag" id="next">&gt;</button>'
    pagination.innerHTML = render
    document.querySelector('.next-button-pag').addEventListener('click', nextPage)
    document.querySelector('.prev-button-pag').addEventListener('click', prevPage)
    items = document.querySelectorAll('.page-num')
    for (let item of items) {
        item.addEventListener('click', function () {
            showPage(this);
        });
    }
    if (countOfItems == 1) {
        document.querySelector('.page-num').style.display = "none"
    }
}
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(items[currentPage - 1])
    }
}
function nextPage() {
    if (currentPage < countOfItems) {
        currentPage++;
        showPage(items[currentPage - 1])
    }
}
getPaginate()

let active;
showPage(items[0]);
for (let item of items) {
    item.addEventListener('click', function () {
        showPage(this);
    });
}
function showPage(item, goodsArr = goodsNew) {
    let active = document.querySelector('#pagination li.active');
    let pageNum;
    if (item) {
        if (active) { };
        pageNum = item.innerHTML;
        // active.classList.remove('active');
    }else pageNum = 1;
    currentPage = pageNum;
    getPaginate()
    if(currentPage == 1){
        document.querySelector('#prev').style.display = "none"
    }else {
        document.querySelector('#prev').style.display = "block"
    }
    if (currentPage == countOfItems) {
        document.querySelector('#next').style.display = "none"
    } else {
        document.querySelector('#next').style.display = "block"
    }
    //item.classList.add('active');
    let pagenum = +item.innerHTML;
    let start = (pagenum - 1) * notesonPage;
    let end = start + notesonPage;
    page.innerHTML = '';
    let notes = goodsArr.slice(start, end);
    for (let note of notes) {
        let div = document.createElement('div');
        div.setAttribute('id', 'cart');
        page.appendChild(div);
        let imgItems = document.createElement('img');
        imgItems.setAttribute('src', `${note.img}`);
        imgItems.setAttribute('id', 'photocart');
        div.appendChild(imgItems);
        let h2 = document.createElement('h2');
        h2.innerHTML = note.name;
        div.appendChild(h2);
        let type = document.createElement('p');
        type.innerHTML = note.type;
        div.appendChild(type);
        let h3 = document.createElement('h3');
        h3.innerHTML = note.cost + ' uah';
        div.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.innerHTML = note.sklad;
        div.appendChild(h4);
        let kupit = document.createElement('div');
        kupit.setAttribute('id', note.tag);
        kupit.classList.add('buy-btn');
        kupit.innerHTML = note.btn;
        div.appendChild(kupit);
    };
    addEventBuy();
}

//корзина
function addEventBuy() {
    let cart = document.querySelectorAll('.buy-btn');
    console.log(cart);
    for (let i = 0; i < cart.length; i++) {
        cart[i].addEventListener('click', (e) => {
            if (goods[i].sklad === "В наличии") {
                cartNumbers(goods[+e.currentTarget.id - 1]);
                totalCost(goods[+e.currentTarget.id - 1]);
                displayCart();
            } else {
                alert('Товар распродан!!!')
            }
        })
    }
}

//addEventBuy();

function onLoad() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers
    }
}
function cartNumbers(good) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(good);
}
function setItems(good) {
    let cartItems = localStorage.getItem('goodsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[good.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [good.tag]: good
            }
        }
        cartItems[good.tag].inCart += 1;
    } else {
        good.inCart = 1;
        cartItems = {
            [good.tag]: good
        }
    }
    localStorage.setItem('goodsInCart', JSON.stringify
        (cartItems));
}
function totalCost(good) {
    // console.log('the goods prise', goods.cost);
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + good.cost);
    } else {
        localStorage.setItem('totalCost', good.cost);
    }
}
// onLoad();
function displayCart() {
    let cartItems = localStorage.getItem('goodsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
        ('.products');
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
<div class="product">
<span>${item.name}</span>
</div>
<div class="price">${item.cost}</div>
<div class="quantity">
<span>${item.inCart}</span>
</div>
<div class="total">
${item.inCart * item.cost},00 </div>

`;
        });
        productContainer.innerHTML += `
 <div class="basketTotalCont">
 <h4 class="basketTotalTitle">Всего:</h4>
 <h4 class="basketTotal">${cartCost},00</h4> </div>
 `;
    } else {
        productContainer.innerHTML = `
    <div>Корзина пуста</div>
    `;
    };
}
onLoad();
displayCart();


//слайдер
let slideIndex = 1;
showSlide(slideIndex);
function nextSlide() {
    showSlide(slideIndex += 1);
}
function prevSlide() {
    showSlide(slideIndex -= 1);
}
function currSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    let slides = document.getElementsByClassName('slides-item');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}
let interval = setInterval(nextSlide, 1000);



////////фильтр///////
function sortByPrice(arr) {
    const temp = JSON.parse(JSON.stringify(arr));

    temp.sort((a, b) => a.cost > b.cost ? 1 : -1);
    goodsNew = JSON.parse(JSON.stringify(temp));
    showPage(items[0]);
}
let a = document.querySelector('.sortprice').addEventListener('click', function () {
    sortByPrice(goods);
});
function sortByEkzot(arr) {
    const temp = [];
    arr.forEach((item) => {
        if (item.type === 'Экзотика') {
            temp.push(item);
        }
    });
    goodsNew = temp;
    for (let k = 1; k <= temp.length; k++) {
        showPage(items[0]);
    }
}
let b = document.querySelector('.ekzotika').addEventListener('click', function () {
    sortByEkzot(goods);
});
function sortByClass(arr) {
    const temp = [];
    arr.forEach((item) => {
        if (item.type === 'Классический вкус') {
            temp.push(item);
        }
    });
    goodsNew = temp;
    showPage(items[0]);
}
let c = document.querySelector('.classika').addEventListener('click', function () {
    sortByClass(goods);
});
function sortByColl(arr) {
    const temp = [];
    arr.forEach((item) => {
        if (item.type === 'Коллекция вкусов') {
            temp.push(item);
        }
    });
    goodsNew = temp;
    showPage(items[0]);
}
let d = document.querySelector('.collection').addEventListener('click', function () {
    sortByColl(goods);
});

