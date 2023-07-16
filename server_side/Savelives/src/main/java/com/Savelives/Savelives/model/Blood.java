package com.Savelives.Savelives.model;

import jakarta.persistence.*;

import javax.swing.plaf.nimbus.State;

@Entity
public class bloodDonation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int hospital_Id;

    @Column
    private int sno_no;

    @Column
    private String Hospital_Or_BloodBankName;

    @Column
    private Sting currentCity;
    @Column
    private String district;
    @Column
    private String statecolumn;

    @Column
    private String contact_No;

    public int getHospital_Id() {
        return hospital_Id;
    }

    public void setHospital_Id(int hospital_Id) {
        this.hospital_Id = hospital_Id;
    }

    public int getSno_no() {
        return sno_no;
    }

    public void setSno_no(int sno_no) {
        this.sno_no = sno_no;
    }

    public String getHospital_Or_BloodBankName() {
        return Hospital_Or_BloodBankName;
    }

    public void setHospital_Or_BloodBankName(String hospital_Or_BloodBankName) {
        Hospital_Or_BloodBankName = hospital_Or_BloodBankName;
    }

    public Sting getCurrentCity() {
        return currentCity;
    }

    public void setCurrentCity(Sting currentCity) {
        this.currentCity = currentCity;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getStatecolumn() {
        return statecolumn;
    }

    public void setStatecolumn(String statecolumn) {
        this.statecolumn = statecolumn;
    }

    public String getContact_No() {
        return contact_No;
    }

    public void setContact_No(String contact_No) {
        this.contact_No = contact_No;
    }
}
