import React from 'react';

class Home extends React.Component {
    //checks local-storage for a username
    componentWillMount = () => {
        if (localStorage.getItem('name')) {
            window.location.pathname = '/shop';
        };
    };
    render() {
        let homeStyle = {
            textAlign: "center",
            marginBottom: "10%",
            fontFamily: "Love Ya Like A Sister", 
            fontSize: "7rem",
        };
        let homeBanner = {
            border: "grey thin solid",
            padding: "15%",
            backgroundColor: "#d2f1f7",
        };
        let formStyle = {
            marginLeft: "50%",
            transform: "translateX(-50%)",
        };
        return (
            <div style={homeBanner}>
                <h1 style={homeStyle} >Shop App</h1>
                <form style={formStyle} onSubmit={(e)=>this.props.collectData(e,this.refs.usernameEntry.value)}>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-outline-dark" type="submit">Submit</button>
                        </span>
                        <input className="form-control" placeholder="Enter your UserName" type="text"  
                                                                                          name="usernameEntry" 
                                                                                          ref="usernameEntry" />
                    </div>
                </form>
            </div>
        );
    };
};

export default Home;