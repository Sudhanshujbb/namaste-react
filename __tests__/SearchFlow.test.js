import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../src/components/Body"
import MOCK_DATA from "../mocks/ResListMock.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../src/store/appStore"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

test("Check Wether Body is Working fin", async ()=>{
    await act(async()=> render(
        <Provider store={appStore}>
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
        </Provider>
    ))
   const searchBtn = screen.getByRole("button", {name: "Search"})

   const searchBox = screen.getByTestId("search-input");
   fireEvent.change(searchBox, {target: {value: "burger"}})
   fireEvent.click(searchBtn);

   const resCards = screen.getAllByTestId("res-card");
   expect(resCards.length).toBe(1);
    const topBtn = screen.getByRole("button", {name: "Top Rated Restaurant"});
    fireEvent.click(topBtn);
    expect(screen.getAllByTestId('res-card').length).toBe(10);

})