package com.example.tokei.service.product.impl;

import com.example.tokei.model.ProductType;
import com.example.tokei.repository.product.IProductTypeRepository;
import com.example.tokei.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
   private IProductTypeRepository productTypeRepository;

    @Override
    public List<ProductType> findAllProductType() {
        return productTypeRepository.findAll();
    }
}
