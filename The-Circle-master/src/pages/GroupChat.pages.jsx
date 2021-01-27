import React,{useEffect,useState} from 'react';
import io from "socket.io-client"
let socket;
const GroupChat = () => {
    useEffect(() =>{
        //
        socket=io("http://localhost:3002");
        console.log(socket,"socket")
        socket.on('trial', ()=>{
            alert('Hello');
        });
        return socket.disconnect
    }, []);
    return ( 
        <div className="">
            <h1>Group Chat</h1>
        </div>
     );
}
 
export default GroupChat;