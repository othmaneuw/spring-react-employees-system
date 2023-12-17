import React, { useState } from 'react'
import EmployeeService from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

export const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee,setEmployee] = useState({
     id : "",
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
  const createEmployee = (e) =>{
      e.preventDefault();
      EmployeeService.addEmployee(employee).then((response) => navigate("/"))
                                           .catch((error) => console.log(error))
  }

  const reset = (e) =>{
    e.preventDefault();
    setEmployee({
      id : "",
      firstName : "",
      lastName : "",
      emailId : ""
   })
  }
  return (
    <div className='flex max-w-xl shadow border-b mx-auto'>
        <div className='p-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
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
                 <button className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6' onClick={createEmployee}>Save</button>
                 <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6' onClick={reset}>Clear</button>
            </div>
        </div>
    </div>
  )
}
