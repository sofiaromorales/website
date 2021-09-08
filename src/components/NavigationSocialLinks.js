import React from 'react';


function NavigationSocialLinks(props){
    return(
        <a className='NavigationSocialLinks' href={props.link} target='_blank'> {props.title}</a>
    );
}


export default NavigationSocialLinks;
