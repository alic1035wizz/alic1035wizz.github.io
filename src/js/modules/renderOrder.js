import { calculateDistance } from "./distance.js"
import { calculateTime } from "./timeDeliver.js";

const ORDERS = [];
const MAX = 3;
const list = document.querySelector('.orders__list');
const road = document.querySelector('.road__list');
let roadNum = 0;
let orderNum = 0;

const createOrder = (data, form) => {
    const DISTANCE = calculateDistance(data.lat, data.lon);
    const TIME = calculateTime(DISTANCE);

    let order =  `<li class="orders__item">
                        <h2 class="title">Заказ №${roadNum + 1}</h2>
                        <div class="orders__data orders__data-addr">
                            <h3 class="orders__preview">Адрес доставки</h3>
                            <p class="orders__descr">${form.address.value}</p>
                        </div>
                        <div class="orders__data orders__data-cord">
                            <h3 class="orders__preview">Координаты</h3>
                            <p class="orders__descr orders__descr--cord"><span>${data.lat}</span><span>${data.lon}</span></p>
                        </div>
                        <div class="orders__data orders__data-long">
                            <h3 class="orders__preview">Расстояние</h3>
                            <p class="orders__descr">${DISTANCE}км</p>
                        </div>
                    </li>`;

    let roadItem = `<li class="road__item">
                        <span class="road__number">${orderNum + 1}</span>
                        <h3 class="title road__title">Заказ №${orderNum + 1}</h3>
                        <p class="road__text road__text-to">
                            <span class="road__subtitle">Адрес доставки</span>
                            <span class="road__descr">${form.address.value}</span>
                        </p>
                        <p class="road__text road__text-time">
                            <span class="road__subtitle">Время доставки</span>
                            <span class="road__descr">${TIME}</span>
                        </p>
                        <p class="road__text road__text-weight">
                            <span class="road__subtitle">Вес посылки</span>
                            <span class="road__descr">${form.weight.value}</span>
                        </p>
                        <p class="road__text road__text-volume">
                            <span class="road__subtitle">Затртаты аккумулятора</span>
                            <span class="road__descr">6.6%</span>
                    </p>
                </li>`;

    ORDERS.push({order, roadItem});
    renderOrder();
}

const renderOrder = () => {
    if (roadNum < MAX) {
        list.innerHTML += ORDERS[orderNum].order;
        road.innerHTML += ORDERS[roadNum].roadItem;
        roadNum++;
        orderNum++;
    }
};

const onClickShow = () => {
    const orderBtn = document.querySelector('.orders__more');
    const roadBtn = document.querySelector('.road__show');


    const showMore = (elem) => {
        if (elem === 'order') {
            for (let i = 0; i < Math.min(MAX, ORDERS.length - orderNum); i++) {
                list.innerHTML += ORDERS[orderNum].order;
                orderNum++;
            }
        }

        if (elem === 'road') {
            for (let i = 0; i < Math.min(MAX, ORDERS.length - roadNum); i++) {
                road.innerHTML += ORDERS[roadNum].roadItem;
                roadNum++;
            }
        }
    }

    orderBtn.addEventListener('click', showMore.bind(null, 'order'));
    roadBtn.addEventListener('click', showMore.bind(null, 'road'));
};

onClickShow();


export { createOrder }