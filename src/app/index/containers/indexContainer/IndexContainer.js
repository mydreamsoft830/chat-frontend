import React, {Component} from 'react';
import {connect} from 'react-redux';
import {LoginFormShowAction,LoginFormHideAction} from '../../../../actions/IndexAction';
import HeaderComponent from '../../components/informationComponet/header/HeaderComponent'
import Index1Component from '../../components/informationComponet/indexBody/Index1Component'
import Index2Component from '../../components/informationComponet/indexBody/Index2Component'
import Index3Component from '../../components/informationComponet/indexBody/Index3Component'
import FooterComponent from '../../components/informationComponet/footer/FooterComponent'
import LoginFormComponent from '../../components/informationComponet/footer/LoginFormComponent'
import ForgotFormComponent from '../../components/informationComponet/footer/ForgotFormComponent'
import ResetFormComponent from '../../components/informationComponet/footer/ResetFormComponent'

class IndexContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginformshow_flag : false,
            forgotformshow_flag : false,
            resetformshow_flag : false,
            videoShow : false,
        };
        this.loginFormView = this.loginFormView.bind(this);
        this.forgotFormView = this.forgotFormView.bind(this);
        this.resetFormView = this.resetFormView.bind(this);
        this.showVideo = this.showVideo.bind(this);
        this.hideVideo = this.hideVideo.bind(this);
    }
    componentDidMount() {
       
    }
    
    componentWillUnmount() {

    }

    loginFormView() {
        this.setState({loginformshow_flag : !this.state.loginformshow_flag})
    }

    forgotFormView() {
        this.setState({
            forgotformshow_flag : !this.state.forgotformshow_flag,
            loginformshow_flag : !this.state.loginformshow_flag
        })
    }
    
    resetFormView() {
        this.setState({
            resetformshow_flag : !this.state.resetformshow_flag,
            forgotformshow_flag : false,
            loginformshow_flag : this.state.resetformshow_flag,
        })
    }

    showVideo() {
        this.setState({videoShow : true})
    }

    hideVideo() {
        this.setState({videoShow : false})
    }

    render() {
        return (
            <div className="main_container">
                <header className='site_hdr'><HeaderComponent indexName={'index'} showVideo={this.showVideo} loginFormView={this.loginFormView}/></header>
                <Index1Component videoShow={this.state.videoShow} hideVideo={this.hideVideo}/>
                <Index2Component/>
                <Index3Component/>
                <footer className='site_ftr'><FooterComponent indexName={'index'}/></footer>
                <LoginFormComponent loginformshow_flag={this.state.loginformshow_flag} loginFormView={this.loginFormView} forgotFormView={this.forgotFormView}/>
                <ForgotFormComponent forgotformshow_flag={this.state.forgotformshow_flag} forgotFormView={this.forgotFormView} resetFormView={this.resetFormView}/>
                <ResetFormComponent resetformshow_flag={this.state.resetformshow_flag} resetFormView={this.resetFormView}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error_1 : state.index.error_1,
        loginformshow_flag : state.index.loginformshow_flag,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //updateCounter : (counter) => dispatch(sampleActionCreator(counter))
        loginFormShow : () => dispatch(LoginFormShowAction()),
        loginFormHide : () => dispatch(LoginFormHideAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
/* connect(mapStateToProps, mapDispatchToProps) is HOC which will return a component
*/

