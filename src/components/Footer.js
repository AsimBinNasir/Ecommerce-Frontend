export default function Footer(loadPage) {

  // Create footer
  const footer = document.createElement("footer");
  footer.className = "bg-gray-800 text-white py-8 px-4 mt-10 md:px-16 lg:px-24";

  // Create container
  const container = document.createElement("div");
  container.className = "container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8";
  footer.appendChild(container);

  // Create first column
  const col1 = document.createElement("div");


  const col1Title = document.createElement("h3");
  col1Title.className = "text-xl font-semibold ";
  col1Title.textContent = "e-Shop";

  const col1Desc = document.createElement("p");
  col1Desc.className = "mt-4";
  col1Desc.textContent = "Your one stop shop for all things tech. Explore our wide range of products and enjoy seamless shopping experience.";

  col1.appendChild(col1Title);
  col1.appendChild(col1Desc);
  container.appendChild(col1);


  // Create second column
  const col2 = document.createElement("div");
  col2.className = "flex flex-col md:items-center text-center";
  container.appendChild(col2);

  const col2Title = document.createElement("h4");
  col2Title.className = "text-lg font-semibold";
  col2Title.textContent = "Quick Links";

  const col2Links = document.createElement("ul");
  col2Links.className = "mt-4 space-y-2 items-center flex flex-col";
  col2.appendChild(col2Title);
  col2.appendChild(col2Links);

  const pages = ["Home", "Shop", "About Us", "Contact Us"];
  pages.forEach(page => {
    const link = document.createElement("a");
    link.href = "#";
    link.className = "hover:underline";
    link.textContent = page;
    col2Links.appendChild(link);
    // Add click event to load the page

    link.addEventListener("click", () => {
      loadPage(page);
    });
    // dynamically load the component

  });

  // Create third column
  const col3 = document.createElement("div");
  container.appendChild(col3);

  // Social Media Links
  const col3Title = document.createElement("h4");
  col3Title.className = "text-lg font-semibold";
  col3Title.textContent = "Follow Us";
  col3.appendChild(col3Title);

  // Social Links
  const socialLinks = document.createElement("div");
  socialLinks.className = "flex space-x-4 mt-4";
  col3.appendChild(socialLinks);

  const socialMedia = [
    { name: "Facebook", icon: "fa-facebook", url: "https://www.facebook.com" },
    { name: "Twitter", icon: "fa-twitter", url: "https://www.twitter.com" },
    { name: "Instagram", icon: "fa-instagram", url: "https://www.instagram.com" },
    { name: "LinkedIn", icon: "fa-linkedin", url: "https://www.linkedin.com" }
  ];

  socialMedia.forEach(social => {
    const link = document.createElement("a");
    link.href = social.url;
    link.className = "hover:text-gray-400";
    const icon = document.createElement("i");
    icon.className = `fa-brands ${social.icon} text-lg`;
    link.appendChild(icon);
    link.setAttribute("aria-hidden", "true");
    socialLinks.appendChild(link);
  });

  // Email Subscription Form
  const form = document.createElement("form");
  form.className = "flex items-center justify-center mt-8";
  col3.appendChild(form);

  const input = document.createElement("input");
  input.type = "email";
  input.placeholder = "Enter your email";
  input.className = "border border-gray-600 bg-gray-800 rounded-l-lg p-2 w-full";
  form.appendChild(input);

  // Subscribe Button
  const subscribeButton = document.createElement("button");
  subscribeButton.type = "submit";
  subscribeButton.className = "bg-red-600 border border-gray-600 text-white font-semibold rounded-r-lg px-4 py-2";
  subscribeButton.textContent = "Subscribe";
  form.appendChild(subscribeButton);

  //Copyright
  const copyrightSection = document.createElement("div");
  copyrightSection.className = "mt-8 border-t border-gray-600 pt-4";
  footer.appendChild(copyrightSection);

  // Copyright Container
  const copyRightContainer = document.createElement("div");
  copyRightContainer.className = "container mx-auto flex flex-col md:flex-row justify-between items-center";
  copyrightSection.appendChild(copyRightContainer);

  // Copyright Text
  const copyrightText = document.createElement("p");
  copyrightText.className = "text-center text-gray-400";
  copyrightText.textContent = "© 2023 e-Shop. All rights reserved.";
  copyRightContainer.appendChild(copyrightText);

  //Privacy Policy and Terms and Conditions

  const termsPrivacyContainer = document.createElement("div");
  termsPrivacyContainer.className = "flex space-x-4 mt-4 md:mt-0";
  copyRightContainer.appendChild(termsPrivacyContainer);

  const termsAndConditions = document.createElement("a");
  termsAndConditions.href = "terms.html";
  termsAndConditions.className = "text-gray-400 hover:text-gray-200";
  termsAndConditions.textContent = "Terms and Conditions";
  termsPrivacyContainer.appendChild(termsAndConditions);

  const privacyPolicy = document.createElement("a");
  privacyPolicy.href = "privacy.html";
  privacyPolicy.className = "text-gray-400 hover:text-gray-200";
  privacyPolicy.textContent = "Privacy Policy";
  termsPrivacyContainer.appendChild(privacyPolicy);

  
  return footer;
}
