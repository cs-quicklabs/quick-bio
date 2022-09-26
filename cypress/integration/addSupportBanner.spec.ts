describe("Add SpotLight button test cases", function () {

  beforeEach(() => {
    cy.commonLogin();
    cy.get('[data-cy="Support Banner"]').click();
  });

  it("validate Banner", () => {
    cy.contains("Add support banner on your profile");
    cy.get('[data-cy="addBannerButton"]').click()
    cy.contains("Add support banner on your profile");
    cy.contains("What do you want your support banner to say?");
    cy.contains("Select Color For Banner");
    cy.get('[data-cy="bg-blue-500"]').click();
    cy.contains("Or enter Hex Code");
    cy.get('[data-cy="bannerHex"]').type("#59ba9d");
    cy.contains("Select an icon for support banner (optional)");
    cy.get('[data-cy="bannerIcon"]').type("chevron-double-up");
    cy.contains("Show Support Banner")
    cy.get('[data-cy="toggleBanner"]').click();
    cy.get('[data-cy="addeditBannerButton"]').click();
    cy.contains("Required");
    cy.contains("Hexcode will be given priority");
  });

  it("Should be able to add Banner", () => {
    cy.contains("Add support banner on your profile");
        cy.get('[data-cy="addBannerButton"]').click()

    cy.contains("Add support banner on your profile");
    cy.contains("What do you want your support banner to say?");
    cy.get('[data-cy="bannerText"]').type("Banner");
    cy.contains("Or enter Hex Code")
    cy.get('[data-cy="bannerHex"]').type("#59ba9d");
    cy.contains("Select an icon for support banner (optional)");
    cy.get('[data-cy="bannerIcon"]').type("chevron-double-up");
    cy.get('[data-cy="bannerLink"]').type("Link Goes here");
    cy.contains("Show Support Banner")
    cy.get('[data-cy="toggleBanner"]').click();
    cy.get('[data-cy="addeditBannerButton"]').click();
  });

  it("Should be able to edit Banner", () => {
    cy.contains("Edit support banner on your profile");
    cy.get('[data-cy="editBanner"]').click();
    cy.contains("Edit support banner on your profile");
   cy.contains("What do you want your support banner to say?");
    cy.get('[data-cy="bannerText"]').clear().type("EditBanner");
    cy.contains("Select Color For Banner")
    cy.get('[data-cy="bg-blue-500"]').click()
    cy.contains("Or enter Hex Code")
    cy.get('[data-cy="bannerHex"]').clear()
    cy.contains("Select an icon for support banner (optional)")
    cy.get('[data-cy="bannerIcon"]').clear().type("bell");
    cy.get('[data-cy="bannerLink"]').clear().type("Another Link Goes here");
    cy.contains("Show Support Banner")
    cy.get('[data-cy="toggleBanner"]').click();
    cy.get('[data-cy="addeditBannerButton"]').click();
  });

it("Should be able to delete Banner", () => {
    cy.contains("Edit support banner on your profile");
    cy.get('[data-cy="deleteBanner"]').click();
    cy.contains("Delete Banner");
    cy.get('[data-cy="deleteBannerButton"]').click();
  });

});