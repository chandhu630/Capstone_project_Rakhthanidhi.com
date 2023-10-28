package com.Rakhthanidhi.Rakhthanidhi.controllers;
import com.Rakhthanidhi.Rakhthanidhi.model.Bloodbanks;
import com.Rakhthanidhi.Rakhthanidhi.service.BloodbanksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blood")
public class BloodbanksControllers {
    @Autowired
    BloodbanksService bloodbanksService;
    @PostMapping("/create")
    public Bloodbanks saveBloodbanks(@RequestBody Bloodbanks bloodbanks)
    {
        return bloodbanksService.saveBloodbanks(bloodbanks);
    }
    @GetMapping("")
    public List<Bloodbanks> getAllBloodbanks()
    {
        return bloodbanksService.getAllBloodbanks();
    }
    @PutMapping("/update")
    public Bloodbanks updateBloodbanks(@RequestBody Bloodbanks bloodbanks)
    {
        return bloodbanksService.updateBloodbanks(bloodbanks);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteBloodbanks(@PathVariable Integer id)
    {
        return bloodbanksService.deleteBlood(id);
    }
    @GetMapping("{id}")
    public Bloodbanks getOnebloodbanks(@PathVariable Integer id)
    {
        return bloodbanksService.getOneBloodbanks(id);
    }
}
