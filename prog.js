const szamolo = require("./szamologep");

// 1. Írj példát az összes általad ismert adattípusra és kommentezd fölé a nevét! (5p)
// szám változó        szöveg változó              boolean változó      tömb                            obj

// let a = 5;       let b= "szöveg";               let c= true;        let arr= [1,2,3]                let obj = {name:"Feri", age: 15}

// 2. Mi a különbség a const és a let között? Írj rá példát! (10p)

// Ezzel deklaráljuk a változókat. Const nál nem lehet később változtatni a értéket, míg let nél később is engedi a változtatást.
// Const nál kötelező emgadni kezdeti értéket.

// 3. Mi a különbség a referencia szerinti és az érték szerinti paraméterátadás között? Mi
// adódik át referenciaként, és mi értékként? Írj példát rá! (10p)

let num = 5;
let array = [1, 2, 3];

let ujfugveny = (n, arr) => {
  n = 6;
  arr.push(9);
};

ujfugveny(num, array);
// Miután meghívtuk a függvényt utánna a tömb értékét megváltoztatja, míg a változó értékét nem.
console.log(num);
console.log(array);

// 4. Készíts egy függvényt, amely egy számokat tároló tömböt, és egy számot vár
// paraméterül, és logikai értékkel tér vissza annak függvényében, hogy a paraméterül
// kapott szám szerepel-e a kapott tömbben! (containsElement) (5p)

let containsElement = (number, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true;
    }
  }
  return false;
};
// let tomb = [1, 2, 3];
// let n = 3;
// console.log(containsElement(n, tomb));

// 5. Készíts egy függvényt, ami egy ilyen objectekkel feltöltött tömböt vár paraméterül: {
// name: ‘Feri’, age: 25 }! A függvény adja vissza a tömbben található legidősebb ember
// nevét! (10p)

let array2 = [
  { name: "Feri", age: 19 },
  { name: "Tomi", age: 26 },
  { name: "Vivi", age: 24 },
];

let age = (arr) => {
  let maxage = arr[0].age;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > maxage) {
      maxage = arr[i];
    }
  }
  return maxage;
};

// console.log(age(array2));

// 6. Írd le az metszet tételét vagy egyéb algoritmust, mely két tömb metszetét számolja
// ki! (10p)

let arr = [5, 5, 5, 5, 5];
let arr1 = [4, 5, 5, 4];
let j;
let k = 0;

let metszet = (arr, arr1) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    j = 0;
    while (j < arr1.length && arr[i] != arr1[j]) {
      j++;
      if (j < arr1.length) {
        array[k++] = arr[i];
      }
    }
  }
  return array;
};

console.log(metszet(arr, arr1));

// 7. Írj egy modult, mely három függvényt exportál: összeadás, szorzás, hatványozás! A
// függvények működjenek is! A fő modulban töltsd is be, és hívj meg legalább 1
// függvényt közülük! (10p)

console.log(szamolo.osszeg(4, 5));
console.log(szamolo.szorzas(4, 5));
console.log(szamolo.hatvany(4, 5));
// 8. Írj programot, mely két számot olvas be a felhasználótól, és létrehoz egy n x m
// méretű kétdimenziós tömböt a paraméterek alapján, majd feltölti az indexeinek
// szorzatával! (10p)
// Pl bemenet: 3 3
// Kimenet: 0 0 0
// 0 1 2
// 0 2 4

// Böngészőben igy tudná a felhasználó megadni az oszlopok és sorok számát

// let n;
// let m;

// n = parseInt(window.prompt("Sor szama?"));
// m = parseInt(window.prompt("Oszlop szama?"));

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * j;
    }
  }
  return arr;
};

console.log(fill2d(generate2d(3, 3)));
