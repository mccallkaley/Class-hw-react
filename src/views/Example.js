import React, { Component } from 'react'

export default class Example extends Component {
    constructor(){
        super();
        this.state={
            name:'Pika',
            students:["Anu","McCall","Christina","Tim","Mike","David"]
        }
        console.log("In Constructor")
    }

    componentDidMount(){
        console.log("In Component Did Mount")
    }

    componentDidUpdate(){
        console.log("In Component Did Update")
    }

    componentWillUnmount(){
        console.log("in Component will Unmount")
    }

    render() {
        const styles={
            button:{
                backgroundColor:'blue',
                color: 'white'
            },
            text:{
                color:'green',
                backgroundColor: 'yellow'
            }
        }
        const handleSetName=(input_name)=>{
            this.setState({name:input_name}, ()=>console.log(`State has been changed now the name is: ${this.state.name}}`))
            console.log("Log the name after I do setState", this.state.name)
        }
        return (
            <div>
                {console.log("in render")}
                {this.state.name === 'Pika' ? `Lets play a game ${this.state.name}` : `Did I scare you ${this.state.name}?`}
                <br/>
                <span style={styles.text}>The name is {this.state.name}</span>
                <br/>
                <button onClick={()=>handleSetName('Boo')} style={styles.button}>Set name to "Boo"</button>
                <button onClick={()=>handleSetName('Pika')} style={styles.button}>Set name to "Pika"</button>
                <div style={{backgroundColor:'red', color:'green', marginTop:'60px'}}>
                    Display a new list element for every item in an array
                </div>
                <ul>
                    {this.state.students.map((student, index)=><li key={index}>{student}</li>)}
                </ul>
            </div>
        )
    }
}
//hey we have a list of students for each I want you to return this jsx line
//((student, index)) for every one I want to display a new list item give key prop to outer list element
// then student you are mapping over then close tag
// . map gives us the position student and second thing, index name
//then arrow func and it will return jsx code <li></li> put students name in here
// <li>{student}</li>
// map the most outter element needs a key so key={index} generally you use an id
//this.state you are working with LISTS!!!!
// {this.state.name === 'Pika'}  If name is = Pika then you want the name
// INLINE STYLE you need to use CAMEL CASE backgroundColor: 'red' making an object with backrounf
//color key  of red 



