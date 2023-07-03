export const onClickCities = (data, evt) => {
    data.wrap.innerHTML = '';
    data.input.value = evt.currentTarget.textContent;
    data.input.setAttribute('value', evt.currentTarget.textContent);
};