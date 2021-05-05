import React from 'react';
import {connect} from 'react-redux';
import config from '../../assets/js/conf/config';
import actions from '../../store/actions';
class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){

    }
    outLogin(){
        this.props.dispatch(actions.user.outLogin());
        this.props.history.replace(config.path+"login");
    }
    render() {
        return (
            <div>
                欢迎{this.props.state.user.username}回来！<br/>
                <button type="button" onClick={this.outLogin.bind(this)}>安全退出</button>
            </div>
        )
    }
}

export default connect((state)=>({state}))(Index);