import { fireEvent, render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import appStore from "../../store/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
it("should render header componenet with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>    
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const login=screen.getByRole("button")
    expect(login).toBeInTheDocument();
}),
it("should render header componenet with a 0 cart items button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>    
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartItems=screen.getByText("Cart - (0 items)")
    expect(cartItems).toBeInTheDocument();
}),
it("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>    
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton=screen.getByRole('button',{name:"LOGIN"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button',{name:"LOGOUT"});
    expect(logoutButton).toBeInTheDocument();

})