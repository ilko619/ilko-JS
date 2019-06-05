var ilko = {
    getRandInt: function (min, max) {
        var result = Math.round(Math.random() * (max - min) + min);
        return result;
    },
    numIsEven: function (num) {
        if (num % 2 == 0)
            return true;
        else
            return false;
    },
    numIsOdd: function (num) {
        if (num % 2 == 0)
            return false;
        else
            return true;
    },
    getMaxNum: function (arr) {
        var result = Math.max.apply(null, arr);
        return result;
    },
    getMinNum: function (arr) {
        var result = Math.min.apply(null, arr);
        return result;
    },
    numIsPositive: function (num) {
        if (num > 0)
            return true;
        else
            return false;

    },
    numIsNegative: function (num) {
        if (num < 0)
            return true;
        else
            return false;

    },
    getSquares: function (arr) {
        var newr = [];
        arr.forEach(function (el) {
            newr.push(el ** 2);

        })
        return newr;
    },
    getAverageValue: function (arr) {
        var sum = 0;
        arr.forEach(function (el) {
            sum += el;
        })
        return sum / arr.length;
    }
}