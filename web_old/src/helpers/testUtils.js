import React from 'react';
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from './../stores/reducers';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { mount } from 'enzyme';

export const configState = (state) => storeFactory(state);
export const configProps = (defaultProps, props) => ({ ...defaultProps, ...props });

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, name) => {
    return wrapper.find(`[data-test="${name}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    return propError;
}

export const mountRouter = (routes) => (
    mount(
        <Router history={createBrowserHistory()}>
            <Switch>
                {routes()}
            </Switch>
        </Router>
    )
)
