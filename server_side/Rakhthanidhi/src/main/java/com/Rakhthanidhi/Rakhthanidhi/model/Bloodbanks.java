package com.Rakhthanidhi.Rakhthanidhi.model;
import jakarta.persistence.*;
@Entity
public class Bloodbanks {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int sNo;

    @Column
    private String hospital_Or_BloodBankName;

    @Column
    private String  current_City;

    @Column
    private String district;

    @Column
    private  String state;

    public String getCurrent_City() {
        return current_City;
    }
    public int getsNo() {
        return sNo;
    }

    public void setsNo(int sNo) {
        this.sNo = sNo;
    }

    public String getHospital_Or_BloodBankName() {
        return hospital_Or_BloodBankName;
    }

    public void setHospital_Or_BloodBankName(String hospital_Or_BloodBankName) {
        this.hospital_Or_BloodBankName = hospital_Or_BloodBankName;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getContact_No() {
        return contact_No;
    }

    public void setContact_No(String contact_No) {
        this.contact_No = contact_No;
    }

    public void setCurrent_City(String current_City) {
        this.current_City = current_City;
    }

    @Column
    private  String  contact_No;

}
