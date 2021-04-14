import React from 'react';
import {connect} from 'react-redux';

class Home  extends React.Component {
    handleTakeEvery = () => {
        this.props.dispatch({
            type:'takeEvery',
            userInfo:{
                name:'zs',
                password:'123456'
            }
        })
    }
    handleTakeLatest = () => {
        this.props.dispatch({
            type:'takeLatest'
        })
    }
    handleThrottle = () => {
        this.props.dispatch({
            type:'throttle'
        })
    }
    
    render(){
        return (
            <div>
                <button onClick={this.handleTakeEvery}>点击发送takeEveryaction</button>
                <button onClick={this.handleTakeLatest}>点击发送takeLatestaction</button>
                <button onClick={this.handleThrottle}>点击发送throttle</button>
            </div>
        )
    }
}

export default connect()(Home)


