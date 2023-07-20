package com.example.tokei.service.position.impl;

import com.example.tokei.model.Position;
import com.example.tokei.repository.employee.IPositionRepository;
import com.example.tokei.service.position.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService implements IPositionService {

    @Autowired
    private IPositionRepository iPositionRepository;
    @Override
    public List<Position> showList() {
        return iPositionRepository.showPositionList();
    }
}
