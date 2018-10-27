import React, {Component} from 'react';
import NavigationBar from './navbar';

class home extends Component {
    render() {
        return (
            <div>
            	<NavigationBar />
                <p>Hello Home!</p>
            </div>
        );
    }
};

export default home;
