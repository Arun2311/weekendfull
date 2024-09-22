// import React, { Component } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import AddTicket from "./Component/AddTicket";
// import LifeCycle from "./Component/LifeCycle";
// import CounterComp from "./Component/FunComp/CounterComp";
// import ApiCall from "./Component/FunComp/ApiCall";
// import ApiCallTwo from "./Component/FunComp/ApiCallTwo";
// import FormWithReact from "./Component/FormWithReact";
// import FormWithReactHookForm from "./Component/FunComp/FormWithReactHookForm";
// import SelectDrop from "./Component/FunComp/SelectDrop";
// import { Routes, Route, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import CounterContext from "./Component/FunComp/CounterContext";
// import { CartProvider } from "./context/CartContextApi";
// import TestComp from "./Component/FunComp/TestComp";
// import CounterRedux from "./Component/FunComp/CounterRedux";
// import TestRedux from "./Component/FunComp/TestRedux";

// export default class App extends Component {
//   state = {
//     ishide: true,
//   };

//   handlehide = () => {
//     this.setState({ ishide: !this.state.ishide });
//   };



//   render() {
//     return (
//       <div>
//         {/* {this.state.ishide ?   <LifeCycle/> :null} */}

//         {/* <button onClick={this.handlehide}>Hide</button> */}
//         {/* <AddTicket/> */}

//         {/* <CounterComp/> */}
//         {/* <FormWithReact/> */}

//         {/* <ApiCall/> */}
//         {/* 
// <div className="m-4">

//         <Link to="/">
//         <span className="m-2">Home</span>
         
//          </Link>
//         <Link to="/form" > 
//         <span className="m-2">form</span>
//         </Link>

//         <Link   to="/select" > 
//         <span className="m-2">select</span>
        
//         </Link>
//         </div> */}

//         {/* <Routes>
//           <Route path="/" element={<ApiCallTwo />} />
//           <Route path="/form" element={<FormWithReactHookForm />} />

//           <Route path="/select" element={<SelectDrop />} />
//         </Routes> */}

//         {/* <h1>Arun</h1> */}

//         {/* <CartProvider> */}

//         {/* <CounterContext /> 
//         <TestComp/> */}
// {/* <CounterRedux/> */}

// {/* <TestRedux/> */}

//         {/* </CartProvider> */}

// {/* <PerformanceComp/> */}

// <TestCode/>

//       </div>
//     );
//   }
// }


import { Suspense } from "react"
import React ,{ useState } from 'react'
import ApiCall from "./Component/FunComp/ApiCall";
import ApiCallTwo from "./Component/FunComp/ApiCallTwo";
import MyComponent from "./Component/FunComp/ReactPdf";

// const LazyComponent =  React.lazy(()=> import("./Component/FunComp/TestCode"))

export default function App() {

  // const [Comp ,setComp] = useState(null)



  // const handlenavclick = async() =>{

  //   const comingComp = await 
  //   setComp(()=>comingComp.default)


  // }

  return (
    <div>
{/* 
<Suspense fallback={<div>Loading</div>}>
<LazyComponent/>


</Suspense> */}


        {/* <ApiCallTwo/> */}

<MyComponent/>





      {/* <TestCode/> */}
{/* {Comp && <Comp />} */}
      {/* <button onClick={handlenavclick}>about</button> */}
    </div>
  )
}
