const { createElement: _ } = React;

const cards = [
    {
        src: "images/1.png",
        title: "Lorem Ipsum",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
        src: "images/2.png",
        title: "Lorem Ipsum",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
    {
        src: "images/3.png",
        title: "Lorem Ipsum",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
];

const boxes = cards.map((card, idx) =>
    _(
        "div",
        { className: "box", key: idx },
        _("img", { src: card.src }),
        _("h2", {}, card.title),
        _("p", {}, card.description)
    )
);

const wrapper = _("div", { id: "container" }, boxes);

ReactDOM.createRoot(document.querySelector("#root")).render(wrapper);
