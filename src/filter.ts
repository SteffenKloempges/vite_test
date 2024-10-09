console.clear();
// mit import können wir unser userArr in der filter.ts nutzen
// import gehören immer am anfang eines skripts
import { userArr } from "./user";

console.log("%c filter ", "background: gold; color: tomato;");
// ========================
//          filter()
// ========================
// mit filter(callback) suche ich nach bestimmten dingen in einem array
// ähnlich wie bei map/forEach habe ich eine callback function in der ich etwas machen kann und eine bedingung angebe
// filter() erstellt dann ein neues array

const numbers: number[] = [3, 5, 10, 13, 15, 17, 18, 20];

// alle geraden zahlen aus dem array filtern, in der langen version geschrieben
const evenNumbers = numbers.filter((num) => {
    if (num % 2 === 0) {
        return num;
    }
})
console.log(evenNumbers);

// alle ungeraden zahlen aus dem array filtern, in der super short version --> kann man nutzen bei sehr einfachen bedingungen
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

// ============================================
//  Jetzt wollen wir aber mal richtig filtern
// ============================================
// wir haben ein großes user arr und hier wollen wir uns mal ein bisschen austoben
// wir kopieren auch unseren type mit, damit wir auch immer ordentlich arbeiten können
type User = [string, string, number, string];

// wir wollen alle user aus berlin haben
const userBerlin: User[] = userArr.filter((country) => {
    if (country[3] === "Berlin") {
        return country;
    }
})
console.log(userBerlin);

// alle user unter 30
const userUnder30: User[] = userArr.filter((userAge) => {
    if (userAge[2] < 30) {
        return userAge;
    }
})
console.log(userUnder30);

const userUnder30AndEven: User[] = userUnder30.filter((userAge) => {
    if (userAge[2] % 2 === 0) {
        return userAge;
    }
})

console.log(userUnder30AndEven.sort((a: User, b: User) => {
    return a[2] - b[2];
}));

// Jetzt könnten wir noch das ganze im HTML ausgeben und bearbeiten lassen