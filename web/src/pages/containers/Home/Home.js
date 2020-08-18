import React from 'react';

const Home = ({ loadNavbar }) => {
    return (
        <div>
            {loadNavbar()}
            Home Container
        </div>
    )
}

export default Home;