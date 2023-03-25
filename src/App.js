import React ,{useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise=loadStripe(
  'pk_test_51ImUNkSBS17XGbgmrQvmz1yOWsEuEZlB8QobOBa8TIW5cFsweL3OUw6ZaNdbtnKtpf8LE1V9xi7yMKVIQQF9XwlM00QzxfJ5yT');


function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
    // Will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>',authUser);

      if (authUser) {
        // The user just logged in /the user was logged in
      dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        // The User is logged out
        dispatch({
          type:'SET_USER',
          user:null,
        });
      }
    })
  },[])

  return (
    <Router>
    <div className="App">
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home/>} />

    <Route exact path="/checkout" element={<Checkout/>} />
      
    <Route exact path="/login" element={<Login/>} /> 

    <Route exact path="/orders" element={<Orders/>} />  
    
    <Route exact path="/payment" element={<Elements stripe={promise}><Payment/></Elements>} />  
    
    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
