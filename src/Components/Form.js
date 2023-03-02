import "./Form.css";
// import axios from "axios"
import { NavLink } from "react-router-dom"

 const Form=({setUpdateUI})=>{
   
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);

    fetch
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };

   return(
  
    <div className="form">
  
  <input className="fileinput" type="file" id="fileupload" name="file_picker" onChange={(e)=> handleChange(e)}  />
  <div className="auther-location">
  <input className="auther" type="text" />
   <input className="location" type="text" />
  </div>
   
   <input className="desci" type="text" />
   <NavLink to="/post"><button className="postbtn">POST</button></NavLink>
    </div>
    )


 }
 export default Form



//  function Form(){
//     return (
//         <>
//         <div className='mainbox2'>
//             <form action='#' method ='post'>
//                 <input id='first' type='file' placeholder='No file chosen'accept = 'image/png,image/jpeg'/>
//                 <br></br>
                
//                 <input id='second' type='text' placeholder='Author'/>
//                 <input id='third' type='text' placeholder='Location'/>
//                 <br></br>
//                 <input id='fourth' type='text' placeholder='Description'/>
//                 <br></br>
//                 <button id='post'>Post</button>

//             </form>
            
//         </div>
//         </>
//     )
// }
// export default Form;