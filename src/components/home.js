import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeState } from '../store/action/action';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userAge: ''
        }

        this._changeData = this._changeData.bind(this);
    }

    _changeData() {
        // console.log(this.state.userName);
        // console.log(this.state.userAge);
        this.props.changeStateToReducer(this.state);
    }

    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>
                <h1>Hello World {this.props.userAge}</h1>
                <input type="text"
                    placeholder="Enter your name"
                    value={this.userName}
                    onChange={(e) => {
                        this.setState({ userName: e.target.value })
                    }
                    }
                />
                <br />
                <input type="text"
                    placeholder="Enter your age"
                    value={this.userAge}
                    onChange={(e) => {
                        this.setState({ userAge: e.target.value })
                    }
                    }
                />
                <br />
                <button onClick={this._changeData}>Change Data in Store</button><br /><br />
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}

// mapStateToProps: this is used to retrieve the store state
function mapStateToProps(state) {
    return ({
        userName: state.rootReducer.userName,
        userAge: state.rootReducer.userAge
    })
}

// mapDispatchToProps: this is used to retrieve the actions and dispatch them to the store
function mapDispatchToProps(dispatch) {
    return ({
        changeStateToReducer: (allChangeState) => {
            dispatch(changeState(allChangeState))
        }
        // changeUserName: ()=>{dispatch(changeUserName())}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);