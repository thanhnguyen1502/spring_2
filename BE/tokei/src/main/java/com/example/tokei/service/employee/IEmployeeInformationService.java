package com.example.tokei.service.employee;

import com.example.tokei.model.Employee;

public interface IEmployeeInformationService {

    Employee findByNameAccount(String nameAccount);


    void updateEmployee(Employee employee);

    Boolean existsByEmail(String email);
}
