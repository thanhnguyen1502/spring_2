package com.example.tokei.service.employee.impl;

import com.example.tokei.model.Employee;
import com.example.tokei.repository.employee.IEmployeeInformationRepository;
import com.example.tokei.service.employee.IEmployeeInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeInformationService implements IEmployeeInformationService {
    @Autowired
    IEmployeeInformationRepository iEmployeeInformationRepository;

    @Override
    public Employee findByNameAccount(String nameAccount) {
        return iEmployeeInformationRepository.findByNameAccount(nameAccount);
    }

   @Override
    public void updateEmployee(Employee employee) {
        iEmployeeInformationRepository.updateEmployee(
                employee.getNameEmployee(),
                employee.getGender(),
                employee.getPhoneNumber(),
                employee.getDateOfBirth(),
                employee.getSalary(),
                employee.getPosition().getIdPosition(),
                employee.getAddress(),
                employee.getImage(),
                employee.getIdEmployee());
    }

    @Override
    public Boolean existsByEmail(String email) {
        return iEmployeeInformationRepository.existsByEmail(email);
    }
}
