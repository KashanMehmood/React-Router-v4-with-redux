import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeState} from '../store/action/action';

class Home extends Component {

    _changeData(){
        // console.log('event called');
        // changeState();
        this.props.changeStateToReducer();
        // this.props.changeUserName();
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
function mapDispatchToProps(dispatch){
    return({
        changeStateToReducer: () =>{
            dispatch(changeState())
        }
        // changeUserName: ()=>{dispatch(changeUserName())}
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);