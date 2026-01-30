import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count : 0}
    }

    componentDidMount(){
        console.log("Mounted")
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log("Updated")
        }
    }

    componentWillUnmount(){
        console.log("Unmounted")
    }

    render(){
        return(
            <button onClick={() => this.setState({ count:this.state.count + 1 })}>
                count:{this.state.count}
            </button>
        );
    }

}

export default Counter;