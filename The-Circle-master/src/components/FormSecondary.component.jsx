import {useState , useEffect} from "react"
import useSignUp from "../hooks/useSignUp.hooks";
import axios from "axios";
const FormSecondary = ({user ,history}) => {
    const [imgsrc , setImgSrc] = useState("")
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    const [hobbies,setHobbies] = useState([0,0,0,0,0]);
    const [dob,setDob] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('image', image, image.name);
    form_data.append('name1',user.username);
    let url = 'http://localhost:8000/image';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res);
          setImgSrc(`http://localhost:8000${res.data.url}`)
        })
        .catch(err => console.log(err))
  };
  
  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  };
  const onBtnClick = () => {
    console.log(user,"dfgh")

    if(!image || !description || !hobbies){
        return;
    }
    const data = JSON.stringify({
      description,
      hobbies,
      dob,
      name1:user.username
    })
    axios({
      method: "post",
      url: "http://localhost:8000/getting",
      data
    }).then((resp) => {
      console.log(resp)
      
    })
    history.push("/")
  }
  const handleHobbyChange = (index) =>{
    let hobbyArr= hobbies;
   if(hobbyArr[index]=== 0){
     hobbyArr[index] = 1 
   }
   else{
     hobbyArr[index] = 0
   }
   setHobbies(hobbyArr)

  }
return (
    <div>
        <form className="img" onSubmit ={handleSubmit} encType="multipart/form-data">
      <input type="file" id="image" accept="image/png, image/jpeg"  onChange={handleImageChange} required />
        <button type="submit">upload</button>
      </form>
      <img src={imgsrc} height="100px" width="100px"/>
        <input type="text" name="description" placeholder="description" value={description} onChange={({target}) => setDescription(target.value)} />
        <input type="date" name="DOB" placeholder="description" value={dob} onChange={({target}) => setDob(target.value)} />
        <p onClick={() => handleHobbyChange(0)}>hobby1</p>
        <p onClick={() => handleHobbyChange(1)}>hobby2</p>
        <p onClick={() => handleHobbyChange(2)}>hobby3</p>
        <p onClick={() => handleHobbyChange(3)}>hobby4</p>
        <p onClick={() => handleHobbyChange(4)}>hobby5</p>
        <button onClick={onBtnClick}>Submit</button>
      
    </div>
)
}
export default FormSecondary;