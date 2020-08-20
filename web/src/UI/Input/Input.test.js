import React from 'react';
import { shallow } from 'enzyme';
import { Input } from './Input';
import { findByTestAttr, checkProps, configProps } from '../../helpers/testUtils';
import './../../configs/setupTests';

const defaultProps = {
    name: '',
    inputStyle: {},
    placeholder: '',
    type: 'text',
    autoComplete: "off",
    register: undefined,
    errorsTemplate: undefined,
    value: Object,
    onChange: () => { }
}

const shallowComponent = (props = {}) => {
    const setupProps = configProps(defaultProps, props);
    return shallow(<Input {...setupProps} />)
}

describe('Render without error', () => {
    test('Input component render without error', () => {
        const wrapper = shallowComponent();
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1)
    })

    test('Do not load error message when input is valid', () => {
        const wrapper = shallowComponent()
        const errorMessage = findByTestAttr(wrapper, 'error-message')
        expect(errorMessage.length).toBe(0);
    })

    test('Load error message when input is invalid', () => {
        const wrapper = shallowComponent({ errorsTemplate: {} })
        const errorMessage = findByTestAttr(wrapper, 'error-message')
        expect(errorMessage.length).toBe(1);
    })

})

describe('Check props', () => {
    test('Test that the props is correct', () => {
        const expectedProps = {...defaultProps, ...{name: 'test', value: 'test', onChange: () => {}}};
        const propsError = checkProps(Input, expectedProps)
        expect(propsError).toBeUndefined();
    })

    test('Test that the props is not correct when user doesn\'t pass name', () => {
        const notExpectedProps = {...defaultProps, ...{name: undefined, value: 'test', onChange: () => {}}};
        const propsError = checkProps(Input, notExpectedProps)
        expect(propsError).not.toBeUndefined();
    })

    test('Test that the props is not correct when user doesn\'t pass value', () => {
        const notExpectedProps = {...defaultProps, ...{name: 'test', value: undefined, onChange: () => {}}};
        const propsError = checkProps(Input, notExpectedProps)
        expect(propsError).not.toBeUndefined();
    })

    test('Test that the props is not correct when user doesn\'t pass onChange function', () => {
        const notExpectedProps = {...defaultProps, ...{name: 'test', value: 'value', onChange: undefined }};
        const propsError = checkProps(Input, notExpectedProps)
        expect(propsError).not.toBeUndefined();
    })

    test('Test that there is an error when the user types something other than `on` or `off` for autocomplete ', () => {
        const notExpectedProps = {...defaultProps, ...{autoComplete: 'not valid'}}
        const propsError = checkProps(Input, notExpectedProps);
        expect(propsError).not.toBeUndefined();
    })
})

