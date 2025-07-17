import { render,screen } from "@testing-library/react";
import Card ,{withPromoLabel}from "../Card.jsx"
import CardMockData from "../__mocks__/CardMockData.json"
import promotedCardMockData from "../__mocks__/promotedCardMockData.json"
import '@testing-library/jest-dom';

it("should render restaurant card",()=>{
    
    render(
    <Card {...CardMockData}/>
)
    const name=screen.getByText("Theobroma");
    expect(name).toBeInTheDocument
}),
it("should render restaurant card with promo lable",()=>{
    const RestaurantCardPromoted=withPromoLabel(Card);
    promotedCardMockData.promoted?(
        render(
            <RestaurantCardPromoted {...promotedCardMockData}/>)
        ):(
        render(
            <Card {...promotedCardMockData}/>)
       )
            
    const name=screen.getByText("Promoted");
    expect(name).toBeInTheDocument
})

