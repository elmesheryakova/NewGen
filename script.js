let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


const createElements = (courses) => {
  courses.forEach(el=>{
    let card = document.createElement('div')
    card.innerHTML = `
      <p>${el.name}</p>
      <p> от ${el.prices[0]===null ? 0 : el.prices[0]} ${el.prices[1]===null ? '' : 'до'} ${el.prices[1]===null ? '' : el.prices[1]} </p>
      <hr>
    `
    document.body.append(card)
  })
}


const compare = (a, b) => {
  return (a.prices[0]-a.prices[1])-(b.prices[0]-b.prices[1])
}

const filterPrices = (arr, range) => arr.filter(el => 
  (range[1] && el.prices[0] <= range[1] || range[0] <= el.prices[0]) ||
  (range[1] && range[0] >= el.prices[1] || range[0] <= el.prices[1])
)
 
createElements(filterPrices(courses.sort(compare), requiredRange3))
console.log(filterPrices(courses.sort(compare), requiredRange3));