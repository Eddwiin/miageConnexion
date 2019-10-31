import React  from "react";
import Aux from '../../hoc/Helper';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        <div>
            <Toolbar/> 
        </div> 
    <main>
        {props.children}
    </main>
    <footer>
        <div>
            <h3>Footer</h3>
        </div>
    </footer>
    </Aux>
);

export default layout;