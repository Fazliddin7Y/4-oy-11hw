// 1. O'quvchilarning baholarini olish
const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

function getNamesWithGrade(grade) {
  return students
    .map(student => {
      // Bahoni aniqlash
      if (student.percent >= 85) return { ...student, grade: 5 };
      if (student.percent >= 70) return { ...student, grade: 4 };
      if (student.percent >= 60) return { ...student, grade: 3 };
      return { ...student, grade: 2 }; // Agar boshqa shartlarga mos kelmasa
    })
    .filter(student => student.grade === grade) // Ma'lum bahoga ega o'quvchilarni filtrlash
    .map(student => student.name); // Faqat ismlarini qaytarish
}

console.log(getNamesWithGrade(5)); // ['Quincy', 'Alexis', 'Katie']


// 2. Hayvonlar sonini hisoblash
const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const animalCount = animals.reduce((count, animal) => {
  count[animal] = (count[animal] || 0) + 1; // Har bir hayvonning sonini hisoblash
  return count;
}, {});

console.log(animalCount); // { dog: 2, chicken: 3, cat: 1, rabbit: 1 }


// 3. Raqamlarning kvadratini olish
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num); // Har bir raqamni kvadratga oshirish

console.log(squaredNumbers); // [1, 4, 9, 16, 25]


// 4. Musbat raqamlarning yig'indisini hisoblash
const mixedNumbers = [1, -4, 12, 0, -3, 29, -150];
const positiveSum = mixedNumbers.filter(num => num > 0).reduce((sum, num) => sum + num, 0); // Musbat raqamlarni yig'indisi

console.log(positiveSum); // 42


// 5. Ismlarning bosh harflarini olish
const fullName = 'George Raymond Richard Martin';
const initials = fullName.split(' ').map(name => name[0]).join(''); // Har bir so'zning birinchi harfini olish

console.log(initials); // 'GRRM'


// 6. Eng yosh va eng katta odamlar o'rtasidagi farqni topish
const people = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];

const ages = people.map(person => person.age); // Yoshlarni olish
const ageDifference = Math.max(...ages) - Math.min(...ages); // Eng katta va eng kichik yoshlar o'rtasidagi farq

console.log(ageDifference); // 54


// 7. Juft va toq raqamlarni ajratish
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter(num => num % 2 === 0); // Juft raqamlarni olish
const oddNumbers = numbers2.filter(num => num % 2 !== 0); // Toq raqamlarni olish

console.log('Juftlar:', evenNumbers); // [2, 4, 6, 8, 10]
console.log('Toqlar:', oddNumbers); // [1, 3, 5, 7, 9]


// 8. Unikal qiymatlarni olish
const values = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const uniqueValues = [...new Set(values)]; // Set yordamida unikal qiymatlarni olish

console.log(uniqueValues); // [1, 2, 3, 4, 5, 6]


// 9. Mahsulotlarni turli mezonlar bo'yicha saralash
const products = [
  { id: 1, name: 'Product A', price: 300, rating: 4.2, discount: 10 },
  { id: 2, name: 'Product B', price: 150, rating: 3.8, discount: 20 },
  { id: 3, name: 'Product C', price: 450, rating: 4.9, discount: 5 }
];

const sortedByPrice = [...products].sort((a, b) => a.price - b.price); // Narx bo'yicha saralash
const sortedByRating = [...products].sort((a, b) => b.rating - a.rating); // Reyting bo'yicha saralash
const sortedByDiscount = [...products].sort((a, b) => b.discount - a.discount); // Chegirma bo'yicha saralash

console.log('Narx bo\'yicha saralangan:', sortedByPrice);
console.log('Reyting bo\'yicha saralangan:', sortedByRating);
console.log('Chegirma bo\'yicha saralangan:', sortedByDiscount);


// 10. Eng yuqori reytingga ega mahsulot
const topRatedProduct = [...products].sort((a, b) => b.rating - a.rating)[0];

