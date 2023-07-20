package com.example.tokei.service.employee.impl;

import com.example.tokei.dto.employee.EmployeeDTO;
import com.example.tokei.model.Account;
import com.example.tokei.model.Employee;
import com.example.tokei.repository.account.IAccountRepositoryQuynh;
import com.example.tokei.repository.employee.IEmployeeRepository;
import com.example.tokei.service.employee.IEmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository iEmployeeRepository;
    @Autowired
    private IAccountRepositoryQuynh accountRepositoryQuynh;
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public Page<Employee> showList(Pageable pageable) {
        Pageable validPageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), pageable.getSort());
        return iEmployeeRepository.showListEmployee(validPageable);
    }

    @Override
    public Page<Employee> findByEmployee(String name, String account, String phoneNumtokeir, Pageable pageable) {
        return iEmployeeRepository.findByAll(name, account, phoneNumtokeir, pageable);
    }

    @Override
    public Page<Employee> findByName(String name, Pageable pageable) {
        return iEmployeeRepository.findByName(name, pageable);
    }

    @Override
    public Page<Employee> findByPhone(String phone, Pageable pageable) {
        return iEmployeeRepository.findByPhone(phone,pageable);
    }


    @Override
    public void create(EmployeeDTO employeeDTO) {
        accountRepositoryQuynh.createAccount(employeeDTO.getAccount().getNameAccount(),
                passwordEncoder.encode("Abc@123"));
        Account account = accountRepositoryQuynh
                .findByName(employeeDTO.getAccount().getNameAccount());
        Employee employee = new Employee();
        employee.setAccount(account);
        BeanUtils.copyProperties(employeeDTO, employee);
        iEmployeeRepository.saveEmployee(
                employee.getNameEmployee(),
                employee.getGender(),
                employee.getDateOfBirth(),
                employee.getSalary(),
                employee.getImage(),
                employee.getAddress(),
                employee.getPhoneNumber(),
                employee.getEmail(),
                employee.getPosition(),
                account.getIdAccount());
    }

    @Override
    public Employee findEmployeeById(Integer id) {
        return iEmployeeRepository.findEmployeeById(id);
    }

    @Override
    public void deleteByIdEmployee(Integer idEmployee) {
        iEmployeeRepository.deleteEmployeeById(idEmployee);
    }
}
