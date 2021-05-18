describe('Teste de integração', () => {
  it('Teste da calculadora', () => {
    cy.visit('http://localhost:3000');

    cy.get("#calculadora").should("be.visible");
    cy.get("#calculadora").click();

    cy.url().should('include', '/calculator');

    cy.get("#0-eletronicItem-name").type("Chuveiro");
    cy.get("#0-eletronicItem-power").type("3800");
    cy.get("#0-eletronicItem-hours").type("1");

    cy.contains("Add outro").click();

    cy.get("#1-eletronicItem-name").type("Geladeira");
    cy.get("#1-eletronicItem-power").type("450");
    cy.get("#1-eletronicItem-hours").type("24");

    cy.contains("Add outro").click();

    cy.get("#2-eletronicItem-name").type("TV");
    cy.get("#2-eletronicItem-power").type("110");
    cy.get("#2-eletronicItem-hours").type("8");

    cy.contains("Calcular!").click();

    cy.url().should('include', '/results');

    cy.get("tr").children().should(($el) => {
      expect($el[0].innerText).to.be.equal("Aparelho");
      expect($el[1].innerText).to.be.equal("Potência (W)");
      expect($el[2].innerText).to.be.equal("Horas por dia");
      expect($el[3].innerText).to.be.equal("Gasto (kWh)");

      expect($el[4].innerText).to.be.equal("Chuveiro");
      expect($el[5].innerText).to.be.equal("3800");
      expect($el[6].innerText).to.be.equal("1");
      expect($el[7].innerText).to.be.equal("3.8");

      expect($el[8].innerText).to.be.equal("Geladeira");
      expect($el[9].innerText).to.be.equal("450");
      expect($el[10].innerText).to.be.equal("24");
      expect($el[11].innerText).to.be.equal("10.8");

      expect($el[12].innerText).to.be.equal("TV");
      expect($el[13].innerText).to.be.equal("110");
      expect($el[14].innerText).to.be.equal("8");
      expect($el[15].innerText).to.be.equal("0.88");
    });

    cy.contains("Total: 15.5 kWh").should("exist");
    cy.contains("Total mesal: 465 kWh").should("exist");
    cy.contains("Custo: R$ 10,08").should("exist");
    cy.contains("Custo mensal: R$ 302,25").should("exist");

  })
})