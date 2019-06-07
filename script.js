const employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter( name => name.length > 0);
    employersNames = employersNames.map( name => name.toLowerCase().trim());


const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
//первый вариант
/*  const calcCash = (own = 0, [...cash]) => { 
    let total = own;
    cash.forEach((item)=> {
    total+=item;
    });
    return total;
} */
 //второй вариант
/* const calcCash = (total = 0, [...cash]) => { 
cash.forEach((item)=> {total+=item});
return total;
} */

//третий вариант  по аналогии отсюда  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
const calcCash = () => {
    const {cash} = sponsors;
    let cashItem = cash.reduce((previous, current) => {
        return previous + current;
    })
    return cashItem;
};

// let money = calcCash(null, sponsors.cash); //первый вариант
// let money = calcCash(0, sponsors.cash); //второй вариант
let money = calcCash(); //третий вариант

const makeBusiness = (owner, director = 'Victor', cash, emp) => {
    const {eu, rus} = sponsors;
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness('Sam', undefined , money, employersNames);
