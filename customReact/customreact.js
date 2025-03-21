// We will try to create our own react library

function customeRender(reactElement, container) {
  /*  
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */
  // The problem with the above code is that we have to manually set attributes, what if we had 3, 4, 10, 15 attributes, we need a more iterative approach

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if (prop === "children") continue
    domElement.setAttribute(prop, reactElement.props[prop]) //reactElement.props[prop] we need to use props[prop] instead of props.prop because then javascript will assume that there is a literal key named prop but we want the variable prop which we are using in the loop so we use props[prop]
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.getElementById("root");

customeRender(reactElement, mainContainer);

// In this file, we tried to replicate how javascript displays HTML tags on the webpage. We created a custom element then wrote a custom render function for that object and tried to mimic javascript's functionality.
