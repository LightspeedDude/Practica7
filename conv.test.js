const { test, expect } = require('@jest/globals');
const cvt = require('./conv.js');

test('Test1', ()=>{
    const dec = 73;
    expect(cvt(dec)).toBe(1001010);
});

test('Test2', ()=>{
    const dec = 7;
    expect(cvt(dec)).toBe(111);
});

test('Test3', ()=>{
    const dec = 18;
    expect(cvt(dec)).toBe(10010);
});

test('Test4', ()=>{
    const dec = 173;
    expect(cvt(dec)).toBe(10101101);
});

test('Test5', ()=>{
    const dec = 204;
    expect(cvt(dec)).toBe(11001100);
});