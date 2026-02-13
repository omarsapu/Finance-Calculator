document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const resultSumElements = document.querySelectorAll('.result-sum');

  

    // Функция расчёта и обновления значений
    function calculateBudget() {
        // Получаем значение из input и преобразуем в число
        const salary = parseFloat(input.value) || 0;

        // Определяем проценты для каждой категории (в порядке следования в HTML)
        const percentages = [
            25, 5, 10, 5, 3, 4, 5, 2,  // Обязательные расходы
            7, 7, 7,                        // Желания и мечты
            10, 5, 5                       // Инвестиции
        ];

        // Обновляем значения для каждого блока
        percentages.forEach((percent, index) => {
            if (resultSumElements[index]) {
                const amount = (salary * percent) / 100;
                resultSumElements[index].textContent = `${amount.toFixed(0)}₽`;
            }
        });

        // Обновляем итоговую сумму (последний элемент)
        if (resultSumElements[resultSumElements.length - 1]) {
            resultSumElements[resultSumElements.length - 1].textContent = `${salary.toFixed(0)}₽`;
        }
    }

    // Обработчики событий
    input.addEventListener('input', calculateBudget);
    input.addEventListener('change', calculateBudget);

    // Инициализация — расчёт при загрузке страницы (если в input уже есть значение)
    calculateBudget();
});
  