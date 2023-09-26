import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", {}, "Hello");
const fruitsTitle = [
    {
        img: 'https://thumbs.dreamstime.com/b/fruit-2999796.jpg',
        title: 'Vegetables',
        description: '165 products',
    },
    {
        img: 'https://thumbs.dreamstime.com/b/fruit-2999796.jpg',
        title: 'Fresh Fruit',
        description: '165 products',
    },
    {
        img: 'https://thumbs.dreamstime.com/b/fruit-2999796.jpg',
        title: 'Fish',
        description: '165 products',
    },
    {
        img: 'https://thumbs.dreamstime.com/b/fruit-2999796.jpg',
        title: 'Meat',
        description: '165 products',
    },
    {
        img: 'https://thumbs.dreamstime.com/b/fruit-2999796.jpg',
        title: 'Meat',
        description: '165 products',
    },
];

const app = fruitsTitle.map((fruit) => {
    return (
        <div className="box">
            <img src={fruit.img} width="200px" height="200px" loading="lazy" />
            <h4 className="title">{fruit.title}</h4>
            <p className="description">{fruit.description}</p>
        </div>
    );
});

const heading = <div id="container">{app}</div>;

ReactDOM.createRoot(document.querySelector('#root')).render(heading);

// const dataCards = [
//     {
//         img: "https://thumbs.dreamstime.com/b/fruit-2999796.jpg",
//         title: "Big Potatoes",
//         price: "14.99",
//         star: 5,
//     },
//     {
//         img: "https://thumbs.dreamstime.com/b/fruit-2999796.jpg",
//         title: "Big Potatoes",
//         price: "14.99",
//         star: 4,
//     },
// ];

// const cards = (
//     <div className="container">
//         {dataCards.map((fruit) => {
//             return (
//                 <div className="box">
//                     <div className="image-box">
//                         <img src={fruit.img} alt={fruit.title} />
//                     </div>
//                     <div className="text-box">
//                         <div className="title">{fruit.title}</div>
//                         <div className="price">${fruit.price}</div>
//                         <div></div>
//                     </div>
//                 </div>
//             );
//         })}
//     </div>
// );

// ReactDOM.createRoot(document.querySelector("#root")).render(cards);
