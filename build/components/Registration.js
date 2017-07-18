import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';


export default class Registration extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleClickHome = this.handleClickHome.bind(this);
        
    }

    // validPasswords(){
    //     let passbox = this.refs.password.value;
    //     let confirmbox = this.refs.passwordConfirm.value;
    //     return passbox === confirmbox;
    // }
        
    handleClickHome() {
        this.props.history.push("/");
    }
    
    


    handleClick(event) {
        let feeling = this.refs.feeling.value;
        
        
    

        axios.post('http://localhost:3000/api/person',{
            feeling: feeling,
        })
        .then(res => {
        console.log('WE HAVE REGISTERED A Feeling with ID ', res.data._id);
        })
        .catch(error => {
        console.log(error)  
        })
        }
    
    render(){
    // {
    //     let errorMessages = [];
    //     if (this.state.errors.mismatchPasswords){
    //         React.createElement('div', null, 'Error, passwords do not match.');
    //         errorMessages.push(<div className="error message"></div>)
    //     }
        return (
            <div>
                <div>

                    <h4>How's it Hanging?</h4>
                    <input placeholder="Tell me about it" type="text" ref="feeling" /><label></label><br /><br />
                    
                    <button className="linkButton" type="button" onClick={this.handleClick}>Cherish this feeling</button><br/><br/>
                    
                    <div>
                        <button className="linkButton" type="button" onClick={this.handleClickHome}>Return to Homepage</button>
                        {/*<Link to="/">Return to Homepage</Link>*/}
                    </div>
                </div>
            </div>
        );
    }
        }
