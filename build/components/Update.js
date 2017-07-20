import React from 'react';
import axios from 'axios';
import { BrowserRouter, browserHistory, Route, Switch, Link, Redirect } from 'react-router-dom';

export default class Update extends React.Component {
    constructor() {
        super();
           this.handleClickUpdate = this.handleClickUpdate.bind(this);
           this.handleClickHome = this.handleClickHome.bind(this);

    }



     handleClickUpdate(id, index) {
         console.log(this.refs)
         let updateData = {newfeeling: this.refs['update-' + index].value, updateId: id}
             
        axios.put('/api/person/' + id,{
            feeling: this.refs['update-' + index].value
        })
        .then(res => {
            this.props.updateFeeling(updateData);
        console.log('WE HAVE UPDATED A Feeling with ID ', res.data._id);
        })
        .catch(error => {
        console.log(error)  
        })
    }

    handleClickHome(event){
        this.props.history.push("/");
    }

    componentWillMount(){
        axios.get('/api/person').then((response) => {
            this.props.loadFeelings(response.data);
        });
    }

    render(){ 
        let myFeelings = [];
        if(this.props.feelings && this.props.feelings.length > 0){
            myFeelings = this.props.feelings.map((feeling, index) => 
            <div key={feeling._id}>{feeling.feeling}
                <button className="waves-effect grey lighten-1 waves-light btn-medium" onClick={(event) => this.handleClickUpdate(feeling._id, index)}>Update</button>
                <input ref={"update-" + index} type="text"/>
            </div>);
        }
    
        return(
        <div>
            <h5>Update Yourself!</h5>

                    
                   
                    {myFeelings}

                     <div>
                        <button className="waves-effect grey lighten-1 waves-light btn" type="button" onClick={this.handleClickHome}>Return to Homepage</button>
                        {/*<Link to="/">Return to Homepage</Link>*/}
                    </div>
               
             
        </div>
        )         
    };
}

