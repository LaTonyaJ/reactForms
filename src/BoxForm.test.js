import React from 'react';
import {render} from '@testing-library/react';
import BoxForm from './BoxForm';

//smoke test
it('renders without crashing', function() {
    render(<BoxForm />);
});

//snapshot test
it('matches snapshot', function() {
    const {asFragment} = render(<BoxForm />);
    expect(asFragment()).toMatchSnapshot;
});

