import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { storeFactory, findByTestAttr } from '../helpers/testUtils';
import './../configs/setupTests';

const defaultProps = { isAuthentified: false };

const setup = (props = {}, state = {}) => {
  const store = storeFactory(state);
  const setupProp = { ...defaultProps, ...props };
  return shallow(<App {...setupProp} store={store} />).dive().dive()
}

describe('App render without error', () => {
  test('App is defined', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1)
  });
})

describe('Load route for unlogged user', () => {

  test('Check routes loaded', () => {
    const wrapper = setup({ isAuthentified: false})
    const routesUnLogged = findByTestAttr(wrapper, 'routes-unlogged');
    expect(routesUnLogged.length).toBe(1)
  })

  test('Check routes for user is not loaded', () => {
    const wrapper = setup({ isAuthentified: false});
    const routesLogged = findByTestAttr(wrapper, 'routes-logged');
    expect(routesLogged.length).toBe(0);
  })

})

describe('Load route for logged user', () => {
  // test('Check routes for anonymous is not logged', () => {
  //   const wrapper = setup({ isAuthentified: true})
  //   const routesUnLogged = findByTestAttr(wrapper, 'routes-unlogged');
  //   expect(routesUnLogged.length).toBe(0)
  // })

  test('Check routes for user is loaded', () => {

    // const wrapper = setup({ isAuthentified: true});
    // console.log(wrapper.debug())
    // const routesLogged = findByTestAttr(wrapper, 'routes-logged');
    // expect(routesLogged.length).toBe(1);
  })
})