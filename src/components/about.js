import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello About {this.props.userName}</h1>
                <h1>Hello World {this.props.userAge}</h1>

                <Link to='/'>Go to Home</Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        userName: state.rootReducer.userName,
        userAge: state.rootReducer.userAge
    })
}
function mapDispatchToProps(state){
    return({
        
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(About);