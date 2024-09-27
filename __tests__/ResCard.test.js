import { render, screen } from "@testing-library/react"
import ResCard from "../src/components/ResCard"
import MOCK_DATA from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom"
import isOpendResCard from "../src/components/IsOpenResCard"
const IsOpen = isOpendResCard(ResCard);

test("should Render ResCard", ()=>{
    render(<ResCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Aryan Family's Delight");
    expect(name).toBeInTheDocument();
})

test("should render Is Open", ()=>{
    render(<IsOpen resData={MOCK_DATA}/>);
    const isOpen = screen.getByText("Open");
    expect(isOpen).toBeInTheDocument();
})