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
    </Aux>
);

export default layout;