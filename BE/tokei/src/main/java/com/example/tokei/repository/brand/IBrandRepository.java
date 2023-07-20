package com.example.tokei.repository.brand;

import com.example.tokei.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IBrandRepository extends JpaRepository<Brand, Integer> {
    @Query(value = "select * from brand ", nativeQuery = true)
    List<Brand> findAll();
}