console.log('Eng yuqori reytingga ega mahsulot:', topRatedProduct);


// 11. Eng arzon mahsulot
const cheapestProduct = [...products].sort((a, b) => a.price - b.price)[0];

console.log('Eng arzon mahsulot:', cheapestProduct);


// 12. Mahsulotlar narxining umumiy yig'indisi
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

console.log('Umumiy narx:', totalPrice);


// 13. Mahsulot nomlarining ro'yxati
const productNames = products.map(product => product.name);

console.log(productNames); // ['Product A', 'Product B', 'Product C']


// 14. IDsi 5 bo'lgan mahsulotni topish
const productWithId5 = products.find(product => product.id === 5);

console.log(productWithId5 ? productWithId5.name : 'Mahsulot topilmadi');


// 18. So'zlar uzunligini olish
const str = "Men Sultonqul Programmerman";
const wordLengths = str.split(' ').map(word => word.length); // Har bir so'zning uzunligini olish

console.log(wordLengths); // [3, 9, 12]


// 19. Bo'sh joy bor yoki yo'qligini tekshirish
const strWithSpaces = "Men Sultonqul Programmerman";
const hasSpace = strWithSpaces.includes(' '); // Bo'sh joy borligini tekshirish

console.log(hasSpace); // true


// 20. Obyektdagi kalit va qiymatlarni olish
const obj = { a: 2, b: 5, c: 7 };
const keyValuePairs = Object.entries(obj).map(([key, value]) => key + value); // Kalit va qiymatlarni birlashtirish

console.log(keyValuePairs); // ['a2', 'b5', 'c7']


// 21. Son raqamlari yig'indisini hisoblash
function digitSum(number) {
  if (number === 0) return 0; // Agar raqam 0 bo'lsa, yig'indi 0
  return number % 10 + digitSum(Math.floor(number / 10)); // Raqamning oxirgi raqamini va qolganini qaytarish
}

console.log(digitSum(12345)); // 15


// 22. O'quvchilar orasida o'rtacha bahoni hisoblash
const pupils = [
  { name: "Ali", percent: 95 },
  { name: "John", percent: 82 },
  { name: "Rachel", percent: 78 },
  { name: "Sasha", percent: 60 },
];

const averagePercent = pupils.reduce((sum, pupil) => sum + pupil.percent, 0) / pupils.length; // O'rtacha bahoni hisoblash

console.log('O\'rtacha baho:', averagePercent); // 78.75

// 23. O'quvchilarga 'grade' va 'isPassed' qo'shish

const updatedPupilsWithGrade = pupils.map(pupil => {
    let grade; // Bahoni belgilash uchun o'zgaruvchi
    if (pupil.percent >= 90) {
      grade = 5; // 90% va undan yuqori - 5
    } else if (pupil.percent >= 80) {
      grade = 4; // 80% va undan yuqori - 4
    } else if (pupil.percent >= 70) {
      grade = 3; // 70% va undan yuqori - 3
    } else {
      grade = 2; // Boshqa hollarda - 2
    }
  
    return {
      ...pupil, // O'quvchining boshqa ma'lumotlarini saqlab qolish
      grade: grade // Yangi bahoni qo'shish
    };
  });
  
  console.log(updatedPupilsWithGrade);
  /* 
  Output:
  [
    { name: "Ali", percent: 95, grade: 5 },
    { name: "John", percent: 82, grade: 4 },
    { name: "Rachel", percent: 78, grade: 3 },
    { name: "Sasha", percent: 60, grade: 2 }
  ]
  */
  
  // 24. O'quvchilarga 'isPassed' qo'shish
  
  const updatedPupilsWithPassed = pupils.map(pupil => {
    return {
      ...pupil, // O'quvchining boshqa ma'lumotlarini saqlab qolish
      isPassed: pupil.percent >= 70 // 70% dan yuqori bo'lganlar o'tgan deb hisoblanadi
    };
  });
  
  console.log(updatedPupilsWithPassed);

  