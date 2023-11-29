package com.backend.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.backend.models.Questionbanks;
public interface QuestionRepository extends JpaRepository <Questionbanks,Integer>{

    
}
