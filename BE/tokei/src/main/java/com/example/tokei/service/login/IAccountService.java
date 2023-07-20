package com.example.tokei.service.login;

import com.example.tokei.model.Account;

public interface IAccountService {
    void updateResetPasswordToken(String token, String email);
    Account getByResetPasswordToken(String token);

    void updatePassword(Account account, String newPassword);

    Account findByEmail(String userEmail);
}