import React from 'react';
import ReactDom from 'react-dom';
import App from './componens/App';

// const link = React.createElement(
//     'a',
//     {
//         href: 'https://reactjs.org/',
//         formTarget: '_blank'
//     },
//     'reactjs.org',
// );

// console.log(link);


// const image = React.createElement('img', {
//     src:
//         'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
//     alt: 'Tacos With Lime',
//     width: 640,
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', null, image, title, price, button);

// const product = (
//     <div>
//         <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640" alt="Tacos With Lime" />
//         <h2>Tacos With Lime</h2>
//         <p>Price: 10$</p>
//         <button type="button">Add to cart</button>
//     </div>
// );

// Для передачи детей можно использовать свойство `children` параметра `props`
// const productWithChildrenInProps = React.createElement('div', {
//     children: [image, title, price, button],
// });

// console.log(product);


// ReactDom.render(product, document.getElementById('root'));

// const Product = props => (
//     <div>
//         <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640" alt="Tacos With Lime" />
//         <h2>{props.name}</h2>
//         <p>Price: 10$</p>
//         <button type="button">Add to cart</button>
//     </div>
// );

// const Product = ({ imgUrl, name, price }) => (
//     <div>
//         <img src={imgUrl} alt="Tacos With Lime" width="320" />
//         <h2>{name}</h2>
//         <p>Price: {price}$</p>
//         <button type="button">Add to cart</button>
//     </div>
// );

ReactDom.render(<App />, document.getElementById('root'));