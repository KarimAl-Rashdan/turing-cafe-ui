describe('MidMod Assessment', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {fixture: "reservations.json"})
    cy.visit('http://localhost:3000/')
  })
  it('Should display a title', () => {
    cy.get("h1").should('contain', "Turing Cafe Reservations")
  })
  it("should display a form and submit button", () => {
    cy
    .get("form > .inputName").should("exist").should("be.empty")
    .get("form > .inputDate").should("exist").should("be.empty")
    .get("form > .inputTime").should("exist").should("be.empty")
    .get("form > .inputNumber").should("exist").should("be.empty")
    .get("form > .submitBtn").should("exist")
  })
  it("should display reservations", () => {
    cy
    .get(".card > header").first().contains("Christie")
    .get(".card > p").first().contains("12/29")
    .get(".card > .timeTag").first().contains("7:00")
    .get(".card > p").first().contains(12)
  })
  it("Should display value when a user types into the form", () => {
    cy
    .get("form > .inputName").type("James").should("have.value", "James")
    .get("form > .inputDate").type("11/15").should("have.value", "11/15")
    .get("form > .inputTime").type("12:00").should("have.value", "12:00")
    .get("form > .inputNumber").type(5).should("have.value", 5)
  })
  it("should submit input values", () => {
    cy
    .get("form > .inputName").type("James").should("have.value", "James")
    .get("form > .inputDate").type("11/15").should("have.value", "11/15")
    .get("form > .inputTime").type("12:00").should("have.value", "12:00")
    .get("form > .inputNumber").type(5).should("have.value", 5)
    .get("form > .submitBtn").click()
    .get(".card").should("have.length", 4)
    .get(".card > header").last().contains("James")
    .get(".card > .dateTag").last().contains("11/15")
    .get(".card > .timeTag").last().contains("12:00")
    .get(".card > p").last().contains(5)

  })
})

// Write a test to check the user flow of adding a new reservation to the page.