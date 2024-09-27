import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import { Provider } from "react-redux"
import appStore from "../src/store/appStore"
import { BrowserRouter } from "react-router-dom"
import RestaurantDetails from "../src/components/RestaurantDetails"
import Cart from "../src/components/Cart"
import Header from "../src/components/Header"
import MOCK_DATA from "../mocks/ResDetails.json"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=> 
    Promise.resolve(
       {json: ()=> Promise.resolve(MOCK_DATA)}
    )
)

test("Check Add to Cart Functionality", async()=>{
    await act(async()=>{
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <RestaurantDetails/>
                    <Header/>
                    <Cart/>
                </BrowserRouter>
            </Provider>
        )
    })

    const accohead = screen.getByText("Recommended (11)");
    fireEvent.click(accohead);
    fireEvent.click(screen.getAllByText("ADD +")[0]);
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
    expect(screen.getAllByTestId("item-card").length).toBe(12);
})