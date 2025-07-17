import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import Mock_Data from "../__mocks__/mockResList.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock the global fetch function
//trying to fake api calls
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(Mock_Data),
    })
);



it("should update resList for burger ", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
    );
    });
    const cardsBefore=screen.getAllByTestId("resCard"); 
    expect(cardsBefore.length).toBe(25);
    const srchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput=screen.getByTestId("search-id");
    fireEvent.change(searchInput,{target:{value:"burger"}});
    fireEvent.click(srchBtn)
    const cardsAfterSrch=screen.getAllByTestId("resCard");
    expect(cardsAfterSrch.length).toBe(3);
});

it("should update resList for top Res ", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
    );
    });
    const cardsBefore=screen.getAllByTestId("resCard"); 
    expect(cardsBefore.length).toBe(25);
    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(topRatedBtn)
    const topRatedRes=screen.getAllByTestId("resCard");
    expect(topRatedRes.length).toBe(2);
});

