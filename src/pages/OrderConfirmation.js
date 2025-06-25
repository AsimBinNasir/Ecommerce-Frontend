export default function OrderConfirmation(orderInfo) {
  const section = document.createElement("section");
  section.id = "page-content";
  section.className = "py-12 px-4 md:px-16 lg:px-24 text-center";

  // Heading
  const heading = document.createElement("h2");
  heading.className = "text-3xl font-bold mb-6";
  heading.textContent = "Thank you for your order!";
  section.appendChild(heading);

  // Subtext
  const subtext = document.createElement("p");
  subtext.className = "text-lg text-gray-700 mb-8";
  subtext.textContent = "We’ve received your order and will contact you soon.";
  section.appendChild(subtext);

  // Container for order info
  const infoContainer = document.createElement("div");
  infoContainer.className = "text-left max-w-xl mx-auto space-y-4 bg-gray-50 p-6 rounded shadow";
  section.appendChild(infoContainer);

  // Helper function to create rows
  function createInfoRow(label, value) {
    const row = document.createElement("p");
    row.innerHTML = `<strong>${label}:</strong> ${value}`;
    return row;
  }

  infoContainer.appendChild(createInfoRow("Name", orderInfo.name));
  infoContainer.appendChild(createInfoRow("Email", orderInfo.email));
  infoContainer.appendChild(createInfoRow("Phone", orderInfo.phone));
  infoContainer.appendChild(createInfoRow("Address", `${orderInfo.address}, ${orderInfo.city} - ${orderInfo.zipcode}`));
  infoContainer.appendChild(createInfoRow("Payment Method", orderInfo.paymentMethod));
  if (orderInfo.paymentMethod === "Debit Card") {
    infoContainer.appendChild(createInfoRow("Total Paid", `$${orderInfo.total}`));
  }
  else{
    infoContainer.appendChild(createInfoRow("Total Payment", `$${orderInfo.total}`));
  }
  

  // If card info exists (for Debit Card)
  if (orderInfo.card) {
    const cardHeading = document.createElement("h4");
    cardHeading.className = "text-md font-semibold mt-4";
    cardHeading.textContent = "Card Details";
    infoContainer.appendChild(cardHeading);

    infoContainer.appendChild(createInfoRow("Cardholder", orderInfo.card.holderName));
    infoContainer.appendChild(createInfoRow("Card Number", orderInfo.card.cardNumber));
    infoContainer.appendChild(createInfoRow("Expiry Date", orderInfo.card.expiry));
  }

  // Back to Home button
  const backBtn = document.createElement("button");
  backBtn.textContent = "Back to Home";
  backBtn.className = "mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded";
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    location.reload(); 
  });

  section.appendChild(backBtn);

  return section;
}
