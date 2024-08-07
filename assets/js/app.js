const products = [
  {
    id: 1,
    name: "Ice Cream 1",
    price: 10.99,
    description: "This is Ice Cream 1",
    image: "https://placehold.co/350x350/blue/white?text=Ice+cream+1",
  },
  {
    id: 2,
    name: "Ice Cream 2",
    price: 19.99,
    description: "This is Ice Cream 2",
    image: "https://placehold.co/350x350/blue/white?text=Ice+cream+2",
  },
  {
    id: 3,
    name: "Ice Cream 3",
    price: 14.99,
    description: "This is Ice Cream 3",
    image: "https://placehold.co/350x350/blue/white?text=Ice+cream+3",
  },
  {
    id: 4,
    name: "Ice Cream 4",
    price: 10.99,
    description: "This is Ice Cream 4",
    image: "https://placehold.co/350x350/blue/white?text=Ice+cream+4",
  },
  {
    id: 5,
    name: "Ice Cream 5",
    price: 19.99,
    description: "This is Ice Cream 2",
    image: "https://placehold.co/350x350/blue/white?text=Ice+cream+5",
  },
  {
    id: 6,
    name: "Ice Cream 6",
    price: 14.99,
    description: "This is Ice Cream 3",
    image: "https://placehold.co/350x350/blue/white?text=Ice+cream+6",
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
