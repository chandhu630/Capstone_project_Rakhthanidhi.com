package com.backend.backend.models;

import javax.persistence.*;

@Entity
@Table (name = "bloodbanks")
public class Bloodbanks {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "s_no")
    private int s_no;

   @Column(name = "current_city")
    private String current_city;

    @Column(name = "district ")
    private String district ;

    @Column(name = "hospital_or_blood_bank_name ")
    private String hospital_or_blood_bank_name ;

    @Column(name = "contact_no")
    private String contact_no;

    @Column(name = "state")
    private String state;

    public String getState()
    {
        return state;
    }
    public String getContact_no()
    {
        return contact_no;
    }
    public String getHospital_or_blood_bank_name()
    {
        return hospital_or_blood_bank_name;
    }
    public String getDistrict()
    {
        return district;
    }

    public Integer getId()
    {
        return s_no;
    }
    public String getCurrent_city()
    {
        return current_city;
    }

    public void setCurrent_city( String  current_city)
    {
        this.current_city = current_city;
    }

    public void setDistrict( String  district)
    {
        this.district = district;
    }

    public void setHospital_or_blood_bank_name( String  hospital_or_blood_bank_name)
    {
        this.hospital_or_blood_bank_name = hospital_or_blood_bank_name;
    }
    public void setContact_no( String  contact_no)
    {
        this.contact_no = contact_no;
    }
    public void setState( String  state)
    {
        this.state = state;
    }
    public void setId( Integer s_no)
    {
        this.s_no = s_no;
    }


}
