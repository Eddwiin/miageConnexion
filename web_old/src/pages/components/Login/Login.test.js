import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, configState, configProps } from '../../../helpers/testUtils';
import './../../../configs/setupTests';
import { UnconnectedLogin } from './Login';
import MutationObserver from 'mutation-observer'
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

global.MutationObserver = MutationObserver;

const defaultProps = {
    loadNavbar: jest.fn(() => { }),
    onAuth: jest.fn(() => { })
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

    test('Error messages don\'t display', () => {
        const errorMessages = findByTestAttr(wrapper, 'error-message');
        expect(errorMessages.length).toBe(0);
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

    // test('User authentication was successful after completing the form correctly', async () => {
    //     render(<UnconnectedLogin loadNavbar={jest.fn(() => {})} onAuth={jest.fn(() => {})} />)
    //     fireEvent.submit(screen.getByRole("button"))
    //     expect(await screen.findAllByRole("error-message")).toHaveLength(2);

    // })

    test('User authentication was successful after completing the form correctly', async () => {
        wrapper = mountComponent();
        const mockOnAuth = jest.fn(() => { });
        const spy = jest.spyOn(wrapper.props(), 'onAuth');
        spy.mockImplementation(() => mockOnAuth);

        const emailInput = findByTestAttr(wrapper, 'email-input');
        emailInput.simulate("change", { target: { value: 'test@test.com' } })
        const passwordInput = findByTestAttr(wrapper, 'password-input');
        passwordInput.simulate("change", { target: { value: 'test12358er' } });

    })

    test('User authentication wasn\'t successfully filling the form', async () => {
        const wrapper = mountComponent();
        const mockOnAuth = jest.fn(() => { });
        const spy = jest.spyOn(wrapper.props(), 'onAuth')
        spy.mockImplementation(() => mockOnAuth);

        const formLogin = findByTestAttr(wrapper, 'form-login');
        formLogin.simulate("submit");
        const errorMessages = await findByTestAttr(wrapper, 'error-message');
        expect(await mockOnAuth).not.toHaveBeenCalled()

    })
})