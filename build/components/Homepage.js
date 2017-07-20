import React from 'react';
import { BrowserRouter, browserHistory, Route, Switch, Link, Redirect } from 'react-router-dom';
import Update from './Update';

import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';


export default class Homepage extends React.Component{
    constructor(){
        super();
        
        this.state = {
            userId: ""
        };
        this.handleClick = this.handleClick.bind(this); 
        this.handleClickProfile = this.handleClickProfile.bind(this); 
        this.handleClickWest = this.handleClickWest.bind(this);
        // this.handleClickWest2 = this.handleClickWest2.bind(this);
        this.handleClickSignup = this.handleClickSignup.bind(this); 
        // this.handleClickDelete = this.handleClickDelete.bind(this, id);
        
        this.handleClickUpdateLink = this.handleClickUpdateLink.bind(this);
    }

      validPasswords(){ 
        let passbox = this.refs.password.value; 
        let confirmbox = this.refs.passwordConfirm.value; 
        return passbox === confirmbox; 
    } 
 
    handleClick(event) { 
        // if(this.validPasswords()){ 
        //     console.log("password OK"); 
        let email = this.refs.email.value; 
        let password = this.refs.password.value; 
        // } 
        console.log(email + " " + password) 
 
    } 

    handleClickWest(event){
    
    }





    handleClickProfile(event) {
       
        BrowserRouter.push("/Profile");
  }

   
    handleClick(event) {
        let feeling = this.refs.feeling.value;

        axios.post('/api/person',{
            feeling: feeling,
            
        })
        .then(res => {
        axios.get('/api/person/' + res.data._id).then((response) => {
            this.props.createFeeling(response.data);
        });   
        console.log('WE HAVE REGISTERED A Feeling with ID ', res.data._id);
        })
        .catch(error => {
        console.log(error)  
        })
    }
    
    

    handleClickDelete(id, event) {
        let remove = this.refs.remove;
        

        console.log(id)
        axios.delete('/api/person/' + id,{})
        .then(res => {
            this.props.deleteFeeling(res.data._id);
        console.log('WE HAVE DELETED A Feeling with ID ', res.data._id);
        })
        .catch(error => {
        console.log(error)  
        })
    }
    

   
        
    handleClickUpdateLink(event) {
        this.props.history.push("/Update/");
    }

    handleClickSignup(event) {
        this.props.history.push("/Registration");
    }

    componentWillMount(){
        axios.get('/api/person').then((response) => {
            this.props.loadFeelings(response.data);
        });      
    }

    




    

    render(){
        let myFeelings = [];
        if(this.props.feelings && this.props.feelings.length > 0){
            myFeelings = this.props.feelings.map(feeling => <div key={feeling._id}>{feeling.feeling} - <button className="btn-floating btn waves-effect waves-grey lighten-1" ref="remove" key={feeling._id} onClick={this.handleClickDelete.bind(this, feeling._id)}>x </button></div>);
        }
        return (
            <div className="col s12">
                {/*<h3>userUd: {this.state.userId}</h3>*/}
                <h5>How are you feeling?</h5>
                <input placeholder="Tell me about it" type="text" ref="feeling" /><label></label><br />

                <button  className="waves-effect grey lighten-1 waves-light btn" type="button" onClick={this.handleClick}>Post Feeling</button><br/><br/>
                {/*<BrowserRouter>
                    <div>
                        <Route path="/" render={(routeProps) => <Homepage {...this.props} {...routeProps}/>} />*/}
                
                        {/*<Route
                            exact
                            path="/Update"
                            render={(routeProps) => <Update {...this.props} {...routeProps}/>}/>
                    </div>
                </BrowserRouter>       */}
                {/*<Link className="linkButton" to="/Profile">My Feelings</Link>*/}
                <h5 className="medium-italic">Feelings Felt:</h5>
                {myFeelings}
                <br/>
                <button className="waves-effect grey lighten-1 waves-light btn" id="linkButton" type="button" onClick={this.handleClickUpdateLink}>Update Feelings
                    {/* <Link to="/Update">Update</Link> */}
                </button><br/><br/>
            </div> 
        );
    }
}