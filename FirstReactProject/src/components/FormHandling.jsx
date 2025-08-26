import React, { useState } from 'react'

const FormHandling = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState();
    const [gender, setGender] = useState("Male");
    const [choice, setChoice] = useState([]);

    const addChoice=(e)=> {
        const {value, checked} = e.target;
        if(checked){
            setChoice([...choice, value]);
        }else{
            setChoice(choice.filter((item)=> item !== value));
        }
    }

  return (
    <div className='m-4'>
      <h4>Form Handling</h4>
        <form class="d-flex flex-column mb-3 w-25">
            <input type="name" 
                className='mb-2'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder='Enter Name'
            />
            <input type="email" 
                className='mb-2'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder='Enter Email'
            />
            <input type="number" 
                className='mb-2'
                value={age}
                onChange={(e)=> setAge(e.target.value)}
                placeholder='Enter Age'
            />
            <h4>Gender</h4>
            <div>
                <input type="radio" 
                    name="Gender"
                    value="Male"
                    checked= {gender === "Male"}
                    onChange={(e)=> setGender(e.target.value)}
                /> <b className='mx-2'>Male</b>
            </div>
            <div>
                <input type="radio" 
                    name="Gender"
                    value="Female"
                    checked= {gender === "Female"}
                    onChange={(e)=> setGender(e.target.value)}
                /> <b className='mx-2'>Female</b>
            </div>

            <h4>select your choice</h4>
            <div>
                <input type="checkbox"
                    value="ReactJS"
                    onChange={(e)=> addChoice(e)}
                /> <b className='mx-2'>ReactJS</b>
            </div>
            <div>
                <input type="checkbox"
                    value="NodeJs"
                    onChange={(e)=> addChoice(e)}
                /> <b className='mx-2'>NodeJS</b>
            </div>
            <div>
                <input type="checkbox"
                    value="JavaScript"
                    onChange={(e)=> addChoice(e)}
                /> <b className='mx-2'>Java Script</b>
            </div>

        </form>
    </div>
  )
}

export default FormHandling
