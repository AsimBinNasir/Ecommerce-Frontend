export default function infoSection() {
  const infoItems = [
    {
      iconClass: "fas fa-shipping-fast text-red-600 text-3xl",
      title: 'Free Shipping',
      description: 'Get your ordersdelivered with no extra cost',
    },
    {
      iconClass: "fas fa-headset text-red-600 text-3xl",
      title: '24/7 Support',
      description: 'We are here to assist you anytime, anywhere',
    },
    {
      iconClass: "fa-solid fa-money-bill-wave text-red-600 text-3xl",
      title: '100% Money Back',
      description: 'If you are not satisfied, we will refund your money',

    },
    {
      iconClass: "fas fa-lock text-red-600 text-3xl",
      title: 'Secure Payments',
      description: 'Your payment information is safe with us',
    },
    {
      iconClass: "fa fa-tag text-red-600 text-3xl",
      title: 'Discount Offers',
      description: 'Enjoy exclusive discounts on selected products',
    }
  ];

  const section = document.createElement("div");
  section.className = "bg-white pb-4 pt-12"

  const container = document.createElement("div");
  container.className = "container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4";

  const iconElements = infoItems.map(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "flex flex-col items-center text-center p-4 border rounded-lg shadow-md transition transition-transform duration-300 hover:scale-105 cursor-pointer";
    const icon = document.createElement("i");
    icon.className = item.iconClass;
    const title = document.createElement("h3");
    title.className = "text-xl font-semibold mt-4";
    title.textContent = item.title;
    const description = document.createElement("p");
    description.className = "text-gray-600 mt-2";
    description.textContent = item.description;
    itemDiv.appendChild(icon);
    itemDiv.appendChild(title);
    itemDiv.appendChild(description);
    return itemDiv;
  });
  iconElements.forEach(iconElement => container.appendChild(iconElement));

  section.appendChild(container);
  return section;

};
