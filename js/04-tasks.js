// Створи об'єкт із властивостями `score` (число). Додай метод `resetScore`, який
// встановлює значення `score` на 0.

// const task1 = {
//   score: 100,
//   resetScore() {
//     this.score = 0;
//   },
// };

// console.log(task1.score);

// task1.score += 10;

// console.log(task1.score);

// task1.resetScore();

// console.log(task1.score);

//!=========================================

// const rectangle = {
//   width: 150,
//   height: 200,

//   setParams(newW, newH) {
//     this.width = newW;
//     this.height = newH;
//   },

//   getP() {
//     return this.width * 2 + this.height * 2;
//   },

//   getArea() {
//     return this.width * this.height;
//   },
// };

//!=========================================

// Створи об'єкт із властивостями `temperature` (число). Додай метод `isFreezing`,
// який повертає `true`, якщо температура менше або дорівнює 0.

const tempObj = {
  temperature: 25,
  isFreezing() {
    return this.temperature <= 0;
  },
};

//!=========================================

// Створи об'єкт із властивостями `length` (число) та `width` (число). Додай метод
// `isSquare`, який повертає `true`, якщо довжина і ширина однакові.

function getRectangle(w, h) {
  const rectangle = {
    width: w,
    height: h,

    setParams(newW, newH) {
      this.width = newW;
      this.height = newH;
    },

    getP() {
      return this.width * 2 + this.height * 2;
    },

    getArea() {
      return this.width * this.height;
    },

    isSquare() {
      return this.width === this.height;
    },
  };

  return rectangle;
}

const r1 = getRectangle(10, 10);
const r2 = getRectangle(30, 100);

// console.log(r1.isSquare());
// console.log(r2.isSquare());
//!=========================================
// Створи об'єкт із властивостями `cityName` (рядок), `population` (число) та
// `isCapital` (булеве значення). Додай метод `getCityInfo`, який повертає опис
// міста у форматі: `[cityName] має населення [population]. Столиця: [isCapital]`.

const city = {
  cityName: 'Dnirpo',
  population: 2000000,
  isCapital: false,

  getCityInfo() {
    console.log(
      `${this.cityName} має населення ${this.population}. Столиця: ${this.isCapital}`,
    );
  },
};

city.getCityInfo();

//!=========================================
// Створи об'єкт із властивостями `bankName` (рядок), `accountNumber` (число) та
// `balance` (число). Додай метод `deposit`, який приймає суму як аргумент і додає
// її до балансу, а також метод `withdraw`, який приймає суму і зменшує баланс,
// якщо сума не перевищує наявний баланс. Метод має повертати новий баланс.

const bankAccount = {
  bankName: 'Monobank',
  accountNumber: '12412513523512312412',
  balance: 0,

  deposit(value) {
    this.balance += value;
  },

  withdraw(value) {
    if (value <= this.balance) {
      this.balance -= value;
    }
  },
};

console.log(bankAccount.balance);

bankAccount.deposit(100);
bankAccount.deposit(300);
bankAccount.deposit(500);

console.log(bankAccount.balance);

bankAccount.withdraw(3000);
bankAccount.withdraw(1500);
bankAccount.withdraw(500);

console.log(bankAccount.balance);

//!=========================================
