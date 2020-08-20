import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, configState, configProps } from '../../../helpers/testUtils';
import './../../../configs/setupTests';
import { UnconnectedLogin } from './Login';
import MutationObserver from 'mutation-observer'
global.MutationObserver = MutationObserver;

const defaultProps = {
    loadNavbar: jest.fn(() => { })
}

const mountComponent = (props = {}, state = {}) => {
    const store = configState(state);
    const setupProps = configProps(defaultProps, props);
    return mount(<UnconnectedLogin store={store} {...setupProps} />);
}

const shallowComponent = (props = {}, state = {}) => {
    const store = configState(state);
    const setupProps = configProps(defaultProps, props);
    return shallow(<UnconnectedLogin store={store} {...setupProps} />);
}

describe('Render', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mountComponent();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Render login component successfully ', () => {
        const loginForm = findByTestAttr(wrapper, 'form-login');
        expect(loginForm.length).toBe(1)
    })

    test('Navbar loaded', () => {
        expect(wrapper.props().loadNavbar.mock.calls.length).toBe(1);
    })

    test('Email input component is present', () => {
        const emailComponent = findByTestAttr(wrapper, 'email-input');
        expect(emailComponent.length).toBe(1)
    })

    test('Password input component is present', () => {
        const passwordComponent = findByTestAttr(wrapper, 'password-input');
        expect(passwordComponent.length).toBe(1)
    })

    test('Button component is present', () => {
        const buttonComponent = findByTestAttr(wrapper, 'button-form');
        expect(buttonComponent.length).toBe(1)
    })

})

describe('Form validation', () => {

    let wrapper;
    const mockSetState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, mockSetState])

    beforeEach(() => {
        wrapper = shallowComponent();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('State of email input upon change', () => {
        const emailInput = findByTestAttr(wrapper, 'email-input');
        const value = "Edouard";
        const mockEvent = { target: { value } };
        emailInput.simulate("change", mockEvent);

        expect(mockSetState).toHaveBeenCalledWith(value)
    })

    test('State of password input upon change', () => {
        const passwordInput = findByTestAttr(wrapper, 'password-input');
        const value = "azerrty58785";
        const mockEvent = { target: { value } };
        passwordInput.simulate("change", mockEvent);

        expect(mockSetState).toHaveBeenCalledWith(value)
    })

    test('Error messages hidden when user doesn\'t click on submit button', () => {
        const errorMessage = findByTestAttr(wrapper, 'error-message');
        expect(errorMessage.length).toBe(0);
    })

    // test('Display error messages when user doesn\'t type any value in input after click on button', () => {
    //     const wrapper = mountComponent();
    //     const buttonForm = findByTestAttr(wrapper, 'component-button');
    //     buttonForm.simulate('click');
    //     const errorMessage = findByTestAttr(wrapper, 'error-message')
    //     console.log(errorMessage.debug())
    // })
})