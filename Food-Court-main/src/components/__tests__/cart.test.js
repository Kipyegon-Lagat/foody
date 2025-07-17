import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react";
import "@testing-library/jest-dom"
import RestaurantMenuPage from "../RestrauntMenuPage";
import { Provider } from "react-redux";
import appStore from "../../store/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import ResMenuMockData from "../__mocks__/ResMenuMockData.json"
import CartPage from "../CartPage"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=> Promise.resolve(ResMenuMockData)
    })
})
//console.log(ResMenuMockData.data.cards[2]?.card?.card?.info);
it("should render restraunt menu content",async()=>{
    await act(async ()=>{
        render(
            <Provider store={appStore}>
                <RestaurantMenuPage/>
            </Provider>
    )
    })
    // make sure your write this outside render wasted 2 hrs😭😭
    // 5-> topPicks ke 
    expect(screen.getAllByTestId("FoodItems").length).toBe(5);
    const Category = await screen.findByText("Jar (20)");
    fireEvent.click(Category);
    // 5-> topPicks ke aur 25 click open list ke 25 
    expect(screen.getAllByTestId("FoodItems").length).toBe(25);
}),
it("should cart items number",async()=>{
    await act(async ()=>{
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>        
                </BrowserRouter>
                <RestaurantMenuPage/>
            </Provider>
    )
    })

    const btns=screen.getAllByRole("button",{name:"ADD"})
    fireEvent.click(btns[0]);
    fireEvent.click(btns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
})

it("should render restraunt menu content",async()=>{
    await act(async ()=>{
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                    <CartPage/>       
                </BrowserRouter>
                <RestaurantMenuPage/>
            </Provider>
    )
    })

    const btns=screen.getAllByRole("button",{name:"ADD"})
    fireEvent.click(btns[0]);
    fireEvent.click(btns[1]);
    fireEvent.click(btns[2]);
    fireEvent.click(btns[3]);
    expect (screen.getAllByTestId('cartItem').length).toBe(6);

    const clrCrtBtn=screen.getByRole("button",{name:"Clear Cart"});
    fireEvent.click(clrCrtBtn);
    const cartItems = screen.queryAllByTestId('cartItem');
    expect(cartItems.length).toBe(0);
})