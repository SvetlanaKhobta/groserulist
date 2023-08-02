import { Component } from "react";
import check from './bag.png'

export class GroseryList extends Component{
    state = {
       userInput: "",
       groseryList: []
    }
    onChangeEvent(e){
       this.setState({userInput: e})
    }
    addItem(input){
        if(input === ''){
            alert("Please enter an item")
        }
        else{
        let listArray = this.state.groseryList;
        listArray.push(input);
        this.setState({groseryList: listArray, userInput: '' })
       
    }}
    deleteItem(){
        let listArray = this.state.groseryList;
        listArray = [];
        this.setState({groseryList: listArray})   
    }
    crossedWord(event){
        const li = event.target;
        li.classList.toggle("crossed");
    }
    onFormSubmit(e){
        e.preventDefault();

    }
render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className="container">
            <input type="text" 
            placeholder="What to you want a buy today?"
            onChange={(e) => {this.onChangeEvent(e.target.value)} }
            value={this.state.userInput}/>
        </div>
        <div className="container">
            <button onClick={() => this.addItem(this.state.userInput)} className="add">ADD</button>
        </div>
        <ul>
            {this.state.groseryList.map((item, index) => (
                <li onClick={ this.crossedWord} key = {index}>
                    <img src = {check} width = '20px' alt="box" />
                    {item}
                    
                </li>
            ))}
            
        </ul>
        <div className="container">
        <button onClick={() => this.deleteItem()} className="delete">Delete</button>
        </div>
        </form>
        </div>
    )
}
}