import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import BoxList from './BoxList';

//smoke test
it('renders without crashing', function() {
    render(<BoxList />);
});

//snapshot test
it('matches snapshot', function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot;
});

it("can add a new box", function() {
    const { getByLabelText, queryByText } = render(<BoxList />);
  
    // no boxes yet
    expect(queryByText("X")).not.toBeInTheDocument();
  
    const colorInput = getByLabelText("Background Color:");
    const heightInput = getByLabelText("Height:");
    const widthInput = getByLabelText("Width:");
    const submitBtn = queryByText("Add a Box")
  
    // fill out the form
    fireEvent.change(colorInput, { target: { value: "blue" }});
    fireEvent.change(heightInput, { target: { value: '100' }});
    fireEvent.change(widthInput, { target: { value: '100' }});
    fireEvent.click(submitBtn);
  
    // box exists!
    expect(queryByText("X")).toBeInTheDocument();
  });