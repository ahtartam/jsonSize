const UNITTEST_SHOW_SUCCESS = false;
let countOfSuccess = 0;
let countOfFails = 0;

function unitTest(tag, action, expected) {
    const actual = action();
    if (expected !== actual) {
        countOfFails++;
        console.log(`Test FAILED: ${tag} => actual=${actual}; expected=${expected};`);
    } else {
        countOfSuccess++;
        if (UNITTEST_SHOW_SUCCESS) {
            console.log(`Test SUCCESS: ${tag} => ${actual};`);
        }
    }
}

console.log(`Unit-Tests starting...`)

unitTest('countOf()#1', () => countOf('qwertyqwerty', 'qwerty'), 2);
unitTest('countOf()#2', () => countOf('qwertyqwertyqwerty', 'qwerty'), 3);
unitTest('countOf()#3', () => countOf('qwertyqwertyqwerty', 'q'), 3);
unitTest('countOf()#4', () => countOf('qwerty json huge info qwerty json info', 'json'), 2);
unitTest('countOf()#5', () => countOf('infoinfoinfo', 'info'), 3);
unitTest('countOf()#6', () => countOf('ononono', 'ono'), 3);
unitTest('countOf()#7', () => countOf('ononono', 'onon'), 2);
unitTest('countOf()#8', () => countOf('nonono', 'onon'), 1);

unitTest('letKt()#1', () => letKt('A', it => {
    return `[${it}]`;
}), '[A]');
unitTest('letKt()#2', () => letKt(Number(5), it => it * 2), 10);

unitTest('also()#1', () => also('A', it => {
    return `[${it}]`;
}).toString(), 'A');
unitTest('also()#2', () => also(Number(5), it => it * 2).toString(), '5');

unitTest('String.takeLast(num)#1', () => '0123456'.takeLast(6), '123456');
unitTest('String.takeLast(num)#2', () => '123456'.takeLast(6), '123456');
unitTest('String.takeLast(num)#3', () => '23456'.takeLast(6), '23456');
unitTest('String.takeLast(num)#4', () => '1'.takeLast(6), '1');
unitTest('String.takeLast(num)#5', () => ''.takeLast(6), '');

unitTest('toHex()#1', () => Number(10).toHex(), 'A');
unitTest('toHex()#2', () => Number(10).toHex(3), '00A');
unitTest('toHex()#3', () => Number(0).toHex(), '0');
unitTest('toHex()#4', () => Number(0).toHex(6), '000000');
unitTest('toHex()#5', () => Number(15).toHex(), 'F');
unitTest('toHex()#6', () => Number(16).toHex(), '10');
unitTest('toHex()#7', () => Number(16777215).toHex(), 'FFFFFF');
unitTest('toHex()#8', () => Number(5592405).toHex(), '555555');
unitTest('toHex()#9', () => Number(11184810).toHex(), 'AAAAAA');
unitTest('toHex()#10', () => Number(96).toHex(), '60');
unitTest('toHex()#11', () => Number(96).toHex(6), '000060');
unitTest('toHex()#12', () => Number(96).toHex(2), '60');
unitTest('toHex()#13', () => Number(159).toHex(), '9F');
unitTest('toHex()#14', () => Number(159).toHex(2), '9F');

unitTest('fromHex()#1', () => 'A'.fromHex(), 10);
unitTest('fromHex()#2', () => '0'.fromHex(), 0);
unitTest('fromHex()#3', () => 'F'.fromHex(), 15);
unitTest('fromHex()#4', () => '10'.fromHex(), 16);
unitTest('fromHex()#5', () => 'FFFFFF'.fromHex(), 16777215);
unitTest('fromHex()#6', () => '555555'.fromHex(), 5592405);
unitTest('fromHex()#7', () => 'AAAAAA'.fromHex(), 11184810);

unitTest('invertHex()#1', () => invertHex('FFFFFF'), '000000');
unitTest('invertHex()#2', () => invertHex('000000'), 'FFFFFF');
unitTest('invertHex()#3', () => invertHex('aaaaaa'), '555555');
unitTest('invertHex()#4', () => invertHex('555555'), 'AAAAAA');

unitTest('avgHex()#1', () => avgHex('ffffff'), 'FFFFFF');
unitTest('avgHex()#2', () => avgHex('000000'), '000000');
unitTest('avgHex()#3', () => avgHex('aaaaaa'), 'AAAAAA');
unitTest('avgHex()#4', () => avgHex('804000'), '404040');
unitTest('avgHex()#5', () => avgHex('7A9314'), '606060');

unitTest('subInvertHex()#1', () => subInvertHex('FFFFFF'), '000000');
unitTest('subInvertHex()#2', () => subInvertHex('000000'), 'FFFFFF');
unitTest('subInvertHex()#3', () => subInvertHex('aaaaaa'), '555555');
unitTest('subInvertHex()#4', () => subInvertHex('555555'), 'AAAAAA');
unitTest('subInvertHex()#5', () => subInvertHex('7A9314'), '9E9E9E');


if (countOfFails !== 0) {
    const message = `Unit-Tests fails! countOfFails = ${countOfFails}; countOfSuccess = ${countOfSuccess};`;
    console.log(message);
    alert(message);
} else {
    console.log(`Unit-Tests all success. countOfSuccess = ${countOfSuccess};`)
}
