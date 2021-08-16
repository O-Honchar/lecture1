import React, { Fragment } from 'react';
import Product from './Product';
import Dropdown from './Dropdown';

const technologies = [
    { id: 'id-1', name: 'JS' },
    { id: 'id-2', name: 'React' },
    { id: 'id-3', name: 'React Router' },
    { id: 'id-4', name: 'Redux' },
];

const App = () => (
    <Fragment>
        <Dropdown items={technologies} />
        <h1>Top Products</h1>
        <Product
            imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
            alt="Tacos With Lime"
            name="Tacos With Lime"
            price={10}
        />
        <Product
            imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
            alt="Fries and Burger"
            name="Fries and Burger"
            price={20}
        />
    </Fragment>
);

export default App;