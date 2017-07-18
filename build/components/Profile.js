import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
  
            userIds: [],
        };

            this.handleClickWest = this.handleClickWest.bind(this);
            this.handleClickProfile = this.handleClickProfile.bind(this);

    }

    componentDidMount() {

        axios
            .get('http://localhost:3000/api/person/' + this.props.userId)
            .then((response) => {
                this.setState({profile: response.data});
    
                console.log(this.state.statusIds);
            })
            .catch((error) => {
                console.log(error);
            });

    }



 







    render() {

        return (
            <div>
                <h1>My Trains</h1>
                <div className="myProfile">
                    <div className="myPersonInfo">
                        <p>
                            <em className="trains">{this.state.profile.trains}</em>
                        </p>
                      <button type="button" onClick={this.handleClickWest}></button>


                    </div>
                   
                </div>
            </div>
        );
    }
}