import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
import Employee from "./Employee";

const ListEmployees = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const [employees,setEmployees] = useState(null);
    const deleteEmployee = (e,id) =>{
      e.preventDefault();
      EmployeeService.deleteEmployee(id).then(res =>{
        setEmployees(prevEmployees => {
          return prevEmployees.filter(employee => employee.id !== id);
        })
      })
    }
    useEffect(()=>{
         const fetchData =  async () =>{
             try {
                setLoading(true);
                const response = await EmployeeService.getAllEmployees();
                setEmployees(response.data);
             } catch (error) {
                console.error(error)
             }
             setLoading(false);
         }
         fetchData();
    },[]);
  return (
    <div className="container mx-auto my-6 p-5">
      <div className="h-12">
        <button className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
                onClick={()=> navigate("/addEmployee")}       
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full mt-5">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Last Name</th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Email</th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">Actions</th>
            </tr>
          </thead>
         {!loading && (
             <tbody className="bg-white">
                {employees.map(employee => (
                    <Employee employee={employee} deleteEmployee={deleteEmployee} />
                ))}
             </tbody>
         )}
        </table>
      </div>
    </div>
  );
};

export default ListEmployees;
