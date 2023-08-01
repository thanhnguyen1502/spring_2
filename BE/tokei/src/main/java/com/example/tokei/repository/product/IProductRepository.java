package com.example.tokei.repository.product;

import com.example.tokei.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product order by id_product desc", nativeQuery = true)
    List<Product> findByAll();



    List<Product> findAllByIdProduct(Integer id);

    @Query(value = "select * from product where id_product_type = :idType  order by id_product desc" , nativeQuery = true)
    List<Product> getProductByType(@Param("idType") Integer type);
}
