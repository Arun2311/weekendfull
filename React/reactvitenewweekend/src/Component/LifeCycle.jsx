import React, { Component } from "react";

class LifeCycle extends Component {
  state = {
    apidata: [],
  };

  componentDidMount() {
    localStorage.setItem("name" , "aruna")
    this.handlefetch();
  }

  handlefetch = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    this.setState({ apidata: data });
  };


  componentWillUnmount (){
    localStorage.removeItem("name")

    console.log("componentWillUnmount");
  }

  render() {
    return (
      <>
        <h1>Life</h1>


        {this.state.apidata.map((da) => (
          <div key={da.id}>
            <img height="200px" width="200px" src={da.image} />
            <h1>{da.title}</h1>
            <h3>{da.price}</h3>
          </div>
        ))}
        
      </>


    );
  }
}

export default LifeCycle;
