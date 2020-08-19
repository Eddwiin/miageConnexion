import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { findByTestAttr, storeFactory } from '../../../helpers/testUtils';
import './../../../configs/setupTests';

const defaultProps = {
    loadNavbar: jest.fn(() => { })
}

const setup = (props = {}, state = {}) => {
    const store = storeFactory(state);
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Login store={store} {...setupProps} />).dive();
}

describe('Render login component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    })

    test('Login component is present', () => {
        const component = findByTestAttr(wrapper, 'component-login');
        expect(component.length).toBe(1)
    })

    test('Email input is present', () => {
        const emailInput = findByTestAttr(wrapper, 'email-input');
        expect(emailInput.length).toBe(1)
    })

    test('Password input is present', () => {
        const passwordInput = findByTestAttr(wrapper, 'password-input');
        expect(passwordInput.length).toBe(1)
    })

    test(' Navbar function is called', () => {
        const store = storeFactory({});
        const setupProps = { ...defaultProps };
        const test = shallow(<Login store={store} {...setupProps} />).dive();
        console.log(test.snapchot);
    })
})