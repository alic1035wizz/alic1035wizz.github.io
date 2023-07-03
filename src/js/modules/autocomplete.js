import { debounce } from "./utils.js";
import { onClickCities } from "./onClickCities.js";
import { onSubmitForm } from "./onSubmitForm.js";

const input = document.querySelector('.form-order__addr input');
const cites = document.querySelector('.cites');
const data = {
    'item': null,
    'input': input,
    'wrap': cites,
};

const changeInput = (evt) => {
    if (input.value.length < 1) return;


    fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${input.value}&format=json&apiKey=8e01b239842444148b628ba779696433`, {method: 'GET'})
        .then(response => response.json())
        .then(result => {
            const tempFragment = document.createDocumentFragment();

            result.results.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('city');
                li.textContent = item.formatted;
                tempFragment.append(li);
                
                data.item = item;

                li.addEventListener('click', onClickCities.bind(null, data));
            });

            cites.innerHTML = '';
            cites.append(tempFragment);
        })
        .catch(error => console.log('error', error));
}

let changeInputDebounce = debounce(changeInput, 300);

input.addEventListener('input', changeInputDebounce);

document.addEventListener('click', (evt) => {
    cites.innerHTML = '';
});

onSubmitForm(data);
