package com.backend.backend.controllers;
import com.backend.backend.models.Bloodbanks;
import com.backend.backend.service.BloodbanksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/blood")
public class BloodbanksController {
    @Autowired
    private BloodbanksService bloodbanksService;
    

    @GetMapping
    public List<Bloodbanks> getAll()
    {
        return bloodbanksService.getAll();
    }
    @GetMapping("{id}")
    public ResponseEntity<Bloodbanks> getById (@PathVariable Integer id)
    {
        Bloodbanks bloodbanks = bloodbanksService.findById(id);
        if(bloodbanks == null)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(bloodbanks,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Bloodbanks> create (@RequestBody Bloodbanks bloodbanks)
    {
        if(bloodbanks.getHospital_or_blood_bank_name() == null || bloodbanks.getHospital_or_blood_bank_name().strip().isEmpty())
        {
            return ResponseEntity.badRequest().build();
        }
        Bloodbanks savedBloodbanks = bloodbanksService.save(bloodbanks);
        return new ResponseEntity<>(savedBloodbanks,HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")

    public  ResponseEntity<Void> delete(@PathVariable Integer id)
    {
        bloodbanksService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PutMapping ("/{id}")
    public  ResponseEntity<Bloodbanks> update (@PathVariable Integer id ,@RequestBody Bloodbanks bloodbanks){
        Bloodbanks existingBloodbanks =bloodbanksService.findById(id);
        if(existingBloodbanks == null)
        {
            return ResponseEntity.notFound().build();
        }
        existingBloodbanks.setHospital_or_blood_bank_name(bloodbanks.getHospital_or_blood_bank_name());
        Bloodbanks updatedBloodbanks = bloodbanksService.save(existingBloodbanks);
        return new ResponseEntity<>(updatedBloodbanks,HttpStatus.OK);
    }

}
