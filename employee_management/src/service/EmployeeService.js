// EmployeeService.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";

class EmployeeService {
  getAllEmployee() {
    return axios.get(BASE_URL);
  }

  saveEmployee(employeeData) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return axios.post(BASE_URL, employeeData, config);
  }

  updateEmployee(id, employeeData) {
    return axios.put(`${BASE_URL}/${id}`, employeeData);
  }

  getEmployeeById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }
  deleteEmployee(id){
    return axios.delete(BASE_URL +"/" +id);
  }
}

export default new EmployeeService();
