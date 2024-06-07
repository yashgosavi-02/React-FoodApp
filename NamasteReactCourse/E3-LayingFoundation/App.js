import React from "react";
import ReactDOM from "react-dom/client";

// React Core Element
// const heading = React.createElement('h1',{id:'heading'},'Hello, React :)');

// JSX Element
const description = <p id="description">You can get this course on NamasteDev.com</p>;
const SubHeading = () => (
    <h3 id="sub-heading"> This is the Best React course by Akshay Saini!!</h3>
  );
const HeadingComponent = () => {
  return (
    <>
      <h1 id="heading">Namaste React 🚀</h1>
      {/* We can also execute the component like a function */}
      {SubHeading()}
      {/* putting element into component '{elementName}'; We can use {} to put JS code inside JSX */}
        {description}
    </>
  );
};

// HeadingComponent and Heading2 are the same

// console.log(HeadingComponent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering the element
// root.render(heading);

// rendering the mulitple component
/*
root.render(
  <>
    <HeadingComponent />
    <Heading2 />
  </>
);*/

root.render(<HeadingComponent />);
