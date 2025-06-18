import { error } from "console";



describe ('test in the app file ',()=>{
    test('should b 30',()=>{
       //1. Arrange
       const num1=10;
       const num2=20;

       //2. Actuar
       const res=num1+num2 
       //3.Assert
       expect (res).toBe(3) 
       /*if (res===31){

       }else{
        throw new Error ('the result is inorrect we wait 30')
       }*/

    });
});