package com.backend.backend.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.backend.backend.models.Questionbanks;
import com.backend.backend.repository.QuestionRepository;
@Service
public class QuestionService {

      private final QuestionRepository questionRepository;
        public QuestionService(QuestionRepository questionRepository)
        {
            this.questionRepository = questionRepository;
        }
        public List<Questionbanks> getAll()
        {
            return (List<Questionbanks>) questionRepository.findAll();
        }

        public Questionbanks save (Questionbanks questionbanks )
        {
            return questionRepository.save(questionbanks);
        }

        public Questionbanks findById(Integer id)
        {
            return questionRepository.findById(id).orElse(null);
        }

        public void delete(Integer id)
        {
           Questionbanks existQuestionbanks = findById(id);
            if(existQuestionbanks != null)
            {
                questionRepository.deleteById(id);
            }
        }


    
}
