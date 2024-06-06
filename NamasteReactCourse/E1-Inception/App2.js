// If you want to create Nesting elements

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Namaste React 🚀!")
  )
);
*/

// If you want to create siblings, give third attribute as [sib1, sib2]


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {id:'sib1'}, "Namaste React 🚀!"),
        React.createElement("h1", {id:'sib2'}, "Hello React 🚀!")
      ]
    )
  );

// In case of sibling, react will console : require key error. So, give key to each sibling

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);