import { render, screen } from '@testing-library/react'
import Contact from '../Contact'
import '@testing-library/jest-dom'

test("Should load contack us component" , () => {
    render(<Contact/>)

    const heading = screen.getByRole('heading');

    // Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact  component" , () => {
    render(<Contact/>)

    const button = screen.getByRole('button');
    // const button = screen.getByText('Submit');

    // Assertion
    expect(button).toBeInTheDocument();
});

test("Should input button inside contact  component" , () => {
    render(<Contact/>)

    const input = screen.getByPlaceholderText('name');

    // Assertion
    expect(input).toBeInTheDocument();
})

test("Should load 2 input boxes on the contact component" , () => {
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole('textbox');
    console.log(inputBoxes.length)
    // console.log(inputBoxes[0])

    // Assertion
    expect(inputBoxes.length).toBe(2);
})
