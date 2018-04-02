import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Hats from './Hats.js';
import Shoes from './Shoes.js';
import Cart from './Cart.js';
import axios from 'axios';


class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            shoes: [],
            hats: [],
            cart: [],
            total: 0,
        };
    };
    //checks local-storage for a username and redirects if there is none
    componentWillMount = () => {
        if (localStorage.getItem('name') === null) {
            window.location.pathname = '/'
        }
    }
    //request for the cart array and the main store all array
    componentDidMount = () => { 
        axios.get('http://localhost:8080/cart')
            .then((results) => {
                let total = results.data.reduce((acc, ele) => {
                    return acc + ele.price
                },0)
                this.setState({
                    cart: results.data,
                    total: total
                })
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get('http://localhost:8080/all')
            .then((results) => {
                console.log(results.data)
                let shoes = results.data.shoes
                let hats = results.data.hats
                this.setState({
                    shoes: shoes,
                    hats: hats
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };
    //get total of the cart
    getTotal = () => {
        let total = this.state.cart.reduce((acc, ele) => {
            return acc + ele.price
        },0)
        this.setState({
            total: total,
        });
    };
    //updates cart with new added items
    addToCart = (item) => {
        let cartCopy = Array.from(this.state.cart);
        cartCopy.push(item)
        this.setState({
            cart: cartCopy,
        },() => {this.getTotal()});
        axios.post('http://localhost:8080/cart', {item})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });  
    }; 
    // clears the cart 
    clearCart = () => {
        let newCart = [];
        axios.delete('http://localhost:8080/cart',{data: {newCart: newCart}})
          .then( (response)=> {
            console.log(response);
            this.setState({
                    cart: newCart,
                    total: 0,
                });
          })
          .catch((error) => {
            console.log(error);
          });  
    };
    
    render() {
        let productsStyle = {
            marginLeft: "50%",
            transform: "translateX(-50%)",
        };
        let welcomeStyle = {
            textAlign: "center",
            marginBottom: "3%",
            fontFamily: "Love Ya Like A Sister",
            fontSize: "5rem"
        };
        let shopBanner = {
            border: "grey thin solid",
            padding: "10%",
            backgroundColor: "#d2f1f7"
        };
        let productButton = {
            backgroundColor: "#91DDEB"
        };
        let itemStyle = {
            textAlign: 'center',
        };
        return (
            <div>
                <div style={shopBanner}>
                    <h1 style={welcomeStyle}>Welcome {this.props.userName}! Time to shop!</h1>
                    <div style={productsStyle} class="dropdown d-inline-block">
                        <button style={productButton} className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" 
                                                                                            data-toggle="dropdown" 
                                                                                            aria-haspopup="true" 
                                                                                            aria-expanded="false">
                            Products
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/Shop/Hats">Hats </Link>
                            <Link className="dropdown-item" to="/Shop/Shoes">Shoes</Link>
                        </div>
                    </div> 
                </div>
                <Cart cart={this.state.cart} clearCart={this.clearCart} total={this.state.total}/>
                <div className="container" style={itemStyle}>
                    <Switch>
                        <Route path= "/Shop/Hats"
                               render={(props)=> {return <Hats hats= {this.state.hats} 
                                                               addToCart= {this.addToCart} 
                                                               match={props.match}/>}}/>
                        <Route path= "/Shop/Shoes"
                               render={(props)=> {return <Shoes shoes= {this.state.shoes} 
                                                                addToCart= {this.addToCart} 
                                                                match={props.match}/>}}/>
                    </Switch>
                </div>
            </div>
        );
    };
};

export default Shop;