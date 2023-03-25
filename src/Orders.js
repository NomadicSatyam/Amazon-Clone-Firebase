import React,{useState,useEffect} from 'react';
import './Orders.css';
import {db} from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from './Order';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    orderBy,
    query,
    onSnapshot
  } from "firebase/firestore";


function Orders(){
    const [{basket,user},dispatch]=useStateValue();
    const [orders,setOrders]=useState([])

    useEffect(() => {
        if (user) {
            const q = query(
              collection(db, "users", user.uid, "orders"),
              orderBy("created", "desc")
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
              setOrders(
                querySnapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
              );
            });
      
            return () => {
              unsubscribe();
            };
          } else {
            setOrders([]);
          }

    },[user])
    

    return(
        <div className='orders'>
            <h1>Your Orders</h1>
        
        <div className='orders__order'>
            {orders?.map(order =>(
                <Order order={order} />
            ))}

        </div>
        </div>
    )
}
export default Orders;
