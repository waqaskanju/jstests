
import { stringLength,reverseString,calculator } from './length.js';

test('length of waqas equal 5',()=>{
  expect(stringLength("waqas")).toBe(5);
}); 

test('pass empty should throw error',()=>{
  expect(() => stringLength("")).toThrow('Length must be greater then 0');
}); 

test('pass string greater than 10 should throw error',()=>{
  expect(() => stringLength("waqas ahmad")).toThrow('Length must be smaller then 10');
}); 

test('waqas should be chaned to saqaw',()=>{
  expect(reverseString("waqas")).toBe("saqaw");
}); 

describe('Calculator Test',()=>{

  const someThing = new calculator(10,5)
  test('10+5 is equal to 15',()=>{
  expect(someThing.add()).toBe(15);
  });

  test('10-5 is equal to 5',()=>{
    expect(someThing.subtract()).toBe(5);
    });

});
