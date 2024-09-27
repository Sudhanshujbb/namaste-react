import { fireEvent, render, screen} from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../src/components/Header"
import appStore from "../src/store/appStore"
import "@testing-library/jest-dom"

test("Should Render Login Button", ()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header/>
          </Provider>  
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
    
})

test("Should Render Cart", ()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header/>
          </Provider>  
        </BrowserRouter>
    )

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
    
})
test("Should Render Cart", ()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header/>
          </Provider>  
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
    
})