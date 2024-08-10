class UberPriceCalc {
  constructor(bF, cpKM, cpM) {
    this.bF = bF;
    this.cpKM = cpKM;
    this.cpM = cpM;
  }

  calcPrice(distance, time) {
    let cost = this.cpKM * distance;
    let otCost = this.cpM * time;
    let totalCost = this.bF + cost + otCost;
    return totalCost;
  }
}

const bF = 100;
let cpKM = 18;
let cpM = 15;

let calc = new UberPriceCalc(bF, cpKM, cpM);

let distance = 15;
let time = 30;
let price = calc.calcPrice(distance, time);
console.log(`
The output for Uberprice ccalculator
  
The price for the ride of ${distance}Kms which took ${time}mins is: Rs.${price.toFixed(
  2
)}/-
  `);

//bF - BaseFare
//cpKM - Cost Per Kilometer
//cpM - Cost Per Miniutes
//otCost - Overtime Cost
