import React from 'react';
import { configProps, mountRouter } from '../../../helpers/testUtils';
import { mount } from 'enzyme';
import { UnconnectedLogout } from './Logout';
import './../../../configs/setupTests';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SETUP_ROUTES from '../../../configs/setupRoutes';
import Home from './../../containers/Home/Home';

const defaultProps = {
    onLogout: jest.fn()
}

describe('<Logout />', () => {

    test('onLogout function must be called in useEffect', () => {
        const wrapper = mountRouter(() => (
            <React.Fragment>
                <UnconnectedLogout {...defaultProps} />
            </React.Fragment>
        ))
        expect(wrapper.find(UnconnectedLogout).props().onLogout).toHaveBeenCalledTimes(1);
    })

    test('Test redirection to home', () => {
        const wrapper = mountRouter(() => (
            <React.Fragment>
                <Route path={SETUP_ROUTES.HOME} render={() => <Home loadNavbar={jest.fn()} />} />
                <UnconnectedLogout {...defaultProps} />
            </React.Fragment>
        ))

        expect(wrapper.find(Home)).toHaveLength(1);
    })

})