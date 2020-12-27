const converting = require('./convert.js');

test('Test1', ()=> {
    const t = generateText('36');
    expect(converting(t)).toBe('100100');
});

test('Test2', ()=>{
    const t = generateText('8');
    expect(converting(t)).toBe('1000');
});

test('Test3', ()=>{
    const t = generateText('3');
    expect(converting(t)).toBe('11');
});

test('Test4', ()=>{
    const t = generateText('153');
    expect(converting(t)).toBe('10011001');
});

test('Test5', ()=>{
    const t = generateText('74');
    expect(converting(t)).toBe('1001010');
});