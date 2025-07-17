import {sum} from '../sum';



test("sum func should calculate the sum of 2 numbers",()=>{
       const result=sum(3,8);

       //expectation
       //assertion
       expect(result).toBe(11);
});