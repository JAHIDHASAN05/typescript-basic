"use strict";
{
    const kgToGm = (num) => {
        if (typeof num === 'number') {
            return num * 100;
        }
        if (typeof num === 'string') {
            const makeInteger = parseFloat(num) * 1000;
            return `the value is ${makeInteger}`;
        }
    };
    const rusult1 = kgToGm(20);
    console.log(rusult1);
}
