import React, { Component } from 'react';
//import { CircleSpinner } from 'react-spinners-kit';
import {NotificationManager} from 'react-notifications';

import UrlItemComponent from './UrlItemComponent'
import * as api from '../../../../api/UrlApi';

export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingState : false,
            urleditformshow_flag : false,
            editid : null,
            desired_price : 0
        };
        this.urlEdit = this.urlEdit.bind(this);
        this.urlEditClose = this.urlEditClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
    }
    
    componentWillUnmount() {
        
    }

    urlEdit(urlid){
        this.setState({urleditformshow_flag:true,editid:urlid});
        this.setState({
            desired_price : this.props.userUrls[urlid].desired_price
        })
    }

    urlEditClose(urlid){
        this.setState({urleditformshow_flag:false});
    }

    urlBell = async(urlid) => {
        var res = await api.UrlBell(urlid);
        var data = res.data;
        if(data.success){
            if(data.userUrls!==undefined && data.userUrls.bell)
                NotificationManager.success('Done!',
                '',8000);
            else
                NotificationManager.success('Done!',
                '',8000);
            await this.props.urlLoad();  
        }else{
            NotificationManager.error(data.error,
                '',8000);
        }         
    }

    urlRemove = async(urlid) =>{
        var res = await api.UrlRemove(urlid);
        var data = res.data;
        if(data.success){
            NotificationManager.success('Done!',
            '',8000);
            this.props.urlLoad();      
        }else{
            NotificationManager.error(data.error,
                '',8000);
        }    
    }
    
    urlUpdate = async() => {
        this.setState({urleditformshow_flag:false});
        var res = await api.UrlUpdate(this.props.userUrls[this.state.editid].id,this.state.desired_price);
        var data = res.data;
        if(data.success){
            NotificationManager.success('Done!',
            '',8000);
            this.props.urlLoad();      
        }else{
            NotificationManager.error(data.error,
                '',8000);
        }    
    }

    async handleChange(event){
        await this.props.setSearchStr(event.target.value);
        this.props.urlLoad();
    }
    
    handleChange2(event){
        this.setState({desired_price:event.target.value});
    }


    handleKeyDown(event){
        if (event.key === 'Enter') {
            this.props.urlLoad();
        }
    }

    render() {
        return (            
            <div className='my_alert2'>
                <div className='container2'>
                    <h3>Your product alerts</h3>
                    <div className='pro_form2' style={{width :  450}}>
                        <input component='input' type='url' style={{borderRadius: '45px',borderWidth: '0px 0px 1px 0px', borderBottom: '1px solid #e8f6f3', height: 46}} onKeyDown={this.handleKeyDown}  onChange={this.handleChange}  placeholder='Search here...' name='url'/>
                        <button type='button' style={{background: '#4aa999', border: 'none', minWidth: 110, height: 45}} onClick={()=>this.props.urlLoad()}>
                            Search
                        </button>
                    </div>
                    <div className='alert_grid2'>
                        {                            
                            this.props.userUrls &&
                            this.props.userUrls.map((userUrl, id) => <UrlItemComponent key={id} userUrl={userUrl} id={id} urlEdit={(urlid)=>this.urlEdit(urlid)} urlBell={(urlid)=>this.urlBell(urlid)} urlRemove={(urlid)=>this.urlRemove(urlid)}/>)                            
                        }
                        <div className={this.state.urleditformshow_flag ? 'edit_item2 open2' : 'edit_item2'}>
                            <div className='container2'>
                                <button onClick={this.urlEditClose} className='edit_opn2 clos_btn2'><i className='fa fa-close'></i></button>
                                <div className='edit_img2'>
                                    <img src={this.state.editid === null || this.state.editid === undefined ? 'https://wispri-yelena.s3.ap-northeast-1.amazonaws.com/avatar/avatar-2020-02-13-12_11_28-search.png' :this.props.userUrls[this.state.editid].image} alt=''/>
                                </div>
                                <div className='pro_sec2'>
                                    <h3>{this.state.editid === null || this.state.editid === undefined ? '' :this.props.userUrls[this.state.editid].name}</h3>
                                    <div className='edit_form2'>
                                        <div className='frm_grp2'>
                                            <label>Product Link</label>
                                            <input type='text' className='form-control2' onChange={console.log()} name='url' value={this.state.editid === null || this.state.editid === undefined ? '' :this.props.userUrls[this.state.editid].url} readOnly='readOnly'/>
                                        </div>
                                        <div className='frm_grp2'>
                                            <label>Desired Price</label>
                                            <input type='text' className='form-control2' name='desire_price' onChange={this.handleChange2} value={this.state.desired_price}/>
                                        </div>
                                        <div className='frm_grp2 sbmt_btn2'>
                                            <button onClick={()=>this.urlUpdate()} className='btn2 btn-primary'>Save Item</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}
