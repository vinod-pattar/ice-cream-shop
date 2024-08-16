const products = [
    {
      id: 1,
      name: "Ice Cream 1",
      price: 10.99,
      description: "This is Ice Cream 1",
      image: "https://tse3.mm.bing.net/th?id=OIP.ln30sLX6wNSm6fnka9tXVQHaEo&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      name: "Ice Cream 2",
      price: 19.99,
      description: "This is Ice Cream 2",
      image: "https://wallpapercave.com/wp/wp3783205.jpg",
    },
    {
      id: 3,
      name: "Ice Cream 3",
      price: 14.99,
      description: "This is Ice Cream 3",
      image: "https://images.alphacoders.com/153/thumb-1920-153783.jpg",
    },
    {
      id: 4,
      name: "Ice Cream 4",
      price: 10.99,
      description: "This is Ice Cream 4",
      image: "https://tse1.mm.bing.net/th?id=OIP.fc1x4FH3fs87Efyf1ew4HgHaEo&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      name: "Ice Cream 5",
      price: 19.99,
      description: "This is Ice Cream 2",
      image: "https://tse3.mm.bing.net/th?id=OIP._bAsvEdo2gDJv-4z27_B9wHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 6,
      name: "Ice Cream 6",
      price: 14.99,
      description: "This is Ice Cream 3",
      image: "https://tse2.mm.bing.net/th?id=OIP.O1iDeeu1lbB3MrVrKQR_DwHaEJ&pid=Api&P=0&h=180",
    },
  ];

const productsElement = document.getElementById("products");

/**
 * Creates an HTML element with the specified tag name, attributes, and content,
 * then appends it to a parent element based on the provided selector.
 *
 * @param {string} tagName - The tag name of the element to be created.
 * @param {Object} [attributes={}] - The attributes to be set for the element.
 * @param {string} [content=""] - The inner content of the element.
 * @param {string} [parentSelector="body"] - The selector for the parent element.
 */
function createAndAppendElement(
  tagName,
  attributes = {},
  content = "",
  parentSelector = "body"
) {
  // Create the element with the specified tag name
  const element = document.createElement(tagName); // "div"

  // Set the attributes of the element
  // for (const [key, value] of Object.entries(attributes)) { // { class: "card h-100", id: `product-${product.id}` }
  //   element.setAttribute(key, value);
  // }
  for (let key in attributes) {
    // class
    if (attributes.hasOwnProperty(key)) {
      // check class
      element.setAttribute(key, attributes[key]); // class, card h-100
    }
  }

  // Set the inner content of the element
  element.innerHTML = content; // ""

  // Find the parent element based on the selector and append the new element to it
  const parentElement = document.querySelector(parentSelector) || document.body;
  parentElement.appendChild(element);
}

products.forEach((product) => {
  createAndAppendElement(
    "div",
    { class: "col-md-4 mb-4", id: `column-${product.id}` },
    "",
    `#products`
  );

  createAndAppendElement(
    "div",
    { class: "card h-100", id: `product-${product.id}` },
    "",
    `#column-${product.id}`
  );

  createAndAppendElement(
    "img",
    { class: "card-img-top", src: product.image, alt: product.name },
    "",
    `#product-${product.id}`
  );

  createAndAppendElement(
    "div",
    { class: "card-body" },
    "",
    `#product-${product.id}`
  );
  createAndAppendElement(
    "h5",
    { class: "card-title" },
    product.name,
    `#product-${product.id} > .card-body`
  );
  createAndAppendElement(
    "p",
    { class: "card-text" },
    product.description,
    `#product-${product.id} > .card-body`
  );
  createAndAppendElement(
    "p",
    { class: "card-text" },
    `Price: ${product.price}`,
    `#product-${product.id} > .card-body`
  );

  createAndAppendElement(
    "div",
    { class: `d-flex buttonGroup-${product.id} justify-content-end gap-3` },
    "",
    `#product-${product.id} > .card-body`
  );

  createAndAppendElement(
    "a",
    { class: "btn btn-primary", href: "#" },
    "View details",
    `.buttonGroup-${product.id}`
  );
  createAndAppendElement(
    "a",
    { class: "btn btn-info", href: "#" },
    "Add to cart",
    `.buttonGroup-${product.id}`
  );
});

