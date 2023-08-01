package com.example.tokei.controller.product;


import com.example.tokei.model.Brand;
import com.example.tokei.model.Product;
import com.example.tokei.model.ProductType;
import com.example.tokei.service.brand.IBrandService;
import com.example.tokei.service.product.IProductService;
import com.example.tokei.service.product.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/tokei")
public class ProductController {
    @Autowired
    private IProductService productService;

    @Autowired
    private IProductTypeService productTypeService;

    @Autowired
    private IBrandService brandService;

    @GetMapping("/product")
    public ResponseEntity<List<Product>> listProduct() {
        List<Product> listProduct = productService.showList();
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }

    @GetMapping("/type")
    public ResponseEntity<List<ProductType>> listProductType() {
        List<ProductType> productTypeList = productTypeService.findAllProductType();
        return new ResponseEntity<>(productTypeList, HttpStatus.OK);
    }

    @GetMapping("/brand")
    public ResponseEntity<List<Brand>> listBrand() {
        List<Brand> brandList = brandService.showList();
        return new ResponseEntity<>(brandList, HttpStatus.OK);
    }

    @GetMapping("/{idProduct}")
    public List<Product> findProductById(@PathVariable("idProduct") Integer id) {
        return productService.findAllByIdProduct(id);
    }

    @GetMapping("/productByType/{type}")
    public ResponseEntity<List<Product>> displayProductByType(@PathVariable Integer type) {
        List<Product> products = productService.getProductByTypeProduct(type);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
