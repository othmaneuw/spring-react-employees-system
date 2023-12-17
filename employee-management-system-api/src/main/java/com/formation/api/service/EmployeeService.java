package com.formation.api.service;

import com.formation.api.model.Employee;
import com.formation.api.repository.EmployeeRepository;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
