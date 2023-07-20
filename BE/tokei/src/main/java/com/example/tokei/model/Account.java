package com.example.tokei.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_account")
    private Integer idAccount;

    @Column(columnDefinition = "varchar(40)",unique = true)
    private String nameAccount;

    @Column(name = "password", columnDefinition = "text")
    private String password;

    private String resetPasswordToken;

    @OneToOne(mappedBy = "account")
    @JsonBackReference
    private Employee employee;

    @OneToMany(mappedBy = "account")
    private Set<AccountRole> accountRoles;

    public Account() {
    }

    public Account(Integer idAccount, String nameAccount, String password) {
        this.idAccount = idAccount;
        this.nameAccount = nameAccount;
        this.password = password;
    }

    public Integer getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(Integer idAccount) {
        this.idAccount = idAccount;
    }

    public String getNameAccount() {
        return nameAccount;
    }

    public void setNameAccount(String nameAccount) {
        this.nameAccount = nameAccount;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getResetPasswordToken() {
        return resetPasswordToken;
    }

    public void setResetPasswordToken(String resetPasswordToken) {
        this.resetPasswordToken = resetPasswordToken;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Set<AccountRole> getAccountRoles() {
        return accountRoles;
    }

    public void setAccountRoles(Set<AccountRole> accountRoles) {
        this.accountRoles = accountRoles;
    }
}