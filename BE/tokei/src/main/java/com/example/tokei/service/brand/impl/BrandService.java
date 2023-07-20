package com.example.tokei.service.brand.impl;

import com.example.tokei.model.Brand;
import com.example.tokei.repository.brand.IBrandRepository;
import com.example.tokei.service.brand.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService implements IBrandService {
    @Autowired
    IBrandRepository brandRepository;

    @Override
    public List<Brand> showList() {
        return brandRepository.findAll();
    }
}
