/// <reference types="cypress"/>

it("Quiz Scénario2", function() {
    cy.visit("Quiz.html");
    cy.get("#QR11").click().should("be.checked");
    cy.get("#QR23").check().should("be.checked");
    cy.get("#QR33").select("paris").should("have.value", "paris");
    cy.get("#bouton").click().should("be.visible");
    //Je n'ai pas réussi rajouter la note de la troisieme question dans mon JS, ma note est limitée a 2 points (1ere et 2eme question)
    cy.get("#resultat").should("contain.text", "Votre score est : 2");
});