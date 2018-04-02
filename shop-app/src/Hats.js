import React from 'react';
import HatItem from './HatItem.js';


class Hats extends React.Component {
    render() {
        let hatArray= this.props.hats;
        let hatListJSX;
        hatListJSX = hatArray.map((hat, i) => {
            return <HatItem name = {hat.name}
                            price = {hat.price}
                            picture = {hat.picture}
                            item = {hat}
                            addToCart= {this.props.addToCart}
                        />
        });
        let titleStyle = {
            fontFamily: "Love Ya Like A Sister",
        };
        return (
            <div>
                <h1 style={titleStyle}>Hats Page</h1>
                <div className="row">{hatListJSX}</div>
            </div>
        );
    };
};

export default Hats;