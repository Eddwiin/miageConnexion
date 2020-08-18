import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';
import { findByTestAttr, checkProps } from '../../helpers/testUtils';
import './../../configs/setupTests';

const defaultProps = {
    label: '',
    color: 'primary',
    btnStyle: {},
    type: 'submit'
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Button {...setupProps} />)
}

describe('Render without error', () => {
    test('Button render without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-button');
        expect(component.length).toBe(1)
    });

    test('Label for button is correct', () => {
        const label = "MyButton";
        const wrapper = setup({ label })
        const component = findByTestAttr(wrapper, 'component-button');
        expect(component.text()).toContain(label);
    })
})

describe('Check props', () => {
    test('Test that props is correct', () => {
        const expectedProps = { label: 'Test' }
        const propsError = checkProps(Button, expectedProps);
        expect(propsError).toBeUndefined();
    })

    test('Test error when user not pass label', () => {
        const expectedProps = { label: undefined }
        const propsError = checkProps(Button, expectedProps);
        expect(propsError).not.toBeUndefined();
    })

    test('Test error when user not pass correct name for button class', () => {
        const expectedProps = { color: 'anything' }
        const propsError = checkProps(Button, expectedProps);
        expect(propsError).not.toBeUndefined();
    })
})