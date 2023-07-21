package com.example.tokei.repository.product;

import com.example.tokei.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product ", nativeQuery = true)
    List<Product> findByAll();

    @Modifying
    @Query(value = "select * from product  WHERE id_product = :id_product ", nativeQuery = true)
    Product findById(@Param("id_product") int idProduct);
}
