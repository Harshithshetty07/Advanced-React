import { render, screen } from '@testing-library/react'
import RestaurantCard from '../RestauantCard'
import MOCK_DATA from '../mocks/resCardMockData.json'
import '@testing-library/jest-dom'

it('Should render RestaurantCard component with props data', () => {

    render(<RestaurantCard resData={MOCK_DATA}/>)

    const cardLists = screen.getByText('Asha Sweet Center - Since 1951')
    // const cardLists = screen.getByText('4.7 stars')
    expect(cardLists).toBeInTheDocument()
})