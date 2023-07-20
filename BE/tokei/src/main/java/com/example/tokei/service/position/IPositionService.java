package com.example.tokei.service.position;

import com.example.tokei.model.Position;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IPositionService {
    List<Position> showList();
}
