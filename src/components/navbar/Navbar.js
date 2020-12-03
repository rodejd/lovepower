import React, {Component} from "react";
import "bootstrap";
import Button from 'react-bootstrap/Button';


class Navbar extends Component{

    render() {
        return(
            <div>
                <div className="container">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                </div>
            </div>
        )
    }


}

export default Navbar;