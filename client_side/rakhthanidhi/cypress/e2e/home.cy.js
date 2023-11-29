describe ("verifying web page",()=>{
    it("verifying the content in home page",() =>{
        cy.visit("/home")
        cy.wait(5000)
        cy.get(`.drops`).should("exist")
        cy.get(".whyDonate").should("contain","Why Donate Blood")
        cy.get(".Aboutus").should("contain","About Us")
        cy.get(".DonateNow").should("contain","Bloodbanks")
        cy.get(".ContactUs").should("contain","Contact Us")
        cy.get(".login").should("contain","Signup")
        cy.get(".increaseBlood").eq(0).should("contain","You")
        cy.get(".More").should("contain","Explore")
        cy.get(".Color").should("contain","Why")
        cy.get(".info").should("contain","and")

        cy.get(".increaseBlood").eq(1).should("contain","Why")
        cy.get(".increaseBlood").eq(2).should("contain","Benefits")
        cy.get(".increaseBlood").eq(3).should("contain","How")

        cy.get(".Process").eq(0).should("contain","About Us")
        cy.get(".Process").eq(1).should("contain","Gallery")
        cy.get(".Process").eq(2).should("contain","Notifications")
        cy.get(".Process").eq(3).should("contain","BloodGroups")
        cy.get(".Process").eq(4).should("contain","Video")
        cy.get(".Process").eq(5).should("contain","Blood")
        
        cy.get(".register").eq(0).should("contain","Login")
        cy.get(".register").eq(1).should("contain","Register as a donor")

        cy.get(".Email").eq(0).should("contain","Contact")
        cy.get(".Email").eq(1).should("contain","Phone")
        cy.get(".Email").eq(2).should("contain","E-mail")

        cy.get(".whatsapp").eq(0).should("exist")
        cy.get(".whatsapp").eq(1).should("exist")
        cy.get(".whatsapp").eq(2).should("exist")

        cy.get(".lastline").should("contain","Terms")


        

    })
   
})