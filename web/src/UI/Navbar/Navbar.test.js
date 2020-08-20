import React from "react";
import { shallow } from 'enzyme';
import { Navbar } from "./Navbar";
import { findByTestAttr, checkProps, configProps } from "../../helpers/testUtils";
import './../../configs/setupTests'

const defaultProps = { title: '', onClick: () => {}}

const shallowComponent = (props={}) => {
    const setupProps = configProps(defaultProps, props);
    return shallow(<Navbar {...setupProps}/>)
}

test('render component without error', () => {
    const wrapper = shallowComponent();
    const component = findByTestAttr(wrapper, 'component-navbar');
    expect(component.length).toBe(1);
})

test('displaying title in navbar', () => {
    const title = "miageConnexion";
    const wrapper = shallowComponent({ title })
    const titleText = findByTestAttr(wrapper, 'title-text').text();
    expect(titleText).toContain(title)
});

test('check navbar props', () => {
    const expectedProps = { title: '', onClick: () => {}}
    const propsError = checkProps(Navbar, expectedProps)
    expect(propsError).toBeUndefined();
})