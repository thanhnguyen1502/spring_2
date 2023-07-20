package com.example.tokei.service.login.impl;

import com.example.tokei.config.MyUserPrincipal;
import com.example.tokei.model.Account;
import com.example.tokei.model.AccountRole;
import com.example.tokei.repository.login.IAccountRepository;
import com.example.tokei.repository.login.IAccountRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private IAccountRoleRepository accountRoleRepository;

    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = this.accountRepository.findByNameAccount(username);
        if (account == null) {
            System.out.println("User not found! " + username);
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }
        List<AccountRole> accountRoles = this.accountRoleRepository.findByAccount(account);
        List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
        if (accountRoles != null) {
            for (AccountRole accountRole : accountRoles) {
                // ROLE_USER, ROLE_ADMIN,..
                GrantedAuthority authority = new SimpleGrantedAuthority(accountRole.getRole().getNameRole());
                grantList.add(authority);
            }
        }

        return new MyUserPrincipal(account.getNameAccount(), account.getPassword(), grantList);
    }
}