import React from 'react';


class ShoeItem extends React.Component {
    render() {
        let cardStyle = {
            maxWidth: "18rem",
            minHeight: "500px",
            textAlign: "center",
        };
        let buttonStyle = {
            margin: "5%",
            backgroundColor: "#91DDEB",
        };
        
        let cardBottom = {
            position: "absolute",
            bottom: "0",
            marginTop: "5px", 
            textAlign: "center",   
        };
        let titleStyle = {
            fontFamily: "Love Ya Like A Sister",
        };
        return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="card ml-3 mt-3" style={cardStyle}>
                    <img className="card-img-top"  src={this.props.picture} alt="Card image cap"/>
                    <div style={cardBottom} className="card-body">
                        <h5 style={titleStyle} className="card-title">{this.props.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: {this.props.price}</li>
                        </ul>
                        <button style={buttonStyle} onClick={() => this.props.addToCart(this.props.item)} 
                                                    className="btn btn-outline-dark">add to cart</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default ShoeItem;