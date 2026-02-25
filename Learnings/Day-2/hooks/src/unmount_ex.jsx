// import { useEffect } from "react";

// useEffect(() =>{
//     const setid = setTimeout(() =>{
//         console.log("Running....")
//     }, 3000);

//     return () => {
//         clearTimeout(setid);
//     }
// }, []);

//using class components

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : Number(localStorage.getItem("count") || 0)
        }
    }

    componentDidMount() {
        console.log("component Mounted");
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem("count", this.state.count);
            console.log("component updated")
        }
    }

    componentWillUnmount(){
        console.log("component unmounted");
    }

     render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>

        <button
          onClick={() => this.setState({ count: this.state.count - 1 })}
          disabled={this.state.count === 0}
        >
          -
        </button>

        <button onClick={() => this.setState({ count: 0 })}>
          Reset
        </button>
      </div>
    );
  }
}