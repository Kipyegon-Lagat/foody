import { render,screen } from "@testing-library/react";
import Contact from "../Contact.jsx"
import '@testing-library/jest-dom';

describe('contact us page test case',()=>{
    // beforeAll(()=>{
    //     console.log('before all');
    // })
    // beforeEach(()=>{
    //     console.log('beforeEach');
    // })

    // afterAll(()=>{
    //     console.log('after all');
    // })
    // afterEach(()=>{
    //     console.log('afterEach');
    // })

    test("should load contact us component",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    it("should load button inside contact  component",()=>{
        render(<Contact/>);
        const button=screen.getByText("submit");
        expect(button).toBeInTheDocument();
    })
    test("should load 3 paragraph inside contact  component",()=>{
        render(<Contact/>);
        const para=screen.getAllByRole("paragraph");
        //console.log(para.length)
        expect(para.length).toBe(3);
    })

})
