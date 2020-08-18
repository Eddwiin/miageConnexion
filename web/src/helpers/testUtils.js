import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from './../stores/reducers';

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