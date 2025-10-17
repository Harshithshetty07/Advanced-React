import { fireEvent, render, screen} from '@testing-library/react'
import Body from '../Body'
import MOCK_DATA from '../../components/mocks/mockResListData.json'
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});

test('Should Search Res List for buger text input', async() => {
    
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () =>
         render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole('button', {name: 'Search'})
    const searchInput = screen.getByTestId('searchInput');

    fireEvent.change(searchInput, {target: {value: "burger"}});

    fireEvent.click(searchBtn);


    // screen should be load 4 res cards
    const cardsAfterSearch = screen.getAllByTestId("resCard")
    expect(cardsAfterSearch.length).toBe(1)
    
})

test('Should filter Top rated for Res cards', async() => {
    
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () =>
         render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    ))


    const topRatedBeforeFilter = screen.getAllByTestId("resCard");
    expect(topRatedBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole('button', {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const topRatedAfterFilter = screen.getAllByTestId('resCard')
    expect(topRatedAfterFilter.length).toBe(8);

})