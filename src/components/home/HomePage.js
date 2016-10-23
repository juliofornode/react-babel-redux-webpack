import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Administration Panel</h1>
                <p>React and Redux</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>

        );
    }
}

export default HomePage;