import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/employee";


class EmployeeService {
   addEmployee(employee){
       return axios.post(API_BASE_URL,employee);     
   }
   getAllEmployees(){
     return axios.get(API_BASE_URL);
   }
   deleteEmployee(id){
    return axios.delete(`${API_BASE_URL}/${id}`)
   }
   getEmployeeById(id){
    return axios.get(`${API_BASE_URL}/${id}`);
   }
   updateEmloyee(id,employee){
    return axios.put(`${API_BASE_URL}/${id}`,employee);
   }
}

export default new EmployeeService();
