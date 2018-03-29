import React from 'react';


class CartItem extends React.Component {
    render() {
        let listStyle = { 
            listStyleType: "none", 
            textAlign: "left"
        }; 
        return (
            <li className="list-group-item">
                <ul style={listStyle}>
                    <li>Name: {this.props.name}</li>
                    <li>Type: {this.props.type}</li>
                    <li>Price: {this.props.price}</li>
                </ul>
            </li>
        );
    };
};

export default CartItem;