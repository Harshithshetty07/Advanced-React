import { act,  } from "react-dom/test-utils"
import RestaurantMenu from '../RestaurantMenu';
import { render, screen, fireEvent} from '@testing-library/react';
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import Header from '../Header'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'


global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () =>  Promise.resolve(MOCK_DATA)
    })
})


it('Should load restaurant menu component', async () => {

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        <RestaurantMenu />
        </Provider>
        </BrowserRouter>
        ))

    const accordionHeader = screen.getByText("Breads (4)");
    fireEvent.click(accordionHeader);

    expect (screen.getAllByTestId('foodItems').length).toBe(4);


    const addBtnS = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addBtnS[0])

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

})