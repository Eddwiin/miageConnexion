import React from 'react';
import { Link } from 'react-router-dom';

const errorTemplates = {
    padding: "40px 15px",
    textAlign: "center",
}

const errorActions = {
    marginTop: "15px",
    marginBottom: "15px"
}

const Error404Component = () => (

                <div style={errorTemplates}>
                    <h1>Oops!</h1>
                    <h2>404 Not Found</h2>
                    <div style={errorActions}>
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div className="error-actions">
                        <Link to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home</Link>
                    </div>
                </div>

);

export default Error404Component;