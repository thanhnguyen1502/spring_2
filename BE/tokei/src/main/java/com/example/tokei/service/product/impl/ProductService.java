package com.example.tokei.service.product.impl;

import com.example.tokei.model.Product;
import com.example.tokei.repository.product.IProductRepository;
import com.example.tokei.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
   private IProductRepository productRepository;

    @Override
    public List<Product> showList() {
        return productRepository.findByAll();
    }

    @Override
    public List<Product> findAllByIdProduct(Integer id) {
        return productRepository.findAllByIdProduct(id);
    }

    @Override
    public List<Product> getProductByTypeProduct(Integer type) {
        return productRepository.getProductByType(type);
    }


}
