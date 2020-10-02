import React, { Component } from 'react';


import NavigationSocialLinks from '../components/NavigationSocialLinks'

class Footer extends Component {
    render() {
        return(

            <div className = "endContainer">
                <ul className = "navSocialBar">
                    <li><NavigationSocialLinks link = "https://www.instagram.com/" target="_blank" title = "Instagram"/></li>
                    <li><NavigationSocialLinks link = "https://twitter.com/sofiarom_00" target="_blank" title = "Twitter"/></li>
                    <li><NavigationSocialLinks link = "https://github.com/sofiarm21" target="_blank" title = "Github"/></li>
                    <li><NavigationSocialLinks link = "mailto:sofiaromorales@gmail.com" title = "Email"/></li>
                </ul>
            </div>

        );
    }
}

export default Footer
