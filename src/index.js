module.exports = function toReadable (number) {
    const units = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    const hundreds = [
        'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred',
        'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'
    ];

    if (number === 0) {
        return units[0];
    }

    let result = '';

    if (number >= 100) {
        result += hundreds[Math.floor(number / 100) - 1] + ' ';
        number %= 100;
    }

    if (number >= 20) {
        result += tens[Math.floor(number / 10) - 2] + ' ';
        number %= 10;
    } else if (number >= 10) {
        result += teens[number - 10] + ' ';
        number = 0;
    }

    // Получаем единицы
    if (number > 0) {
        result += units[number] + ' ';
    }

    return result.trim();
}
