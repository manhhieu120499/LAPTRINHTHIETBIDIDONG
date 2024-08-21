const Dolphins = [96, 108, 89]
const Koalas = [88, 91, 110]

function average(arr) {
    return Dolphins.reduce((result, score) => result + score, 0) / arr.length;
}

const DolphinsAverage = average(Dolphins)
const KoalasAverage = average(Koalas)

if (DolphinsAverage > KoalasAverage && DolphinsAverage >= 100 && KoalasAverage >= 100) {
    console.log('Dolphins is winner')
} else if (DolphinsAverage < KoalasAverage && DolphinsAverage >= 100 && KoalasAverage >= 100) {
    console.log('Koalas is winner')
} else if (DolphinsAverage == KoalasAverage && DolphinsAverage >= 100 && KoalasAverage >= 100) {
    console.log('Dolphins and Koalas are same')
} else { console.log('No winner') }