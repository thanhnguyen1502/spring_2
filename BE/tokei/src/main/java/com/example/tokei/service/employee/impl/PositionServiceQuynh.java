package com.example.tokei.service.employee.impl;

import com.example.tokei.model.Position;
import com.example.tokei.repository.employee.IPositionRepositoryQuynh;
import com.example.tokei.service.employee.IPositionServiceQuynh;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionServiceQuynh implements IPositionServiceQuynh {
    @Autowired
    IPositionRepositoryQuynh iPositionRepositoryQuynh;
    @Override
    public List<Position> findAll() {
        return iPositionRepositoryQuynh.findAllPosition();
    }
}
