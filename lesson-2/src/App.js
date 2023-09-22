import ReactDOM from "react-dom/client";
import React from "react";

const container = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World"),
    React.createElement("h1", {}, "Salom Dunyo")
);

ReactDOM.createRoot(document.querySelector("#root")).render(container);

// 1. npm i -D parcel
// 2. npm i react
// 3. npm i react-dom

// const boxes = cards.map((card, idx) =>
//     _(
//         "div",
//         { className: "box", key: idx },
//         _("img", { src: card.src }),
//         _("h2", {}, card.title),
//         _("p", {}, card.description)
//     )
// );

// const wrapper = _("div", { id: "container" }, boxes);

// ReactDOM.createRoot(document.querySelector("#root")).render(wrapper);
