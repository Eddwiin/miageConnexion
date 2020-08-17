import checkPropTypes from 'check-prop-types';

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

    expect(propError).toBeUndefined();
}