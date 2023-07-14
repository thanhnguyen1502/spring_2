package com.example.tokei.model;

import javax.persistence.*;

@Entity
public class ShopDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_shop_detail")
    private Integer idShopDetail;

    private int amount;
    @ManyToOne
    @JoinColumn(name = "id_shop", referencedColumnName = "id_shop")
    private Shop shop;
    @ManyToOne
    @JoinColumn(name = "id_product", referencedColumnName = "id_product")
    private Product product;

    public ShopDetail() {
    }

    public Integer getIdShopDetail() {
        return idShopDetail;
    }

    public void setIdShopDetail(Integer idShopDetail) {
        this.idShopDetail = idShopDetail;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Shop getShop() {
        return shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
