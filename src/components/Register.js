import LogIn from "./LogIn";
export default function Register() {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";

  const modalContent = document.createElement("div");
  modalContent.className = "bg-white p-6 rounded shadow-lg w-full max-w-md relative";
  modalOverlay.appendChild(modalContent);

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.className = "absolute top-2 right-2 text-gray-500 hover:text-black";
  closeBtn.addEventListener("click", closeModal);
  modalContent.appendChild(closeBtn);

  // Function to close modal and clean up
  function closeModal() {
    document.removeEventListener("keydown", handleEscKey);
    modalOverlay.remove();
  }

  // ESC key handler
  function handleEscKey(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  // Attach keydown listener
  document.addEventListener("keydown", handleEscKey);

  // === Your existing form content goes here ===
  const heading = document.createElement("h2");
  heading.className = "text-2xl font-bold mb-4";
  heading.textContent = "Log In";
  modalContent.appendChild(heading);

  const form = document.createElement("form");
  modalContent.appendChild(form);

  const nameDiv = document.createElement("div");
  nameDiv.className = "mb-4";
  form.appendChild(nameDiv);

  const nameLabel = document.createElement("label");
  nameLabel.className = "block text-gray-700";
  nameLabel.textContent = "Name:";
  nameLabel.setAttribute("for", "name");
  nameDiv.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.className = "w-full px-3 py-2 border";
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("placeholder", "Enter yourName");
  nameDiv.appendChild(nameInput);


  const emailDiv = document.createElement("div");
  emailDiv.className = "mb-4"
  form.appendChild(emailDiv);

  const emailLabel = document.createElement("label");
  emailLabel.className = "block text-gray-700"
  emailLabel.textContent = "Email:";
  emailLabel.setAttribute("for", "email");
  emailDiv.appendChild(emailLabel);

  const email = document.createElement("input");
  email.className = "w-full px-3 py-2 border"
  email.setAttribute("type", "email");
  email.setAttribute("name", "email");
  email.setAttribute("id", "email");
  email.setAttribute("placeholder", "Email");
  emailDiv.appendChild(email);

  const passwordDiv = document.createElement("div");
  passwordDiv.className = "mb-4"
  form.appendChild(passwordDiv);

  const passwordLabel = document.createElement("label");
  passwordLabel.className = "block text-gray-700"
  passwordLabel.textContent = "Password:";
  passwordLabel.setAttribute("for", "password");
  passwordDiv.appendChild(passwordLabel);

  const password = document.createElement("input");
  password.className = "w-full px-3 py-2 border"
  password.setAttribute("type", "password");
  password.setAttribute("name", "password");
  password.setAttribute("id", "password");
  password.setAttribute("placeholder", "Password");
  passwordDiv.appendChild(password);

  const signUpDiv = document.createElement("div");
  signUpDiv.className = "mb-4"
  form.appendChild(signUpDiv);

  const signUpButton = document.createElement("button");
  signUpButton.className = "bg-red-500 text-white py-2 rounded w-full";
  signUpButton.textContent = "Sign Up";
  signUpButton.setAttribute("type", "submit");
  signUpDiv.appendChild(signUpButton);

  const loginDiv = document.createElement("div");
  loginDiv.className = "text-center"
  modalContent.appendChild(loginDiv);

  const accountSpan = document.createElement("span");
  accountSpan.className = "text-gray-700"
  accountSpan.textContent = "Already have an account?";
  loginDiv.appendChild(accountSpan);

  const loginButton = document.createElement("button");
  loginButton.className = "text-red-800"
  loginButton.textContent = "LogIn";
  loginButton.setAttribute("type", "button");
  loginButton.setAttribute("id", "signUpButton");
  loginDiv.appendChild(loginButton);
  loginButton.addEventListener("click", () => {
      closeModal();
      const modal = LogIn();
      document.body.appendChild(modal);
    });

  return modalOverlay;
}
