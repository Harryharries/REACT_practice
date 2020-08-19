import React,{Component,Fragment} from 'react'
import XiaojiejieItem from './xiaojiejieItem'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'harry',
            list:['1','2']
        }
    }

    render(){
        return(
            <Fragment>
                <div>
                    <input 
                    value={this.state.inputValue} 
                    onChange={this.setinput.bind(this)}
                    ref = {(input)=>(this.input=input)}/> 
                <button onClick={this.addlist.bind(this)}>add service</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item, index)=>{
                            return (
                                        <XiaojiejieItem content={item} index={index} key={index+item} 
                                        deleteItem={this.deleteItem.bind(this)}></XiaojiejieItem>

  
                                )
                        })
                    }
                </ul>
            </Fragment>
        )
        
    }

    setinput(e){
        this.setState({
            //inputValue: e.target.value
            inputValue: this.input.value
        })
    }

    addlist(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })

    }

    deleteItem(index,e){
        let newlist = this.state.list;
        newlist.splice(index,1);
        this.setState({
            list:newlist
        })
    }
}
export default Xiaojiejie;