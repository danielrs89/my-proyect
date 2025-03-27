import { render } from "@testing-library/react";
import HomePage from "./HomePage"
import { UserProviderWrapper } from "../contexts/user.context";
import { MemoryRouter } from "react-router-dom";
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe("HomePage", () => {
    // comprueba que la conf esta ok
    it("simple test", () => {
        expect(1).toEqual(1);
    })

    it("home page", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <UserProviderWrapper>
                    <HomePage />
                </UserProviderWrapper>
            </MemoryRouter>
        )

        const homePageTitle = getByTestId("homepage-title").textContent
        expect(homePageTitle).toEqual("HomePage");
    })
})