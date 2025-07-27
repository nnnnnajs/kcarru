document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    const accordionContents = document.querySelectorAll('.accordion-content');

    accordions.forEach((itemAcc) => {
        itemAcc.addEventListener('click', (event) => {
            event.preventDefault();
            const context = itemAcc.nextElementSibling;

            if (context.style.maxHeight) {
                context.style.maxHeight = null;
                itemAcc.classList.remove('is-open');
            } else {
                context.style.maxHeight = context.scrollHeight + 'px';
                itemAcc.classList.add('is-open');
            };
        });
    });
});

// Замените данную часть при необходимости динамической подгрузки моделей/серий
document.getElementById("manufacturer").addEventListener("change", function () {
    const modelSelect = document.getElementById("model");
    modelSelect.innerHTML = '<option value="">Выберите...</option>';
    if (this.value === "Hyundai") {
        modelSelect.innerHTML += '<option value="Sonata">Sonata</option><option value="Elantra">Elantra</option>';
    } else if (this.value === "Kia") {
        modelSelect.innerHTML += '<option value="K5">K5</option><option value="Sportage">Sportage</option>';
    }
});

document.getElementById("model").addEventListener("change", function () {
    const seriesSelect = document.getElementById("series");
    seriesSelect.innerHTML = '<option value="">Выберите...</option>';
    if (this.value === "Sonata") {
        seriesSelect.innerHTML += '<option value="DN8">DN8</option>';
    } else if (this.value === "K5") {
        seriesSelect.innerHTML += '<option value="JF">JF</option>';
    } else if (this.value === "Elantra") {
        seriesSelect.innerHTML += '<option value="JF">жопа</option>';
    }
});

const yearSelects = [document.getElementById("yearFrom"), document.getElementById("yearTo")];
const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1990; y--) {
    yearSelects.forEach(sel => {
        const option = document.createElement("option");
        option.value = y;
        option.textContent = y;
        sel.appendChild(option);
    });
}