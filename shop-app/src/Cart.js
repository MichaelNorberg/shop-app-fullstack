import React from 'react';
import CartItem from './CartItem.js';

class Cart extends React.Component {
    render() {
        let cartArray= this.props.cart;
        let cartListJSX;
        cartListJSX = cartArray.map((item, i) => {
            return <CartItem name = {item.name}
                         type = {item.type}
                         price ={item.price}
                    />
        });
        let cartStyle= {
            width: "18rem",
            textAlign: "center",
        };
        let titleStyle = {
            fontFamily: "Love Ya Like A Sister",
        };
        let cartButton = {
            backgroundColor: "#91DDEB",
            marginTop: "2%",
        };
        let clearButton = {
            backgroundColor: "#91DDEB",
        };
        return (
            <div>
                <button style={cartButton} className="btn btn-outline-dark" type="button" 
                                                          data-toggle="collapse" 
                                                          data-target="#cartCollapse" 
                                                          aria-expanded="false" 
                                                          aria-controls="cartCollapse">
                view cart
                </button>
                <div className="collapse" id="cartCollapse">
                    <div className="card" style= {cartStyle}>
                        <div className="card-body">
                            <h5 style={titleStyle} className="card-title">Cart</h5>
                            <p style={titleStyle} className="card-text">You're cart includes</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            {cartListJSX}
                            <li className="list-group-item">Total: {this.props.total}</li>
                        </ul>
                        <div className="card-body">
                            <button style={clearButton} onClick={this.props.clearCart} 
                                                        className="btn btn-outline-dark">clear cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    };
};

export default Cart;