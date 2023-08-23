package com.example.be.controller;

import com.example.be.model.*;
import com.example.be.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductRestController {
    @Autowired
    private IBrandService iBrandService;

    @Autowired
    private IProductTypeService iProductTypeService;

    @Autowired
    private IProductService iProductService;

    @GetMapping("/type")
    public ResponseEntity<List<ProductType>> showListType() {
        List<ProductType> productTypeList = iProductTypeService.findAll();
        if (productTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productTypeList, HttpStatus.OK);
        }
    }
    @GetMapping("/productByType/{type}")
    public ResponseEntity<List<Product>> displayProductByType(@PathVariable Integer type) {
        List<Product> products = iProductService.getProductByTypeProduct(type);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


    @GetMapping("")
    public ResponseEntity<List<Product>> listProduct() {
        List<Product> listProduct = iProductService.showList();
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable("id") Integer id) {
        Product product = iProductService.findById(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchBill(
            @RequestParam(name = "searchTerm", defaultValue = "") String searchTerm
    ) {
        List<Product> products;
        products = iProductService.searchByName(searchTerm);
        return ResponseEntity.ok(products);
    }
}
