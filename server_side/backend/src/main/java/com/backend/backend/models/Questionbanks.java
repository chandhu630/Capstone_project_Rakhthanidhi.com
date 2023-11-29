package com.backend.backend.models;

import javax.persistence.*;

@Entity
@Table (name = "question_list")
public class Questionbanks {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

   @Column(name = " question_Name ")
    private String  question_Name ;

    @Column(name = "question_Answer ")
    private String question_Answer ;

    public String getQuestion_Name()
    {
        return question_Name;
    }
    public String getQuestion_Answer()
    {
        return question_Answer;
    }

    public Integer getId()
    {
        return id;
    }
   

    public void setQuestion_Answer( String  question_Answer)
    {
        this.question_Answer = question_Answer;
    }

    public void setQuestion_Name( String  question_Name)
    {
        this.question_Name = question_Name;
    }
   
    public void setId( Integer id)
    {
        this.id = id;
    }

     
    
}
