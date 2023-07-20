package com.example.tokei.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_shop")
    private Integer idShop;
    private LocalDate date;
    @ManyToOne
    @JoinColumn(name = "id_account", referencedColumnName = "id_account")
    private Account account;

    public Shop() {
    }

    public Integer getIdShop() {
        return idShop;
    }

    public void setIdShop(Integer idShop) {
        this.idShop = idShop;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Account getAccount() {
        return account;
    }

    public void setUser(Account account) {
        this.account = account;
    }
}
