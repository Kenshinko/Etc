// Список курсов
const courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
const requiredRange1 = [null, 200];
const requiredRange2 = [100, 350];
const requiredRange3 = [200, null];

// Функция, выполняющая фильтрацию курсов по цене
function sortByPrice(priceRange) {
  const arr = courses.filter((el) => {
    const minOwnPrice = priceRange[0] != null ? priceRange[0] : 0;
    const maxOwnPrice = priceRange[1] != null ? priceRange[1] : Infinity;
    const minAvailablePrice = el.prices[0] != null ? el.prices[0] : 0;
    const maxAvailablePrice = el.prices[1] != null ? el.prices[1] : Infinity;

    if (minOwnPrice <= minAvailablePrice
        && maxOwnPrice >= maxAvailablePrice
        && minAvailablePrice <= maxOwnPrice
        || minAvailablePrice === maxOwnPrice) {
    return el;
    }
});
  console.log(arr);
}

// Вывод результатов в консоль
console.log("================================================================");
sortByPrice(requiredRange1);
console.log("================================================================");
sortByPrice(requiredRange2);
console.log("================================================================");
sortByPrice(requiredRange3);
console.log("================================================================");