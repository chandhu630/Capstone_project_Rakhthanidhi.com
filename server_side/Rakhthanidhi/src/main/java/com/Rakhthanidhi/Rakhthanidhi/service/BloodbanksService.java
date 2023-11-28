package com.Rakhthanidhi.Rakhthanidhi.service;

import com.Rakhthanidhi.Rakhthanidhi.model.Bloodbanks;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BloodbanksService {
    public Bloodbanks saveBloodbanks (Bloodbanks bloodbanks);
    public  List<Bloodbanks> getAllBloodbanks();
    public Bloodbanks updateBloodbanks (Bloodbanks bloodbanks);
    public String deleteBlood(Integer Id);
    public Bloodbanks getOneBloodbanks(Integer id);

}
