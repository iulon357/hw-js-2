//დავალება-1:

const numberArrays = [2, 4, 6, 8, 10, 12];
console.log(numberArrays);
numberArrays.pop();
console.log(numberArrays);
numberArrays.unshift(12);
console.log(numberArrays);

//დავალება-2:

const products = [
  {
    productTitle: "apple",
    productPrice: 9.50,
  },

  {
    productTitle: "cherry",
    productPrice: 10.50,
  },
  {
    productTitle: "peach",
    productPrice: 12.55,
  },
];

//დავალება-3:

//v1
const arr2 = [98, 78, 14, 71, 65];
console.log(arr2);
const num1 = arr2[0];
const num2 = arr2[1];
const num3 = arr2[2];
const num4 = arr2[3];
const num5 = arr2[4];
const arrLength = arr2.length;
console.log("საშუალო რიცხვია " +(num1 + num2 + num3 + num4 + num5)/ arrLength);

//v2
const arr3 = [98, 78, 14, 71, 65];
console.log(arr3);
const sum = arr3[0]+arr3[1]+arr3[2]+arr3[3]+arr3[4];
const average = sum / arr3.length;
console.log("საშუალო რიცხვია " + average);

//დავალება-4:

const mobShop = [{
    phoneName: "Samsung S23",
    phoneDescription: "New Stolen",
    phonePrice: 1899,
    shopAddresses: "K. Gamsakhurdia (Beijing) Avenue N14a,Tbilisi,Georgia",
    phoneMemoryInGB: 128,
}
]

//დავალება-5:

//
console.log(" Phone name is " + mobShop[0].phoneName + ", phone price is " + mobShop[0].phonePrice + " and you can buy it at " + mobShop[0].shopAddresses)
