import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer>
                 <nav>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Conditions</a>
                 </nav>
                    
                <div className="text-center small copyright">
                © iTrain 2019
                </div>
            </footer>
        )
    }
}

export default Footer;
