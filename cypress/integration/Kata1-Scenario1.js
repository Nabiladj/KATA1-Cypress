/// <reference types="cypress"/>

it("Quiz Scénario1", function() {
    cy.visit("Quiz.html");
    cy.get("[class=TitreQ1]").should("be.visible");
    cy.get("[class=TitreQ1]").should(
        "contain.text",
        "Quelle balise utiliseriez-vous pour créer un lien hypertexte?"
    );
    /*cy.get("[class=TitreQ1]").should("include.text", "Trouves la réponse");*/
    cy.get("[class=QR1]").contains("A").should("be.visible");
    cy.get("[class=QR1]").contains("IMG").should("be.visible");
    cy.get("[class=QR1]").contains("DL").should("be.visible");

    cy.get("[class=TitreQ2]").should("be.visible");
    cy.get("[class=TitreQ2]").should(
        "contain.text",
        "Quelle balise HTML est utilisée pour définir une feuille de style interne?"
    );

    cy.get("[class=QR2]").contains("CSS").should("be.visible");
    cy.get("[class=QR2]").contains("SCRIPT").should("be.visible");
    cy.get("[class=QR2]").contains("STYLE").should("be.visible");

    cy.get("[class=TitreQ3]").should("be.visible");
    cy.get("[class=TitreQ3]").should(
        "include.text",
        "Quelle est la capitale de la France?"
    );
    cy.contains("électionner une Capitale ... ").should("be.visible");

    cy.get("#QR33").should("be.visible");
    cy.get("#QR33").should("include.text", "Sélectionner--");
    cy.get("#bouton").should("be.visible");
    cy.get("#bouton").should("include.text", "Valider");
});