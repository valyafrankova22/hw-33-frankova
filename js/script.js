"use strict";

(function () {
    const form = document.querySelector(`.form`);

    form.addEventListener(`submit`, function(event){
        event.preventDefault();
        validation();
        const formData = new FormData(form);
        const values = Object.fromEntries(formData.entries());

        createElement(values);
        form.reset();
    })


    function createElement(elementData) {
        const div = document.createElement(`div`);
        div.classList.add(`card`);
        div.innerHTML = JSON.stringify(elementData);

        document.querySelector(`.card-content`).append(div);
    }

    function validation () {
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(function (input) {
            if(input.value === '') {
                input.classList.add('error');
                console.log(`input not filled`);
            } else {
                input.classList.remove('error');
            }
        })
    }

}())

