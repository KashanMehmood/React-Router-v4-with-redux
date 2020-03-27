import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends Component {

    _changeData(){
        console.log('event called');
    }

    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>
                <button onClick={this._changeData.bind(this)}>Change</button>
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        userName: state.rootReducer.userName
    })
}
function mapDispatchToProps(state){
    return({
        
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);