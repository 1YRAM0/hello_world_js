import { emailtemplate } from "../../src/js-foundation/01-template";

describe ("js-foundation/01-template.ts",()=>{

    test('emailTemplateSouldContain a messages',()=>{
        expect (emailtemplate).toContain('Hi, ')
        
    });
    

});