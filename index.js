const btn = document.querySelector('#button');
btn.addEventListener("click", function () {

    const main = document.querySelector('main');
    const question = document.querySelector('#question').value;
    const opt1 = document.querySelector('#opt1').value;
    const opt2 = document.querySelector('#opt2').value;
    const opt3 = document.querySelector('#opt3').value;
    const opt4 = document.querySelector('#opt4').value;

    main.style.display = "flex";

    const que = document.querySelector('.Question-set');
    que.innerHTML = `
        <div class="question">
            <p>${question}</p>
        </div>
        <div class="answer">
            <div class="options">${opt1}</div>
            <div class="options">${opt2}</div>
            <div class="options">${opt3}</div>
            <div class="options">${opt4}</div>
        </div>`;
});
