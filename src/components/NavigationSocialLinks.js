import React, { Component } from 'react';


function NavigationSocialLinks(props){
    return(
        <a href={props.link}> {props.title}</a>
    );
}


export default NavigationSocialLinks;
