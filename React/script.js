const rootDiv = document.createElement("div");
rootDiv.id = "root";
document.body.appendChild(rootDiv);

const heading = React.createElement("h1", null, "Aditya Hans");

const button = React.createElement(
  "button",
  {
    onClick: () => alert("React Button Clicked 🚀")
  },
  "Click Me"
);

const container = React.createElement(
  "div",
  null,
  heading,
  button
);

ReactDOM.createRoot(document.getElementById("root")).render(container);