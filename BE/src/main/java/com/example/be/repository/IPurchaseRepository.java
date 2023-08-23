package com.example.be.repository;

import com.example.be.dto.ICartDetailDto;
import com.example.be.model.PurchaseHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IPurchaseRepository extends JpaRepository<PurchaseHistory, Integer> {
//    @Query(value = "select * from purchase_history p where p.user_user_id = :userId order by p.purchase_history_id desc", nativeQuery = true)
//    List<PurchaseHistory> findAllnByUserId(@Param("userId") Integer userId);

    @Query(value = " SELECT ph.purchase_history_id AS idHistory, ph.order_date AS orderDate, ph.total AS total, " +
            "u.name AS username, p.img AS img, p.product_name AS productName" +
            " FROM purchase_history ph " +
            " JOIN cart_detail cd ON cd.purchase_history_id = ph.purchase_history_id " +
            " JOIN product p ON p.product_id = cd.product_id " +
            " JOIN user u ON u.user_id = ph.user_user_id " +
            " WHERE ph.user_user_id = :userId ORDER BY ph.purchase_history_id DESC", nativeQuery = true)
    List<ICartDetailDto> findAllnByUserId(@Param("userId") Integer userId);
}
