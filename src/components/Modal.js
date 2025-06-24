// components/Modal.js

export default function AddressModal(onChangeCallback) {
  const modalOverlay = document.createElement("div");
  modalOverlay.className =
    "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 hidden";
  modalOverlay.id = "address-modal";

  const modalBox = document.createElement("div");
  modalBox.className = "relative bg-white p-6 rounded-lg w-full max-w-md shadow-xl";

  const closeBtn = document.createElement("button");
  closeBtn.className = "absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold";
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", () => {
    modalOverlay.classList.add("hidden");
  });
  modalBox.appendChild(closeBtn);

  const modalTitle = document.createElement("h2");
  modalTitle.className = "text-lg font-semibold mb-4";
  modalTitle.textContent = "Change Shipping Address";
  modalBox.appendChild(modalTitle);

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter your new address";
  input.className = "w-full border border-gray-300 p-2 mb-4 rounded";
  modalBox.appendChild(input);

  const buttonRow = document.createElement("div");
  buttonRow.className = "flex justify-end space-x-4";

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "px-4 py-2 bg-gray-300 rounded hover:bg-gray-400";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    modalOverlay.classList.add("hidden");
  });
  buttonRow.appendChild(cancelBtn);

  const changeBtn = document.createElement("button");
  changeBtn.className = "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700";
  changeBtn.textContent = "Change";
  const submitAddress = () => {
    const newAddress = input.value.trim();
    if (newAddress !== "") {
      onChangeCallback(newAddress); // pass new address back
      modalOverlay.classList.add("hidden");
    }
  };

  changeBtn.addEventListener("click", submitAddress);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      submitAddress();
    }
  });
  buttonRow.appendChild(changeBtn);

  modalBox.appendChild(buttonRow);
  modalOverlay.appendChild(modalBox);

  return modalOverlay;
}
