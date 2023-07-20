package com.example.tokei.controller.position;

import com.example.tokei.model.Position;
import com.example.tokei.service.position.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/admin/position")

public class PositionController {
    @Autowired
    private IPositionService iPositionService;

    @GetMapping("")
    public List<Position> showList() {

        return iPositionService.showList();
    }
}
