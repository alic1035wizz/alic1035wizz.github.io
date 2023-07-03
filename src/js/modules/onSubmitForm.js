import { createOrder } from "./renderOrder.js";
import { layerChange } from "./layerChange.js";

export const onSubmitForm = (data) => {
    const form = document.querySelector('.form-order');

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        
        if (!data.item) {
            data.input.value = 'Пожалуйста, введите город из списка.';
            data.input.style.color = 'red';

            setTimeout(() => {
                data.input.removeAttribute('style');
            },3000);
            
        } else {
            createOrder(data.item, form);
            layerChange();
            data.item = null;
            data.input.value = '';
            form.weight.value = '';
        }
    })
};