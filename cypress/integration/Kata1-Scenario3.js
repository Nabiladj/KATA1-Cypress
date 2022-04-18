/// <reference types="cypress"/>

it("Quiz Scénario2", function() {
    cy.visit("Quiz.html");
    cy.get("#QR12").click().should("be.checked");
    cy.get("#QR23").check().should("be.checked");
    cy.get("#QR33").select("paris").should("have.value", "paris");
    cy.get("#bouton").click().should("be.visible");
    //Je n'ai pas réussi rajouter la note de la troisieme question dans mon JS, ma note est limitée a 2 points (1ere et 2eme question)
    cy.get("#repo1").should("contain.text", "La bonne réponse est A");
    cy.get("#repo1").should("have.css", "background-color", "rgb(255, 0, 0)");
    cy.get("#repo2").should("have.css", "background-color", "rgb(0, 128, 0)");
});