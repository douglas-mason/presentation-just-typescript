import React from 'react';
import {css} from 'emotion';

export const Logo = (props) => (
  <div className={props.fixed ? css({position: 'absolute', top: 10, left: 10 }) : null}>
    <img width={props.size} height={props.size} src="./assets/parsed-logo.png"/>
    <span className={css({fontSize: props.textSize || "30px", verticalAlign: 'top', marginLeft: 10})} >Parsed</span>
  </div>
);