import React from 'react';
import { UnconnectedApp } from './App';
import { mount, shallow } from 'enzyme';
import { findByTestAttr, configProps } from '../helpers/testUtils';
import './../configs/setupTests';

const defaultProps = {
  checkIsAuthentified: jest.fn(),
  isAuthentified: false
}

const mountComponent = (props = {}) => {
  const setupProps = configProps(defaultProps, props);
  return mount(<UnconnectedApp {...setupProps} />)
}

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountComponent();
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('App render without error', () => {
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.length).toBe(1);
  })

  test('checkIsAuthentified must be call to load routes', () => {
    expect(wrapper.props().checkIsAuthentified).toHaveBeenCalled()
  })
})

describe('Render app when user unlogged', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountComponent();
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('Test routes for user unlogged have loaded', () => {
    const routesUnLogged = findByTestAttr(wrapper, 'routes-unlogged')
    expect(routesUnLogged.length).toBe(1)
  })

  test('Test routes for user logged haven\t loaded', () => {
    const routesLogged = findByTestAttr(wrapper, 'routes-logged')
    expect(routesLogged.length).toBe(0)
  })

  test('Test navbar for user unlogged has loaded', () => {
    const navbar = findByTestAttr(wrapper, 'navbar-unlogged');
    expect(navbar.length).toBe(1);
  })

  test('Test navbar for user logged hasn\'t loaded', () => {
    const navbar = findByTestAttr(wrapper, 'navbar-logged');
    expect(navbar.length).toBe(0);
  })
})

describe('Render app when user logged', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mountComponent({ isAuthentified: true })
  })

  test('Test routes for user unlogged haven\'t loaded', () => {
    const routesUnLogged = findByTestAttr(wrapper, 'routes-unlogged')
    expect(routesUnLogged.length).toBe(0)
  })

  test('Test routes for user logged have loaded', () => {
    const routesLogged = findByTestAttr(wrapper, 'routes-logged')
    expect(routesLogged.length).toBe(1)
  })

  test('Test navbar for user unlogged hasn\'t loaded', () => {
    const navbar = findByTestAttr(wrapper, 'navbar-unlogged');
    expect(navbar.length).toBe(0);
  })

  test('Test navbar for user logged has loaded', async () => {
    const navbar = await findByTestAttr(wrapper, 'navbar-logged');
    await expect(navbar.length).toBe(1);
  })
})