const enquiryForm = document.getElementById("enquiryForm");

function validation({
  firstName,
  lastName,
  mobile,
  email,
  iceCreamProduct,
  enquiryMessage,
}) {
  let isValid = true;
  let errorMessages = [];
  document.getElementById("errorMessages").innerHTML = "";

  // Validate firstName
  if (firstName.length < 2) {
    isValid = false;
    errorMessages.push("First Name must be at least 2 characters long");
  }
  if (firstName.length > 20) {
    isValid = false;
    errorMessages.push("First Name must be less than 20 characters.");
  }

  if (lastName.length < 2) {
    isValid = false;
    errorMessages.push("Last Name must be at least 2 characters long");
  }

  if (lastName.length > 20) {
    isValid = false;
    errorMessages.push("Last Name must be less than 20 characters.");
  }

  const mobilePattern = /^[6-9]\d{9}$/;

  if (!mobilePattern.test(mobile)) {
    isValid = false;
    errorMessages.push("Mobile number must be 10 digits long.");
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    errorMessages.push("Please enter a valid email address.");
  }

  const productsOptions = [
    "Ice cream 1",
    "Ice cream 2",
    "Ice cream 3",
    "Ice cream 4",
    "Ice cream 5",
    "Ice cream 6",
  ];

  if (!productsOptions.includes(iceCreamProduct)) {
    isValid = false;
    errorMessages.push("Please select an ice cream product.");
  }

  if (enquiryMessage.length < 10) {
    isValid = false;
    errorMessages.push("Enquiry Message must be at least 10 characters long.");
  }
  if (enquiryMessage.length > 1024) {
    isValid = false;
    errorMessages.push(
      "Enquiry Message must be less than 1024 characters long."
    );
  }
  if (!isValid) {
    errorMessages.forEach((message) => {
      createAndAppendElement(
        "div",
        { class: "alert alert-danger", role: "alert" },
        message,
        "#errorMessages"
      );
    });
  }
  return isValid;
}

enquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = event.target.elements.firstName.value.trim();
  const lastName = event.target.elements.lastName.value.trim();
  const mobile = event.target.elements.mobile.value.trim();
  const email = event.target.elements.email.value.trim();
  const iceCreamProduct = event.target.elements.iceCreamProduct.value.trim();
  const enquiryMessage = event.target.elements.enquiryMessage.value.trim();

  console.log(
    firstName,
    lastName,
    mobile,
    email,
    iceCreamProduct,
    enquiryMessage
  );

  if (
    validation({
      firstName,
      lastName,
      mobile,
      email,
      iceCreamProduct,
      enquiryMessage,
    })
  ) {
    // const formData = new FormData();
    // formData.append("firstName", firstName);
    // formData.append("lastName", lastName);
    // formData.append("mobile", mobile);
    // formData.append("email", email);
    // formData.append("iceCreamProduct", iceCreamProduct);
    // formData.append("enquiryMessage", enquiryMessage);
    fetch(
      `https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY0MDYzMzA0MzU1MjY0NTUzYzUxMzAi_pc`,
      {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          mobile,
          email,
          iceCreamProduct,
          enquiryMessage,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        console.log("Enquiry submitted successfully");
        createAndAppendElement(
          "div",
          { class: "alert alert-success", role: "alert" },
          "We have received your enquiry and will get back to you!",
          "#successMessage"
        );
        enquiryForm.reset();
      } else {
        console.error("Failed to submit enquiry");
        alert("Failed to submit enquiry");
      }
    });
  }
});
