package com.example.tokei.service.product;

import com.example.tokei.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> showList();

    Product findById(int id);
}
