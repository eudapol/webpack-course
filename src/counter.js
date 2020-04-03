import React from 'react';
import Styles from './main.css';
import {css} from 'emotion';

import styled from '@emotion/styled'

const red = "#f00";

const className = css`
 color : ${red};
 font-size : 6em;
`; 

const Fancy = styled.h1`
    color:${props => props.wild ? 'hotpink' : 'turquoise'};
`; 

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 1
        }
    }

    climb(){
        this.setState({
            counter : this.state.counter + 1
        });
    }

    render(){
        const isWild = this.state.counter % 2 === 0; 
        return (
             <div className={Styles.counter} onClick={this.climb.bind(this)}>
                 <Fancy wild={isWild}>Counting: {this.state.counter} </Fancy>
            </div>);
        
    }


}