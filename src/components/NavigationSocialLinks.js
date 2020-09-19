import React from 'react';


function NavigationSocialLinks(props){
    return(
        <a
            href={props.link}
            target='_blank'
            style={{color:'white'}}
        >
            {props.title}
        </a>
    );
}


export default NavigationSocialLinks;
