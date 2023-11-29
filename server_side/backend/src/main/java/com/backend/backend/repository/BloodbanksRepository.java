// package com.backend.backend.repository;

// import com.backend.backend.models.Bloodbanks;
// import org.springframework.data.jpa.repository.JpaRepository;

// public interface BloodbanksRepository extends JpaRepository<Bloodbanks ,Long > {

//     Object findAllById(Long id);
//     void deleteById(Long id2);
// }
package com.backend.backend.repository;

import com.backend.backend.models.Bloodbanks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BloodbanksRepository extends JpaRepository<Bloodbanks, Integer> {
    // You don't need to declare findById and deleteById methods here
}


