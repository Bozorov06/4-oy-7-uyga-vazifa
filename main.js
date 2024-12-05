// MASSIVLAR
// ==================================================
// 1-MASALA
// Berilgan massivdagi barcha elementlarni konsolga chiqaring.
// let num = [1,2,3,4,5,6,7,8,9,10]
// console.log(num);


// ==================================================
// 2-MASALA
// Massiv elementlarining yig‘indisini hisoblang.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < num.length; i++){
//     sum += num[i]
// }

// console.log(sum);



// ==================================================
// 3-MASALA
// Massivdagi eng katta elementni toping.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = [];
// for (let i = 0; i < num.length; i++){
//     max=(Math.max(num[i]))
// }
// console.log(max);
// ==================================================
// 4-MASALA
// Massivdagi eng kichik elementni toping.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = []; 
// for (let i = 0; i < num.length; i++){
//     min = Math.min(num[i])
// }
//     console.log(min);
// ==================================================
// 5-MASALA
// Massivdagi barcha juft sonlarni konsolga chiqaring.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < num.length; i++) {
//     if(num[i]%2==0){
//         console.log(num[i]);
//     }
// }

// ==================================================
// 6-MASALA
// Massivdagi barcha toq sonlarni konsolga chiqaring
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] % 2 == 1) {
//     console.log(num[i]);
//   }
// }

// ==================================================
// 7-MASALA
// Massivdagi manfiy sonlar sonini hisoblang.
// let num = [-1, -2, -3, 4, 5, 6, 7, 8, 9, 10];
// let counter=0;
// for( let i = 0 ; i < num.length; i++){
//     if(num[i]<0){
//         counter++
//     }
// }
// console.log(counter);


// ==================================================
// 8-MASALA
//Massivdagi musbat sonlar sonini hisoblang.
// let num = [-1, -2, -3, 4, 5, 6, 7, 8, 9, 10];
// let counter = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 0) {
//     counter++;
//   }
// }
// console.log(counter);


// ==================================================
// 9-MASALA
// Massivdagi elementlarning o‘rtacha qiymatini toping
// let num = [3,4,5,10,14,17];
// let sum = 0; 
// let res;
// for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//     res= sum/(num.length)
// }
// console.log(res);

// ==================================================
// 10-MASALA
// Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).
//  let num = [3, 4, 5, 10, 14, 17];
//  num.reverse()
//  console.log(num);
 

// ==================================================
// 11-MASALA
// Massivning teskari nusxasini yarating.

// ==================================================
// 12-MASALA
// Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.
// let num = [3, 4, 5, 10, 14, 17];
// let res = [];
// for(let i = 0; i < num.length; i++){
//     res.push(num[i]*2);
// }
// console.log(res);
// ==================================================
// 13-MASALA
// Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.
// let num = [3, 4, 5, 10, 14, 17];

// ==================================================
// 14-MASALA
// Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.
// let num = [1, 2, 3, 4, 5, 12, 15, 20, 14, 30, 55];
// for (let i = 0; i < num.length; i++) {
//     if (num[i]%5==0) {
//         console.log(num[i]);
//     }
    
// }

// ==================================================
// 15-MASALA
// Massivni tartiblang (o‘sish bo‘yicha).

// ==================================================
// 16-MASALA
// Massivni tartiblang (kamayish bo‘yicha).

// ==================================================
// 17-MASALA
// Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.
// let num = [3, 4, 5, 10, 14, 17];
// let res = [];
//  for (let i = 0; i < num.length; i++){
//     res.push (num[i]+3)
//  }
//  console.log(res);
 
// ==================================================
// 18-MASALA
// Massivdagi barcha musbat sonlarni alohida massivga ajrating.
// let num = [-1,-2,-11,-15,3, 4, 5, 10, 14, 17];
// let res = [];
//  for (let i = 0; i < num.length; i++){
//     if(num[i]>0){
//         res.push (num[i])
//     }
//  }
//  console.log(res);
// ==================================================
// 19-MASALA
// Massivdagi barcha manfiy sonlarni alohida massivga ajrating.
// let num = [-1, -2, -11, -15, 3, 4, 5, 10, 14, 17];
// let res = [];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] < 0) {
//     res.push(num[i]);
//   }
// }
// console.log(res);
// ==================================================
// 20-MASALA
// Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.
// let num = [1,2,4,12,5,6,7,8,9];
// let res = [];
// for(let i = 0; i< num.length; i += 2){
//     res.push(num[i])
// }
// console.log(res);


// ==================================================
// 21-MASALA
// Massivni ikkiga bo‘ling: birinchi va ikkinchi yarmalarini alohida massivlarga ajrating.
// let num = [1,2,4,12,5,6,7,8,9];
// let res = [];
// for (let i = 0; i < num.length; i++) {
// }
// console.log(res);

// ==================================================
// 22-MASALA
// Massivda nechta element 10 dan katta ekanini aniqlang.
// let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let counter = 0;
// for (let i = 0; i < num.length; i++) {
//     if (num[i]>10) {
//         counter++
//     }
// }
// console.log(counter);

// ==================================================
// 23-MASALA
// Massivdagi barcha elementlarni 0 ga almashtiring.
// let num = [1,2,3,4,5,6,7]
// for (let i = 0; i < num.length; i++) {
//     if (num[i]>0) {
//         console.log(num[i] * 0);
//     }
// }

// ==================================================
// 24-MASALA
// Massivning birinchi elementini oxiriga o‘tkazing.
// let num =[1,2,3,4,5,6,7,8]
// num.shift()
// num.push(1);
// console.log(num);

// ==================================================
// 25-MASALA
// Massivning oxirgi elementini boshiga o‘tkazing.
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// num.pop ()
// num.unshift(8);
// console.log(num);

// ==================================================
// 26-MASALA
// Massivdan har ikkinchi elementni o‘chiring.
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(num);

// ==================================================
// 27-MASALA
// Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.
// let num = [1, -2,  2, 3, -4, 4, -3, -31, -12,5, 6, 7, 8];
// for (let i = 0; i < num.length; i++){
//     if (num[i] < 0) {
//         console.log(num[i] * 0);
//     }
// }


// ==================================================
// 28-MASALA
// Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.
// let num=[1,2,3,4,5,6,7,8,9,10,11,12];
// let res =[]
// for (let i = 0; i < num.length; i++){
//     res.push(num[i]*i)
// }
// console.log(res);



// ==================================================
// 29-MASALA
// Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (let i = 0; i < num.length; i++){
//     if(num[i]%3 == 0){
//         console.log(num[i]);
//     }
// }


// ==================================================
// 30-MASALA
// Massivdagi barcha bir xil elementlarni o‘chiring (bir marta qolishi kerak).
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// qanday qilishni bilmadim

// ==================================================
// 31-MASALA
// Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let res = []
// for (let i = 0; i < num.length; i+= 2) {
//     res.push(num[i]);
// }
// console.log(res);


// ==================================================
// 32-MASALA
// Massivdan 2 ga karrali sonlarni olib tashlang.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let res =[]
// for (let i = 0; i < num.length; i++) {
//     if(num[i]%2!=0){
//         res.push(num[i])
//     }
// }
// console.log(res); 

// ==================================================
// 33-MASALA
// Massivning faqat o‘rtadagi elementlarini olib tashlang (elementlar soni juft bo‘lsa, o‘rtadagi ikkitasini olib tashlang).
//  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// ==================================================
// 34-MASALA
// Massivning birinchi va oxirgi elementlarini almashtiring.
//  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//  num.shift()
//  num.pop()
//  num.push(1)
//  num.unshift(12)
//  console.log(num);
 

// ==================================================
// 35-MASALA
// Massivni boshqa massiv bilan birlashtiring.
// let num1 = [1,2,3,4,5,6,7,8,9]
// let num2 = [2,34,4,5,6,23,12];
// for (let i = 0; i < num2.length; i++){
//     num1.push(num2[i])
// }
// console.log(num1);


// ==================================================
// 36-MASALA
// Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let res = []
// for (let i = 0; i < num.length; i++){
//     res.push(num[i]/3)
// }
// console.log(res);

// ==================================================
// 37-MASALA
// Massivdan manfiy sonlarni olib tashlang.
// let num = [1, -2, 3, -4, 5, 6, -7, 8, -9, -10, 11, 12];
// let res = []
// for (let i = 0; i < num.length; i++){
//     if (num[i] > 0 ) {
//         res.push(num[i])
//     }
// }
// console.log(res);

// ==================================================
// 38-MASALA
// Massivdagi juft indeksdagi elementlarni 0 ga almashtiring.
// let num = [1, 2, 3, -4, 5, 6, -7, 8, -9, -10, 11, 12];
// let res = [];
// for (let i = 0; i < num.length; i+= 2){
//     res.push(num[i] * 0)
// }
// console.log(res);


// ==================================================
// 39-MASALA
// Massivdan takroriy elementlarni olib tashlang.

// ==================================================
// 40-MASALA
// Massivning o‘rta indeksiga yangi element qo‘shing.

// ==================================================
// 41-MASALA
// Massivni ikkiga ajratib, ikkala yarmni teskari tartibda saqlang.


// ==================================================
// 42-MASALA
// Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).


// ==================================================
// 43-MASALA
// Massivni aylantiring (birinchi elementni oxiriga qo‘ying).

// ==================================================
// 44-MASALA
// Massivni barcha musbat va manfiy elementlarga ajratib, musbatlarini boshiga, manfiylarini oxiriga joylashtiring.
// let num = [1, 2, 3, -4, 5, 6, -7, 8, -9, -10, 11, 12];

// ==================================================
// 45-MASALA
// Massivning eng kichik elementini o‘chiring.
// let num = [1, 2, 3, 4, 5, 6, 8, 9, 11, 12];
// let min = 
    

// ==================================================
// 46-MASALA
// Massivning eng katta elementini o‘chiring.

// ==================================================
// 47-MASALA
// Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring.
// let num = [1, 2, 3, 4, 5, 6, 8, 9, 11, 12]
// for (let i = 0; i < num.length; i++){
//     console.log(num[i]*2);
// }


// ==================================================
// 48-MASALA
// Massivdan bir xil qiymatlarni olib tashlab, faqat noyob qiymatlarni qaytaring.
// savolga tushunmadim

// ==================================================
// 49-MASALA
// Massiv elementlarini karralik bo‘yicha (2, 3, 5 kabi) guruhlarga ajrating.
// savolga tushunmadim

// ==================================================
// 50-MASALA
// Massivni aylantirish (rotation) orqali 3 marta oldinga suring.
// savolga tushunmadim.
