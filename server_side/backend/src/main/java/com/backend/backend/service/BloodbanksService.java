package com.backend.backend.service;

import com.backend.backend.models.Bloodbanks;
import com.backend.backend.repository.BloodbanksRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodbanksService {

        private final BloodbanksRepository bloodbanksRepository;
        public BloodbanksService(BloodbanksRepository bloodbanksRepository)
        {
            this.bloodbanksRepository =bloodbanksRepository;
        }
        public List<Bloodbanks> getAll()
        {
            return (List<Bloodbanks>) bloodbanksRepository.findAll();
        }

        public Bloodbanks save (Bloodbanks bloodbanks)
        {
            return bloodbanksRepository.save(bloodbanks);
        }
        public Bloodbanks findById(Integer id)
        {
            return bloodbanksRepository.findById(id).orElse(null);
        }


        public void delete(Integer id)
        {
            Bloodbanks existBloodbanks = findById(id);
            if(existBloodbanks != null)
            {
                bloodbanksRepository.deleteById(id);
            }
        }

}
