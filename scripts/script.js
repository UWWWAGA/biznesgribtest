// Функция расчета
function calculateMushroomFarm() {

  const L = parseFloat(document.getElementById('room-length').value) || 0;
  const W = parseFloat(document.getElementById('room-width').value) || 0;
  const H = parseFloat(document.getElementById('room-height').value) || 0;
  const price = parseFloat(document.getElementById('mushroom-price').value) || 0;
  const yieldPerc = parseFloat(document.getElementById('yield-percent').value) || 0;


  // Максимум загрузка компостом: Площадь (Д*Ш) / 10
  const maxCompost = (L * W) / 10;

  // Покровная смесь: тонн * 53 * 9.5
  const casing = maxCompost * 53 * 9.5;

  // Площадь полок выращивания: тонн * 53 * 0.57 * 0.38
  const shelfArea = maxCompost * 53 * 0.57 * 0.38;

  // Длина стеллажа: Длина помещения * 0.85 (технологический отступ)
  const rackLength = L * 0.85;

  // Количество ярусов: (Высота - 0.2) / 0.6
  const layers = Math.floor((H - 0.2) / 0.6);

  // Стоимость стеллажей: 648.61 * площадь полок
  const rackCost = 648.61 * shelfArea;

  // Сбор за 3 волны: (Урожайность / 100) * тонн * 1000
  const totalWeight = (yieldPerc / 100) * maxCompost * 1000;

  // Выручка за цикл
  const cycleRev = totalWeight * price;

  // Выручка за год (7 циклов)
  const yearRev = cycleRev * 7;

  // 3. Вывод результатов на страницу
  document.getElementById('res-compost').innerText = maxCompost.toFixed(0);
  document.getElementById('res-area').innerText = shelfArea.toFixed(1);
  document.getElementById('res-casing').innerText = Math.round(casing).toLocaleString() + ' л.';
  document.getElementById('res-racks').innerText = rackLength.toFixed(1) + ' м. / ' + layers + ' шт.';
  document.getElementById('res-rack-cost').innerText = Math.round(rackCost).toLocaleString() + ' ₽';
  document.getElementById('res-total-weight').innerText = Math.round(totalWeight).toLocaleString() + ' кг';
  document.getElementById('res-cycle-rev').innerText = Math.round(cycleRev).toLocaleString();
  document.getElementById('res-year-rev').innerText = Math.round(yearRev).toLocaleString() + ' ₽';
}

document.querySelectorAll('.calc-section input').forEach(input => {
  input.addEventListener('input', calculateMushroomFarm);
});

document.addEventListener('DOMContentLoaded', calculateMushroomFarm);

// ==================

document.querySelectorAll('.faq-question').forEach(header => {
    header.addEventListener('click', () => {
        const currentItem = header.parentElement;
        const isActive = currentItem.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        currentItem.classList.toggle('active');
    });
});

