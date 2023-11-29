package com.backend.backend.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.backend.backend.models.Questionbanks;
import com.backend.backend.service.QuestionService;
@RequestMapping("/questions")
@RestController
public class QuestionController {
     @Autowired
    private QuestionService questionService;


    @GetMapping
    public List<Questionbanks> getAll()
    {
        return questionService.getAll();
    }
    @GetMapping("{id}")
    public ResponseEntity<Questionbanks> getById (@PathVariable Integer id)
    {
        Questionbanks questionbanks = questionService.findById(id);
        if(questionbanks == null)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(questionbanks,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Questionbanks> create (@RequestBody Questionbanks questionbanks)
    {
        if(questionbanks.getQuestion_Name() == null || questionbanks.getQuestion_Name().strip().isEmpty())
        {
            return ResponseEntity.badRequest().build();
        }
        Questionbanks savedQuestionbanks = questionService.save(questionbanks);
        return new ResponseEntity<>(savedQuestionbanks,HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")

    public  ResponseEntity<Void> delete(@PathVariable Integer id)
    {
        questionService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PutMapping ("/{id}")
    public  ResponseEntity<Questionbanks> update (@PathVariable Integer id ,@RequestBody Questionbanks questionbanks){
        Questionbanks existingQuestionbanks =questionService.findById(id);
        if(existingQuestionbanks == null)
        {
            return ResponseEntity.notFound().build();
        }
        existingQuestionbanks.setQuestion_Name(questionbanks.getQuestion_Name());
        Questionbanks updatedQuestionbanks = questionService.save(existingQuestionbanks);
        return new ResponseEntity<>(updatedQuestionbanks,HttpStatus.OK);
    }
     
    
}
