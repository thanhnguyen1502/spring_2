package com.example.tokei.service.product;

import com.example.tokei.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> showList();

    List<Product> findAllByIdProduct(Integer id);

    List<Product> getProductByTypeProduct(Integer type);
}
