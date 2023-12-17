import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

const UpdateEmployee = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [employee,setEmployee] = useState({
    id,
    firstName : "",
    lastName : "",
    emailId : ""
  })
  const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({
         ...employee,
         [e.target.name] : value
    })
 }

 useEffect(()=>{
     const fetchData = async () =>{
        try {
            const response = await EmployeeService.getEmployeeById(id);
            setEmployee(response.data);
        } catch (error) {
            console.log(error);
        }
     }
     fetchData();
 },[id])

 const updateEmployee = (e) =>{
    e.preventDefault();
    try {
        EmployeeService.updateEmloyee(id,employee).then(res => navigate("/"));
    } catch (error) {
        console.log(error);
    }
 }
  return (
    <div className='flex max-w-xl shadow border-b mx-auto'>
        <div className='p-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Update Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                 <label className='block text-gray-600 text-sm font-normal'>First name</label>
                 <input type="text" 
                        name='firstName' 
                        className='h-10 w-96 botder mt-2 px-2'
                        value={employee.firstName}
                        onChange={handleChange}
                        />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                 <label className='block text-gray-600 text-sm font-normal'>Last name</label>
                 <input type="text" 
                        name='lastName' 
                        className='h-10 w-96 botder mt-2 px-2'
                        value={employee.lastName}
                        onChange={handleChange}
                        />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                 <label className='block text-gray-600 text-sm font-normal'>Email</label>
                 <input type="email" 
                        name='emailId' 
                        className='h-10 w-96 botder mt-2 px-2'
                        value={employee.emailId}
                        onChange={handleChange}
                        />
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                 <button className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6' onClick={updateEmployee}>Update</button>
                 <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6' onClick={(e)=>navigate("/")}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee;