import React from 'react'

const Eventhandling = () => {
  return (
    <div className='container-fluid '>
       <div className='col-md-5 card mx-auto py-5 mt-5 bg-warning'>
             <h1 className='fw-bold text-center '>Profile</h1>
            <button className='btn btn-danger mx-auto' onClick={() =>alert("Thanks For Click me")}>Click Me</button>
            <div className='p-3'>
            <h5 className='mt-5 mx-3'>Change Event</h5>
            <input type="text" className='form-control' placeholder='Enter Anything And See in Console...' onChange={(e) =>{console.log(e.target.value)}} />
            <input type="file" className='mt-3 form-control' onChange={(e) =>{console.log(e.target.value)}}/>
            <input type="color" className='mt-3'  onChange={(e) =>{console.log(console.log(e.target.value),document.body.style.background=e.target.value)}} />
            Click here to change the background color
            </div>
       </div>
           
    


        
    </div>
  )
}

export default Eventhandling