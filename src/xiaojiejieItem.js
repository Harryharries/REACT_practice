import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {};
    }
     
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content)
        {
            return true;
        }else{
            return false;
        }
    }
    componentDidMount(){
        //axios.post();
    }
    


    render() { 
        console.log("child-render")
        return ( 
        <li onClick={this.handleClick}>{this.props.content}</li>
         );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem:PropTypes.func
}
 
export default XiaojiejieItem;