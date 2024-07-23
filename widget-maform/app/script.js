function myFunctionAdd() {
  // Inicializa Zoho Creator
  ZOHO.CREATOR.init()
    .then(function (data) {
      console.log("ZOHO.CREATOR.init() called");

      // Obtiene los valores de los campos de entrada
      let streetAddress = document.getElementById("streetAddress").value;
      let legalDescription = document.getElementById("legalDescription").value;
      // Obtiene los datos de Personal Property
      let PersonalProperty_Refrigerator = document.getElementById(
        "PersonalProperty_Refrigerator"
      ).value;
      let PersonalProperty_Stove = document.getElementById(
        "PersonalProperty_Stove"
      ).value;
      let PersonalProperty_Microwave = document.getElementById(
        "PersonalProperty_Microwave"
      ).value;
      let PersonalProperty_Dishwasher = document.getElementById(
        "PersonalProperty_Dishwasher"
      ).value;
      let PersonalProperty_Dryer = document.getElementById(
        "PersonalProperty_Dryer"
      ).value;
      let PersonalProperty_Washer = document.getElementById(
        "PersonalProperty_Washer"
      ).value;
      let PersonalProperty_GarbageDisposal = document.getElementById(
        "PersonalProperty_GarbageDisposal"
      ).value;
      let PersonalProperty_GarageOpener = document.getElementById(
        "PersonalProperty_GarageOpener"
      ).value;
      // Obtiene los datos de las llaves
      let Keys_Unit = document.getElementById("Keys_Unit").value;
      let Keys_BuildingAccess = document.getElementById(
        "Keys_BuildingAccess"
      ).value;
      let Keys_Pool = document.getElementById("Keys_Pool").value;
      let Keys_Mailbox = document.getElementById("Keys_Mailbox").value;
      let Keys_GarageDoorOpener = document.getElementById(
        "Keys_GarageDoorOpener"
      ).value;
      // Obtiene el Tipo de Propiedad
      let typeOfPropertyCondominium = document.getElementById(
        "typeOfPropertyCondominium"
      ).value;
      let typeOfPropertyHomeowners = document.getElementById(
        "typeOfPropertyHomeowners"
      ).value;
      let typeOfPropertyFreeStanding = document.getElementById(
        "typeOfPropertyFreeStanding"
      ).value;
      // Obtiene la Disponibilidad
      let Occupancy_isLeased =
        document.getElementById("Occupancy_isLeased").value;
      let Occupancy_Occupied =
        document.getElementById("Occupancy_Occupied").value;
      let Occupancy_Vacant = document.getElementById("Occupancy_Vacant").value;
      // Obtiene los datos del punto 3 (Price and Terms)
      let priceAndTerms_Price =
        document.getElementById("priceAndTermsPrice").value;
      let priceAndTerms_Lease =
        document.getElementById("priceAndTermsLease").value;
      let FinancingTerms_Cash = document.getElementById(
        "FinancingTerms_Cash"
      ).value;
      let FinancingTerms_Convetional = document.getElementById(
        "FinancingTerms_Convetional"
      ).value;
      let FinancingTerms_VAFHA = document.getElementById(
        "FinancingTerms_VAFHA"
      ).value;
      // Obtiene los datos del punto 12 (Contact Information)
      let contactInformation_Name = document.getElementById(
        "contactInformation_Name"
      ).value;
      let contactInformation_Email = document.getElementById(
        "contactInformation_Email"
      ).value;
      let contactInformation_Mobile = document.getElementById(
        "contactInformation_Mobile"
      ).value;
      let contactInformation_Address = document.getElementById(
        "contactInformation_Address"
      ).value;
      let contactInformation_City = document.getElementById(
        "contactInformation_City"
      ).value;
      let contactInformation_State = document.getElementById(
        "contactInformation_State"
      ).value;
      let contactInformation_ZipCode = document.getElementById(
        "contactInformation_ZipCode"
      ).value;
      // Obtiene los datos del punto 12 (Mailing Address)
      let mailingInformation_Address = document.getElementById(
        "mailingInformation_Address"
      ).value;
      let mailingInformation_City = document.getElementById(
        "mailingInformation_City"
      ).value;
      let mailingInformation_State = document.getElementById(
        "mailingInformation_State"
      ).value;
      let mailingInformation_ZipCode = document.getElementById(
        "mailingInformation_ZipCode"
      ).value;
      let associationMailingAddressCheckbox = document.getElementById(
        "AssociatingMailingAddress"
      ).value;
      // Obtener los datos de la cuenta bancaria
      let bankDeposit__OwnerName = document.getElementById(
        "bankDeposit__OwnerName"
      ).value;
      let bankDeposit_BankInput = document.getElementById(
        "bankDeposit_BankInput"
      ).value;
      let bankDeposit_CheckInput = document.getElementById(
        "bankDeposit_CheckInput"
      ).value;
      let bankDeposit_AccTypeInput = document.getElementById(
        "bankDeposit_AccTypeInput"
      ).value;
      let bankDeposit_InstructionsInput = document.getElementById(
        "bankDeposit_InstructionsInput"
      ).value;
      // El due;o autoriza al Manager a hacer pagos
      let bankDeposit_authorizesLegalFees = document.getElementById(
        "bankDeposit_authorizesLegalFees"
      ).value;
      let bankDeposit_authorizesPropertyTaxes = document.getElementById(
        "bankDeposit_authorizesPropertyTaxes"
      ).value;
      let bankDeposit_authorizesLicensingFees = document.getElementById(
        "bankDeposit_authorizesLicensingFees"
      ).value;
      // Obtiene los datos del Seguro
      let Insurance_Name = document.getElementById("Insurance_Name").value;
      let Insurance_PhoneNumber = document.getElementById(
        "Insurance_PhoneNumber"
      ).value;
      let Insurance_PolicyNumber = document.getElementById(
        "Insurance_PolicyNumber"
      ).value;
      let Insurance_Company =
        document.getElementById("Insurance_Company").value;
      // Obtiene los datos del Seguro: Property
      let PropertyInsurance_Provider = document.getElementById(
        "PropertyInsurance_Provider"
      ).value;
      let PropertyInsurance_AgentName = document.getElementById(
        "PropertyInsurance_AgentName"
      ).value;
      let PropertyInsurance_Policy = document.getElementById(
        "PropertyInsurance_Policy"
      ).value;
      let PropertyInsurance_Account = document.getElementById(
        "PropertyInsurance_Account"
      ).value;
      let PropertyInsurance_InsuredName = document.getElementById(
        "PropertyInsurance_InsuredName"
      ).value;
      let PropertyInsurance_Username = document.getElementById(
        "PropertyInsurance_Username"
      ).value;
      let PropertyInsurance_Website = document.getElementById(
        "PropertyInsurance_Website"
      ).value;
      let PropertyInsurance_Password = document.getElementById(
        "PropertyInsurance_Password"
      ).value;
      // Obtiene los datos del Seguro: Renter's
      let Insurance_Renters_Provider = document.getElementById(
        "Insurance_Renters_Provider"
      ).value;
      let Insurance_Renters_AgentName = document.getElementById(
        "Insurance_Renters_AgentName"
      ).value;
      let Insurance_Renters_Policy = document.getElementById(
        "Insurance_Renters_Policy"
      ).value;
      let Insurance_Renters_Account = document.getElementById(
        "Insurance_Renters_Account"
      ).value;
      let Insurance_Renters_InsuredName = document.getElementById(
        "Insurance_Renters_InsuredName"
      ).value;
      let Insurance_Renters_Username = document.getElementById(
        "Insurance_Renters_Username"
      ).value;
      let Insurance_Renters_Website = document.getElementById(
        "Insurance_Renters_Website"
      ).value;
      let Insurance_Renters_Password = document.getElementById(
        "Insurance_Renters_Password"
      ).value;
      // Obtiene los datos de la Hipoteca
      let Mortgage_Account = document.getElementById("Mortgage_Account").value;
      let Mortgage_Name_of_the_Bank = document.getElementById(
        "Mortgage_Name_of_the_Bank"
      ).value;
      let Mortgage_Address = document.getElementById("Mortgage_Address").value;
      let Mortgage_City = document.getElementById("Mortgage_City").value;
      let Mortgage_State = document.getElementById("Mortgage_State").value;
      let Mortgage_AmountToBePaid = document.getElementById(
        "Mortgage_AmountToBePaid"
      ).value;
      // Obtiene los datos del Homeowner's Association
      let Homeowners_Name = document.getElementById("Homeowners_Name").value;
      let Homeowners_Phone = document.getElementById("Homeowners_Phone").value;
      let Homeowners_Email = document.getElementById("Homeowners_Email").value;
      let Homeowners_Website =
        document.getElementById("Homeowners_Website").value;
      let Homeowners_Username = document.getElementById(
        "Homeowners_Username"
      ).value;
      let Homeowners_Password = document.getElementById(
        "Homeowners_Password"
      ).value;
      // Obtiene los datos de Utilities
      let Utilities_Provider =
        document.getElementById("Utilities_Provider").value;
      let Utilities_Website =
        document.getElementById("Utilities_Website").value;
      let Utilities_Password =
        document.getElementById("Utilities_Password").value;
      let Utilities_Account =
        document.getElementById("Utilities_Account").value;
      let Utilities_Username =
        document.getElementById("Utilities_Username").value;
      // Prepara los datos del formulario
      let formData = {
        data: {
          Street_Address: streetAddress,
          Legal_Description: legalDescription,
          // SECTION PERSONAL PROPERTY
          PersonalProperty_Refrigerator: PersonalProperty_Refrigerator,
          PersonalProperty_Stove: PersonalProperty_Stove,
          PersonalProperty_Microwave: PersonalProperty_Microwave,
          PersonalProperty_Dishwasher: PersonalProperty_Dishwasher,
          PersonalProperty_Dryer: PersonalProperty_Dryer,
          PersonalProperty_Washer: PersonalProperty_Washer,
          PersonalProperty_GarbageDisposal: PersonalProperty_GarbageDisposal,
          PersonalProperty_GarageOpener: PersonalProperty_GarageOpener,
          // OWNER PROVIDES THE KEYS
          Keys_Unit: Keys_Unit,
          Keys_BuildingAccess: Keys_BuildingAccess,
          Keys_Mailbox: Keys_Mailbox,
          Keys_Pool: Keys_Pool,
          Keys_GarageDoorOpener: Keys_GarageDoorOpener,
          // TYPE OF PROPERTY
          TypeOfProperty_Condominium: typeOfPropertyCondominium,
          TypeOfProperty_Homeowners: typeOfPropertyHomeowners,
          TypeOfProperty_FreeStanding: typeOfPropertyFreeStanding,
          // OCCUPANCY
          Occupancy_isLeased: Occupancy_isLeased,
          Occupancy_Occupied: Occupancy_Occupied,
          Occupancy_Vacant: Occupancy_Vacant,
          // TENANT NAME
          // SECTION 3. PRICE
          a_Price: priceAndTerms_Price,
          b_Lease: priceAndTerms_Lease,
          // SECTION 3. TERMS
          FinancingTerms_Cash: FinancingTerms_Cash,
          FinancingTerms_Convetional: FinancingTerms_Convetional,
          FinancingTerms_VAFHA: FinancingTerms_VAFHA,
          // SECTION 12. CONTACT INFORMATION
          contactInformation_Name: contactInformation_Name,
          contactInformation_Email: contactInformation_Email,
          contactInformation_Mobile: contactInformation_Mobile,
          contactInformation_Address: contactInformation_Address,
          contactInformation_City: contactInformation_City,
          contactInformation_State: contactInformation_State,
          contactInformation_ZipCode: contactInformation_ZipCode,
          // SECTION 12. MAILING ADDRESS
          mailingAddress_Address: mailingInformation_Address,
          mailingAddress_City: mailingInformation_City,
          mailingAddress_State: mailingInformation_State,
          mailingAddress_ZipCode: mailingInformation_ZipCode,
          associationMailingAddressCheckbox: associationMailingAddressCheckbox,
          // BANK ACCOUNT
          BankAccount_OwnerName: bankDeposit__OwnerName,
          BankAccount_Bank: bankDeposit_BankInput,
          BankAccount_Check: bankDeposit_CheckInput,
          BankAccount_AccountType: bankDeposit_AccTypeInput,
          BankAccount_Instructions: bankDeposit_InstructionsInput,
          // OWNER AUTHORIZES MANAGER TO MAKE PAYMENTS
          AuthorizesPayments_LegalFees: bankDeposit_authorizesLegalFees,
          AuthorizesPayments_PropertyTaxes: bankDeposit_authorizesPropertyTaxes,
          AuthorizesPayments_RentalLicensingFees:
            bankDeposit_authorizesLicensingFees,
          // INSURANCE
          Insurance_Name: Insurance_Name,
          Insurance_PhoneNumber: Insurance_PhoneNumber,
          Insurance_PolicyNumber: Insurance_PolicyNumber,
          Insurance_Company: Insurance_Company,
          // INSURANCE: PROPERTY
          PropertyInsurance_Provider: PropertyInsurance_Provider,
          PropertyInsurance_Provider: PropertyInsurance_Provider,
          PropertyInsurance_AgentName: PropertyInsurance_AgentName,
          PropertyInsurance_Policy: PropertyInsurance_Policy,
          PropertyInsurance_Account: PropertyInsurance_Account,
          PropertyInsurance_InsuredName: PropertyInsurance_InsuredName,
          PropertyInsurance_Username: PropertyInsurance_Username,
          PropertyInsurance_Website: PropertyInsurance_Website,
          PropertyInsurance_Password: PropertyInsurance_Password,
          // INSURANCE: RENTER'S
          Insurance_Renters_Provider: Insurance_Renters_Provider,
          Insurance_Renters_Provider: Insurance_Renters_Provider,
          Insurance_Renters_AgentName: Insurance_Renters_AgentName,
          Insurance_Renters_Policy: Insurance_Renters_Policy,
          Insurance_Renters_Account: Insurance_Renters_Account,
          Insurance_Renters_InsuredName: Insurance_Renters_InsuredName,
          Insurance_Renters_Username: Insurance_Renters_Username,
          Insurance_Renters_Website: Insurance_Renters_Website,
          Insurance_Renters_Password: Insurance_Renters_Password,
          // MORTGAGE
          Mortgage_Account: Mortgage_Account,
          Mortgage_Account: Mortgage_Account,
          Mortgage_Name_of_the_Bank: Mortgage_Name_of_the_Bank,
          Mortgage_Address: Mortgage_Address,
          Mortgage_City: Mortgage_City,
          Mortgage_State: Mortgage_State,
          Mortgage_AmountToBePaid: Mortgage_AmountToBePaid,
          // HOMEOWNERS
          Homeowners_Name: Homeowners_Name,
          Homeowners_Name: Homeowners_Name,
          Homeowners_Phone: Homeowners_Phone,
          Homeowners_Email: Homeowners_Email,
          Homeowners_Website: Homeowners_Website,
          Homeowners_Username: Homeowners_Username,
          Homeowners_Password: Homeowners_Password,
          // UTILITIES
          Utilities_Provider: Utilities_Provider,
          Utilities_Provider: Utilities_Provider,
          Utilities_Account: Utilities_Account,
          Utilities_Website: Utilities_Website,
          Utilities_Username: Utilities_Username,
          Utilities_Password: Utilities_Password,
        },
      };
      let config = {
        formName: "Seccion_12",
        data: formData,
      };

      console.log("formData:", formData);
      console.log("config:", config);

      // Agrega el registro a Zoho Creator
      ZOHO.CREATOR.API.addRecord(config)
        .then(function (response) {
          console.log("API Response:", response);

          if (response.code == 3000) {
            let Creator_id = response.data.ID;
            console.log("Record ID:", Creator_id);
            alert("Record added successfully");
          } else {
            console.log("Error:", response.error);
            alert(response.error.message);
          }
        })
        .catch(function (error) {
          console.error("API Error:", error);
          alert("An error occurred while adding the record");
        });
    })
    .catch(function (error) {
      console.error("ZOHO.CREATOR.init() Error:", error);
      alert("An error occurred while initializing Zoho Creator");
    });
}
// Script para asegurar que los checkboxes no modificados no tengan valor
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (!this.checked) {
        this.value = "";
      } else {
        this.value = "Yes";
      }
    });
  });

  // Inicializa los valores de los checkboxes no modificados
  checkboxes.forEach(function (checkbox) {
    if (!checkbox.checked) {
      checkbox.value = "";
    }
  });
});
