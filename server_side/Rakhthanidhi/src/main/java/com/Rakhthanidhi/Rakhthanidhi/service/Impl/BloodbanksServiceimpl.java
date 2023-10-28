package com.Rakhthanidhi.Rakhthanidhi.service.Impl;
import com.Rakhthanidhi.Rakhthanidhi.model.Bloodbanks;
import com.Rakhthanidhi.Rakhthanidhi.repository.BloodbanksRepository;
import com.Rakhthanidhi.Rakhthanidhi.service.BloodbanksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class BloodbanksServiceimpl implements BloodbanksService {
    @Autowired
    BloodbanksRepository bloodbanksRepository;
    @Override
    public Bloodbanks saveBloodbanks(Bloodbanks bloodbanks) {
        return bloodbanksRepository.save(bloodbanks);
    }

    @Override
    public List<Bloodbanks> getAllBloodbanks() {
        return bloodbanksRepository.findAll();
    }

    @Override
    public Bloodbanks updateBloodbanks(Bloodbanks bloodbanks) {
        return bloodbanksRepository.save(bloodbanks);
    }
    @Override
    public String deleteBlood(Integer Id) {
        bloodbanksRepository.deleteById(Id);
        return "bloodbank deleted successfully";
    }

    @Override
    public Bloodbanks getOneBloodbanks(Integer id) {
        return bloodbanksRepository.findById(id).get();
    }


}
