const {generateText} = require('./convert.test');

test('Test1DtB', ()=> {
    const decimal = generateText('12');
    expect(convertion(decimal)).toBe('1100')
});

test('Test2DtB', () => {
const decimal = generateText('84');
expect(convertion(decimal)).toBe('1010100');
});

test('Test3DtB', ()=> {
    const decimal = generateText('123');
    expect(convertion(decimal)).toBe('1111011');
});

test('Test4DtB', ()=> {
    const decimal = generateText('8');
    expect(convertion(decimal)).toBe('1000');
});

test('Test5DtB', ()=>{
    const decimal = generateText('36');
    expect(convertion(decimal)).toBe('100100');
});
