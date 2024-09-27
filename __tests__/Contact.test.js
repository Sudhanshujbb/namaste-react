import { render, screen } from "@testing-library/react"
import Contact from "../src/components/Contact"
import "@testing-library/jest-dom";

test("Check wether component is loaded or not", ()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
});
test("Check wether component is loaded or not", ()=>{
    render(<Contact/>);
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();
});

test("Check wether component is loaded or not", ()=>{
    render(<Contact/>);
    const inputPlaceholder = screen.getByPlaceholderText("Name");
    expect(inputPlaceholder).toBeInTheDocument();
});
test("Check wether two input", ()=>{
    render(<Contact/>);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
});



