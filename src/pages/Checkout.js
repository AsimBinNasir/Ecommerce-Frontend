import {
  getCartItems,
  refreshCartData,
  clearCart,
  updateCartBadge
} from "../utils/addProducts.js";


export default function Checkout(loadPage) {

  refreshCartData();
  const cartItems = getCartItems();

  const section = document.createElement("section");
  section.id = "page-content";
  section.className = "mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24";

  const container = document.createElement("div");
  section.appendChild(container);

  const heading = document.createElement("h3");
  heading.className = "text-2xl text-center font-semibold mb-4";
  heading.textContent = "CHECKOUT";
  container.appendChild(heading);

  const totalContainer = document.createElement("div");
  totalContainer.className = "flex flex-col md:flex-row justify-between space-x-10 mt-8";
  container.appendChild(totalContainer);

  const checkoutContainer = document.createElement("div");
  checkoutContainer.className = "md:w-2/3";
  totalContainer.appendChild(checkoutContainer);

  // Billing Info Wrapper
  const billingDiv = document.createElement("div");
  billingDiv.className = "border p-2 mb-6";
  checkoutContainer.appendChild(billingDiv);

  const billingHeadingDiv = document.createElement("div");
  billingHeadingDiv.className = "flex items-center justify-between";
  billingDiv.appendChild(billingHeadingDiv);

  const billingHeading = document.createElement("h3");
  billingHeading.className = "text-lg font-semibold mb-2";
  billingHeading.textContent = "Billing Information";
  billingHeadingDiv.appendChild(billingHeading);

  const angleUpIcon = document.createElement("i");
  angleUpIcon.className = "fa fa-angle-up";
  angleUpIcon.setAttribute("aria-hidden", "true");
  billingHeadingDiv.appendChild(angleUpIcon);
  angleUpIcon.addEventListener("click", () => {
    angleUpIcon.classList.toggle("rotate-180");
    billingInformationDiv.classList.toggle("hidden")
  });

  const billingInformationDiv = document.createElement("div");
  billingInformationDiv.className = "space-y-4 hidden";
  billingDiv.appendChild(billingInformationDiv);

  // Name
  const billingNameInformation = document.createElement("div");
  billingInformationDiv.appendChild(billingNameInformation);

  const billingNameLabel = document.createElement("label");
  billingNameLabel.className = "block text-gray-700";
  billingNameLabel.textContent = "Name";
  billingNameInformation.appendChild(billingNameLabel);

  const billingNameInput = document.createElement("input");
  billingNameInput.type = "text";
  billingNameInput.name = "name";
  billingNameInput.placeholder = "Enter your Name";
  billingNameInput.className = "w-full py-2 px-3 border";
  billingNameInput.required = true;
  billingNameInformation.appendChild(billingNameInput);

  // Email
  const billingEmailInformation = document.createElement("div");
  billingInformationDiv.appendChild(billingEmailInformation);

  const billingEmailLabel = document.createElement("label");
  billingEmailLabel.className = "block text-gray-700";
  billingEmailLabel.textContent = "Email";
  billingEmailInformation.appendChild(billingEmailLabel);

  const billingEmailInput = document.createElement("input");
  billingEmailInput.type = "email";
  billingEmailInput.name = "email";
  billingEmailInput.placeholder = "Enter your Email";
  billingEmailInput.className = "w-full py-2 px-3 border";
  billingEmailInformation.appendChild(billingEmailInput);

  // Phone
  const billingPhoneInformation = document.createElement("div");
  billingInformationDiv.appendChild(billingPhoneInformation);

  const billingPhoneLabel = document.createElement("label");
  billingPhoneLabel.className = "block text-gray-700";
  billingPhoneLabel.textContent = "Phone";
  billingPhoneInformation.appendChild(billingPhoneLabel);

  const billingPhoneInput = document.createElement("input");
  billingPhoneInput.type = "text";
  billingPhoneInput.name = "phone";
  billingPhoneInput.placeholder = "Enter your Phone Number";
  billingPhoneInput.className = "w-full py-2 px-3 border";
  billingPhoneInput.required = true;
  billingPhoneInformation.appendChild(billingPhoneInput);


  // Shipping Information Container
  const shippingDiv = document.createElement("div");
  shippingDiv.className = "border p-2 mb-6";
  checkoutContainer.appendChild(shippingDiv);

  const shippingHeadingDiv = document.createElement("div");
  shippingHeadingDiv.className = "flex items-center justify-between";
  shippingDiv.appendChild(shippingHeadingDiv);

  const shippingHeading = document.createElement("h3");
  shippingHeading.className = "text-lg font-semibold mb-2";
  shippingHeading.textContent = "Shipping Information";
  shippingHeadingDiv.appendChild(shippingHeading);

  const shippingAngleIcon = document.createElement("i");
  shippingAngleIcon.className = "fa fa-angle-up";
  shippingAngleIcon.setAttribute("aria-hidden", "true");
  shippingHeadingDiv.appendChild(shippingAngleIcon);

  // Container for shipping inputs (initially hidden)
  const shippingInformationDiv = document.createElement("div");
  shippingInformationDiv.className = "space-y-4 hidden";
  shippingDiv.appendChild(shippingInformationDiv);

  // Toggle shipping info on icon click
  shippingAngleIcon.addEventListener("click", () => {
    shippingAngleIcon.classList.toggle("rotate-180");
    shippingInformationDiv.classList.toggle("hidden");
  });

  // Address
  const shippingAddressInformation = document.createElement("div");
  shippingInformationDiv.appendChild(shippingAddressInformation);

  const shippingAddressLabel = document.createElement("label");
  shippingAddressLabel.className = "block text-gray-700";
  shippingAddressLabel.textContent = "Address";
  shippingAddressInformation.appendChild(shippingAddressLabel);

  const shippingAddressInput = document.createElement("input");
  shippingAddressInput.type = "text";
  shippingAddressInput.name = "address";
  shippingAddressInput.placeholder = "Enter your Address";
  shippingAddressInput.className = "w-full py-2 px-3 border";
  shippingAddressInput.required = true;
  shippingAddressInformation.appendChild(shippingAddressInput);

  // City
  const shippingCityInformation = document.createElement("div");
  shippingInformationDiv.appendChild(shippingCityInformation);

  const shippingCityLabel = document.createElement("label");
  shippingCityLabel.className = "block text-gray-700";
  shippingCityLabel.textContent = "City";
  shippingCityInformation.appendChild(shippingCityLabel);

  const shippingCityInput = document.createElement("input");
  shippingCityInput.type = "text";
  shippingCityInput.name = "city";
  shippingCityInput.placeholder = "Enter your City";
  shippingCityInput.className = "w-full py-2 px-3 border";
  shippingCityInput.required = true;
  shippingCityInformation.appendChild(shippingCityInput);

  // Zip Code
  const shippingZipInformation = document.createElement("div");
  shippingInformationDiv.appendChild(shippingZipInformation);

  const shippingZipLabel = document.createElement("label");
  shippingZipLabel.className = "block text-gray-700";
  shippingZipLabel.textContent = "Zip Code";
  shippingZipInformation.appendChild(shippingZipLabel);

  const shippingZipInput = document.createElement("input");
  shippingZipInput.type = "text";
  shippingZipInput.name = "zipcode";
  shippingZipInput.placeholder = "Enter your Zip Code";
  shippingZipInput.className = "w-full py-2 px-3 border";
  shippingZipInput.required = true;
  shippingZipInformation.appendChild(shippingZipInput);

  // Payment Method Container
  const paymentDiv = document.createElement("div");
  paymentDiv.className = "border p-2 mb-6";
  checkoutContainer.appendChild(paymentDiv);

  const paymentHeadingDiv = document.createElement("div");
  paymentHeadingDiv.className = "flex items-center justify-between";
  paymentDiv.appendChild(paymentHeadingDiv);

  const paymentHeading = document.createElement("h3");
  paymentHeading.className = "text-lg font-semibold mb-2";
  paymentHeading.textContent = "Payment Method";
  paymentHeadingDiv.appendChild(paymentHeading);

  const paymentAngleIcon = document.createElement("i");
  paymentAngleIcon.className = "fa fa-angle-up";
  paymentAngleIcon.setAttribute("aria-hidden", "true");
  paymentHeadingDiv.appendChild(paymentAngleIcon);

  // Container for payment options (initially hidden)
  const paymentInformationDiv = document.createElement("div");
  paymentInformationDiv.className = "space-y-4 hidden";
  paymentDiv.appendChild(paymentInformationDiv);

  // Toggle visibility
  paymentAngleIcon.addEventListener("click", () => {
    paymentAngleIcon.classList.toggle("rotate-180");
    paymentInformationDiv.classList.toggle("hidden");
  });

  // Cash on Delivery Option
  const codOption = document.createElement("div");
  codOption.className = "flex items-center space-x-2";
  paymentInformationDiv.appendChild(codOption);

  const codRadio = document.createElement("input");
  codRadio.type = "radio";
  codRadio.name = "payment";
  codRadio.value = "cod";
  codRadio.id = "cod";
  codRadio.className = "form-radio";
  codRadio.setAttribute("checked", "checked")
  codOption.appendChild(codRadio);

  const codLabel = document.createElement("label");
  codLabel.setAttribute("for", "cod");
  codLabel.className = "text-gray-700 ";
  codLabel.textContent = "Cash on Delivery";
  codOption.appendChild(codLabel);

  // Debit Card Option
  const cardOption = document.createElement("div");
  cardOption.className = "flex items-center space-x-2";
  paymentInformationDiv.appendChild(cardOption);

  const cardRadio = document.createElement("input");
  cardRadio.type = "radio";
  cardRadio.name = "payment";
  cardRadio.value = "debit";
  cardRadio.id = "debit";
  cardRadio.className = "form-radio";
  cardOption.appendChild(cardRadio);

  // Toggle visibility of card details section
  codRadio.addEventListener("change", () => {
    if (codRadio.checked) {
      cardDetailsDiv.classList.add("hidden");

      nameInput.required = false;
      numberInput.required = false;
      expiryInput.required = false;
      cvvInput.required = false;
    }
  });
  cardRadio.addEventListener("change", () => {
    if (cardRadio.checked) {
      cardDetailsDiv.classList.remove("hidden")

      nameInput.required = true;
      numberInput.required = true;
      expiryInput.required = true;
      cvvInput.required = true;
    };
  });

  const cardLabel = document.createElement("label");
  cardLabel.setAttribute("for", "debit");
  cardLabel.className = "text-gray-700";
  cardLabel.textContent = "Debit Card";
  cardOption.appendChild(cardLabel);

  // Debit Card Information Section (initially hidden)
  const cardDetailsDiv = document.createElement("div");
  cardDetailsDiv.className = "bg-gray-100 p-4 mt-4 rounded space-y-4 hidden";
  paymentInformationDiv.appendChild(cardDetailsDiv);

  // Heading
  const cardHeading = document.createElement("h4");
  cardHeading.className = "text-md font-semibold text-gray-700";
  cardHeading.textContent = "Debit Card Information";
  cardDetailsDiv.appendChild(cardHeading);

  // Name on Card
  const nameField = document.createElement("div");
  cardDetailsDiv.appendChild(nameField);

  const nameLabel = document.createElement("label");
  nameLabel.className = "block text-gray-700";
  nameLabel.textContent = "Cardholder Name";
  nameField.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.className = "w-full py-2 px-3 border";
  nameInput.placeholder = "Enter cardholder name";
  // nameInput.required = true;
  nameField.appendChild(nameInput);

  // Card Number
  const numberField = document.createElement("div");
  cardDetailsDiv.appendChild(numberField);

  const numberLabel = document.createElement("label");
  numberLabel.className = "block text-gray-700";
  numberLabel.textContent = "Card Number";
  numberField.appendChild(numberLabel);

  const numberInput = document.createElement("input");
  numberInput.type = "text";
  numberInput.className = "w-full py-2 px-3 border";
  numberInput.placeholder = "1234 5678 9012 3456";
  // numberInput.required = true;
  numberField.appendChild(numberInput);

  // Expiry & CVV in a row
  const rowDiv = document.createElement("div");
  rowDiv.className = "flex space-x-4";
  cardDetailsDiv.appendChild(rowDiv);

  // Expiry
  const expiryDiv = document.createElement("div");
  expiryDiv.className = "w-1/2";
  rowDiv.appendChild(expiryDiv);

  const expiryLabel = document.createElement("label");
  expiryLabel.className = "block text-gray-700";
  expiryLabel.textContent = "Expiry Date";
  expiryDiv.appendChild(expiryLabel);

  const expiryInput = document.createElement("input");
  expiryInput.type = "text";
  expiryInput.placeholder = "MM/YY";
  expiryInput.className = "w-full py-2 px-3 border";
  // expiryInput.required = true;
  expiryDiv.appendChild(expiryInput);

  // CVV
  const cvvDiv = document.createElement("div");
  cvvDiv.className = "w-1/2";
  rowDiv.appendChild(cvvDiv);

  const cvvLabel = document.createElement("label");
  cvvLabel.className = "block text-gray-700";
  cvvLabel.textContent = "CVV";
  cvvDiv.appendChild(cvvLabel);

  const cvvInput = document.createElement("input");
  cvvInput.type = "text";
  cvvInput.placeholder = "123";
  cvvInput.className = "w-full py-2 px-3 border";
  // cvvInput.required = true;
  cvvDiv.appendChild(cvvInput);



  // Right side Order summary)
  const orderSummary = document.createElement("div");
  orderSummary.className = "md:w-1/3 bg-white p-4 rounded-lg shadow-md border mt-8 md:self-start";
  totalContainer.appendChild(orderSummary);

  const orderSummaryHeading = document.createElement("h3");
  orderSummaryHeading.className = "text-lg font-semibold text-center mb-4";
  orderSummaryHeading.textContent = "Order Summary";
  orderSummary.appendChild(orderSummaryHeading);

  cartItems.forEach(product => {
    const item = document.createElement("div");
    item.className = "flex justify-between";
    orderSummary.appendChild(item);

    const productDiv = document.createElement("div");
    productDiv.className = "flex items-center";
    item.appendChild(productDiv);

    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
    productImage.className = "w-16 h-16 object-contain rounded";
    productDiv.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.className = "ml-4";
    productDiv.appendChild(productInfo);

    const productName = document.createElement("h4");
    productName.className = "text-sm font-semibold";
    productName.textContent = product.name;
    productInfo.appendChild(productName);

    const productPriceQuantity = document.createElement("p");
    productPriceQuantity.className = "text-gray-600";
    productPriceQuantity.textContent = `${product.count} x $${product.price.toFixed(2)}`;
    productInfo.appendChild(productPriceQuantity);

    const productTotalDiv = document.createElement("div");
    productTotalDiv.className = "text-gray-600";
    item.appendChild(productTotalDiv);

    const productTotal = document.createElement("span");
    productTotal.textContent = `$${(product.price * product.count).toFixed(2)}`;
    productTotalDiv.appendChild(productTotal);


  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "border-t pt-4 mt-4";
  orderSummary.appendChild(totalDiv);

  const totalPriceDiv = document.createElement("div");
  totalPriceDiv.className = "flex justify-between";
  totalDiv.appendChild(totalPriceDiv);

  const totalPriceSpan = document.createElement("span");
  totalPriceSpan.textContent = "Total Price";
  totalPriceDiv.appendChild(totalPriceSpan);

  const totalPrice = document.createElement("span");
  totalPrice.className = "font-semibold";
  totalPrice.textContent = `$${cartItems.reduce((total, product) => total + product.price * product.count, 0).toFixed(2)}`;
  totalPriceDiv.appendChild(totalPrice);

  const placeOrderButtonDiv = document.createElement("div");
  placeOrderButtonDiv.className = "flex justify-center mt-4";
  orderSummary.appendChild(placeOrderButtonDiv);

  const placeOrderButton = document.createElement("button");
  placeOrderButton.className = "w-full py-2 text-white bg-red-600 hover:bg-red-700";
  placeOrderButton.textContent = "Place Order";
  placeOrderButtonDiv.appendChild(placeOrderButton)
  placeOrderButton.addEventListener("click", (event) => {
    event.preventDefault();

    const requiredInputs = document.querySelectorAll("input[required]");

    let allValid = true;

    const orderInfo = {
      name: billingNameInput.value.trim(),
      email: billingEmailInput.value.trim(),
      phone: billingPhoneInput.value.trim(),
      address: shippingAddressInput.value.trim(),
      city: shippingCityInput.value.trim(),
      zipcode: shippingZipInput.value.trim(),
      paymentMethod: cardRadio.checked ? "Debit Card" : "Cash on Delivery",
      yourProduct: cartItems.map((product) => ({
        name: product.name,
        price: product.price,
        count: product.count,
      })),
      total: cartItems.reduce((total, product) => total + product.price * product.count, 0).toFixed(2),
    };

    // Optional: add debit card details if selected
    if (cardRadio.checked) {
      orderInfo.card = {
        holderName: nameInput.value.trim(),
        cardNumber: numberInput.value.trim(),
        expiry: expiryInput.value.trim(),
        cvv: cvvInput.value.trim(),
      };
    }

    requiredInputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.reportValidity();  // Show native popup
        allValid = false;
        return; // stops at the first invalid input
      }
    });

    if (!allValid) return;

    clearCart();
    cartItems.length = 0; // Clear in-memory array
    updateCartBadge();
    loadPage("OrderConfirmation", orderInfo); // send data
    window.scrollTo({ top: 0, behavior: "smooth" });
  });




  return section;
}
