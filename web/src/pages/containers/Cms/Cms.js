import React from 'react';

const Cms = ({ loadNavbar }) => {
    return (
        <div>
            {loadNavbar()}
            CMS Container
        </div>
    )
}

export default Cms;