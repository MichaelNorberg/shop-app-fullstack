import React from 'react';
import ShoeItem from './ShoeItem.js';


class Shoes extends React.Component {
    render() {
        let shoeArray= this.props.shoes;
        let shoeListJSX;
        shoeListJSX = shoeArray.map((shoe, i) => {
            return <ShoeItem name = {shoe.name}
                             price = {shoe.price}
                             picture = {shoe.picture}
                             id = {shoe.id}
                             item = {shoe}
                             addToCart= {this.props.addToCart}
                         />
        });
        let titleStyle = {
            fontFamily: "Love Ya Like A Sister",
        }
        return (
            <div>
                <h1 style={titleStyle}>Shoes Page</h1>
                <div className="row">{shoeListJSX}</div>
            </div>
        );
    };
};

export default Shoes;