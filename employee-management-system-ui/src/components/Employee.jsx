import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({employee,deleteEmployee}) => {
  const navigate = useNavigate();
  const updatePage = (e,id) =>{
       e.preventDefault();
       navigate(`/update/${id}`)
  }
  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-6 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-6 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-6 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-6 whitespace-nowrap font-medium text-sm">
        <a onClick={(e)=>deleteEmployee(e,employee.id)} className="text-indigo-600 hover:cursor-pointer hover:text-indigo-800 px-4">
          Delete
        </a>
        <a onClick={(e) => updatePage(e,employee.id)} className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default Employee;
