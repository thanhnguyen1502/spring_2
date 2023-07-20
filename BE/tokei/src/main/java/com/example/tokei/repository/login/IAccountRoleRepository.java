package com.example.tokei.repository.login;

import com.example.tokei.model.Account;
import com.example.tokei.model.AccountRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IAccountRoleRepository extends JpaRepository<AccountRole, Integer> {
    List<AccountRole> findByAccount(Account account);
}
