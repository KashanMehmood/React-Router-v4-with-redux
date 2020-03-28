import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeState} from '../store/action/action';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }

        this._changeInput = this._changeInput.bind(this);
    }

    _changeData(){
        this.props.changeStateToReducer(this.state.userName);
    }

    _changeInput(event){

        console.log(event.target.value);
        this.setState({
            userName: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>
                <input type="text" name="" value={this.userName} onChange={this._changeInput} />

                <button onClick={this._changeData.bind(this)}>_changeData</button>
                <button onClick={this._changeInput} >SubmitData</button>

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
        changeStateToReducer: (updatedUserName) =>{
            dispatch(changeState(updatedUserName))
        }
        // changeUserName: ()=>{dispatch(changeUserName())}
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);