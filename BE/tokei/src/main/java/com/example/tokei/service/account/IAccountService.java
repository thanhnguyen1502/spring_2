package com.example.tokei.service.account;

import com.example.tokei.model.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAccountService {
    List<Account> showList();

    Account saveAccountUser(Account accountUser);

    Page<Account> findAccountUserByNameAccount(String name, Pageable pageable);

    Account findByNameAccount(String nameAccount);

    void changePassword(Account account, String newPassword);


    Boolean checkIfValidOldPassword(Account account, String oldPassword);


    void updateResetPasswordToken(String token, String email);

    Account getByResetPasswordToken(String token);

    void updatePassword(Account account, String newPassword);

    Account findByEmail(String userEmail);
}
