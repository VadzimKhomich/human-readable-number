module.exports = function toReadable (number) {
const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

if (numbers[number] !== undefined) {
        return numbers[number]
    }

    const arrayFromNumber = Array.from(number.toString())

    if (arrayFromNumber.length === 2) {
        return numbers[arrayFromNumber[0] + "0"] + ' ' + numbers[arrayFromNumber[1]]
    }

    if (arrayFromNumber.length === 3) {
        let result = `${numbers[arrayFromNumber[0]]} hundred`

        if (arrayFromNumber[1] === '0' && arrayFromNumber[2] === '0') {
            return result
        }

        if (arrayFromNumber[1] === '0') {
            result += ' ' + toReadable(+arrayFromNumber[2])
        } else {
            arrayFromNumber.shift()
            result += ' ' + toReadable(+arrayFromNumber.join(''))
        }
        return result
    }
}
