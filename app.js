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

const arr2 = [98, 78, 14, 71, 65];
console.log(arr2);
const num1 = arr2[0];
const num2 = arr2[1];
const num3 = arr2[2];
const num4 = arr2[3];
const num5 = arr2[4];
const arrLength = arr2.length;
console.log("საშუალო რიცხვია " +(num1 + num2 + num3 + num4 + num5)/ arrLength);

//დავალება-4:

const mobShop = {
    phoneName: "Samsung S23",
    phoneDescription: "New Stolen",
    phonePrice: 1899,
    shopAddresses: "K. Gamsakhurdia (Beijing) Avenue N14a,Tbilisi,Georgia",
    phoneMemoryInGB: 128,
}

//დავალება-5:

//v1
console.log(" Phone name is " + mobShop.phoneName + ", phone price is " + mobShop.phonePrice + " and you can buy it at " + mobShop.shopAddresses)

//v2
console.log(" Phone name is " + mobShop[0]);
console.log("phone price is " + mobShop[0]); 
console.log(" and you can buy it at " + mobShop[0]);