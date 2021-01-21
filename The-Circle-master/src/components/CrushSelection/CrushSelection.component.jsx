import React, { useState,useEffect } from "react";
import "./CrushSelection.styles.css";
import Header from "../Header.component";
import Person from "../Person.component";
import Lonely from "../Lonely.component";
import data from "../data.json";
import axios from "axios";
import styled from "styled-components";
const Card = styled.div`
  height:35rem;
  max-width:30rem;
  border:2px solid #000;
  display:grid;
  place-items:center;
  padding:1rem;
  margin:0 1rem;
  `
  const CardWrapper = styled.div`
  height:100vh;
  widht:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  `
  const UserImg = styled.img`
  max-height:20rem;
  max-widht:20rem;
  height:100%;
  border-radius:100%;
  widht:100%;
  `
  const HobbiesWrapper = styled.div`
  display:flex;
  width:100%;
  margin:1rem;
  flex-wrap:wrap;

  `
  const Hobbies = styled.p`
  background:#666;
  padding:.5rem 3rem;
  font-size:1.1rem;
  margin:.3rem .3rem 0 0;
  border-radius:100px;
  `
  const Description = styled.p`
  widht:100%;
  `

const CrushSelection = ({user}) => {
  const [people , setPeople] = useState([]);
  const [index, setIndex] = useState(0);
  const [peopleDislike , setPeopleDislike] = useState([])
  const [peopleLike , setPeopleLike] = useState([])
  const [currentPerson , setCurrentPerson] = useState(people[index])

  useEffect(() => {
  
      var longitude=0,
      latitude=0;
    navigator.geolocation.getCurrentPosition(position => {
      longitude = position.coords.longitude
      latitude = position.coords.latitude
      console.log(position,position.coords.longitude,position.coords.latitude);
      const data = JSON.stringify({
        name1:user.username,
        longitude1:longitude,
        latitude1:latitude,
      })
      axios({
        method:"post",
        url:"http://localhost:8000/view",
        data
      }).then(resp => {
        const objArr = Object.keys(resp.data);
        const personArr = []
        for(let i = 0 ; i< objArr.length;i++){
         if( resp.data[objArr[i]].name !== user.username){
           personArr.push(resp.data[objArr[i]]);
           console.log(resp.data[objArr[i]])
           
         }
        }
        setPeople(personArr);
        setCurrentPerson(people[0])
        setIndex(0)
      })
   });
  
    // setPeople([
    //   {
    //     img_url:"https://via.placeholder.com/150",
    //     username:"Heet Vakharia",
    //     description:"Sunt nisi nostrud ex ad exercitation ea id mollit mollit occaecat elit. Aliqua incididunt nulla cupidatat est est anim deserunt deserunt tempor officia eiusmod enim ullamco. Do qui nostrud ipsum minim non occaecat pariatur adipisicing elit minim labore. Nisi laboris adipisicing fugiat eu minim deserunt adipisicing duis velit.",
    //     hobbies:["hobby1","hobby2","hobby3","hobby5"]
    //   }
    //   ,{
    //     img_url:"https://via.placeholder.com/150",
    //     username:"Kanthan Vakharia",
    //     description:"Sunt nisi nostrud ex ad exercitation ea id mollit mollit occaecat elit. Aliqua incididunt nulla cupidatat est est anim deserunt deserunt tempor officia eiusmod enim ullamco. Do qui nostrud ipsum minim non occaecat pariatur adipisicing elit minim labore. Nisi laboris adipisicing fugiat eu minim deserunt adipisicing duis velit.",
    //     hobbies:["hobby1",,"hobby3","hobby4","hobby5"]
    //   }
    //   ,{
    //     img_url:"https://via.placeholder.com/150",
    //     username:"Prathana Sanghvi",
    //     description:"Sunt nisi nostrud ex ad exercitation ea id mollit mollit occaecat elit. Aliqua incididunt nulla cupidatat est est anim deserunt deserunt tempor officia eiusmod enim ullamco. Do qui nostrud ipsum minim non occaecat pariatur adipisicing elit minim labore. Nisi laboris adipisicing fugiat eu minim deserunt adipisicing duis velit.",
    //     hobbies:["hobby2","hobby3","hobby4","hobby5"]
    //   }
    //   ,{
    //     img_url:"https://via.placeholder.com/150",
    //     username:"Prachi Desai",
    //     description:"Sunt nisi nostrud ex ad exercitation ea id mollit mollit occaecat elit. Aliqua incididunt nulla cupidatat est est anim deserunt deserunt tempor officia eiusmod enim ullamco. Do qui nostrud ipsum minim non occaecat pariatur adipisicing elit minim labore. Nisi laboris adipisicing fugiat eu minim deserunt adipisicing duis velit.",
    //     hobbies:["hobby1","hobby2","hobby3","hobby4"]
    //   },
    // ])
    setCurrentPerson(people[0]);
    console.log(people[0]);
  }, [])
  
  const handleClick = (action) => {

      if(action === "like"){
        const LikeArr = peopleLike;
        LikeArr.push(currentPerson)
        setPeopleLike(LikeArr)
      }
      else{
        const DislikeArr = peopleDislike;
        DislikeArr.push(currentPerson)
        setPeopleDislike(DislikeArr)
      }
      setIndex(index + 1);
      setCurrentPerson(people[index]);
      console.log(people.length, index,peopleDislike,peopleLike)
      
   

  }
  return (

    <CardWrapper>
      <button onClick={() => handleClick("dislike")}>X</button>
      {currentPerson ?<Card>
      <UserImg src={`http://localhost:8000${currentPerson.image}`} />
      <div className="user__info">
        <h1>{currentPerson.name}</h1>
        <Description>{currentPerson.description}</Description>
        <h3 className="">Hobbies</h3>
        <HobbiesWrapper>
          {
            currentPerson.hobby.map(hobby => (
              <Hobbies>{hobby}</Hobbies>
            ))



          }
        </HobbiesWrapper>
       
        
      </div>
      </Card>: <h1>Kal AAna</h1>}
      <button onClick={() => handleClick("like")}>L</button>
    </CardWrapper>
  )
 
}
// import React from 'react'
// import axios from 'axios'
// const App = () => {
//   const geolocation = useGeolocation()
//   const handleSubmit = (e) => {
//   e.preventDefault();
//   const data = {'latitude1':geolocation.latitude,'longitude1':geolocation.longitude,'name1':e.target.name1.value}
//   const data1 = JSON.stringify(data) ;
//   axios({
//     method: 'post',
//     url: 'http://localhost:8000',
//     data: data1
// }).then(res =>console.log(res)).catch(err => console.log(err))
// }

//   return !geolocation.error
//     ? (
//       <form onSubmit ={handleSubmit}>
//       <input type="text" name = "name1"></input>
//       <button></button>
//       </form>
//   )
//     : (
//       <p>No geolocation, sorry.</p>
//     )
// }
// export default App;

export default CrushSelection;