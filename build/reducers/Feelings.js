// a reducer takes in two things:
// 1. the action
// 2. copy of current state
// and then returns the new state
// it is a pure function

let users = (state = {}, action) => {
    switch(action.type){
            case 'LOADFEELINGS':
            console.log('Im loading feelings.');
            return action.feelings;
            
            case 'CREATEFEELING':
            let createFeeling = state.slice(0);
            createFeeling.push({feeling: action.feeling.feeling, _id: action.feeling._id})
            console.log(action)
            console.log('Im creating a feeling.');
            return createFeeling;   

            case 'UPDATEFEELING':
            let updateFeeling = state.slice(0);
            for (let index = 0; index < state.length; index++) {
                if(state[index]._id === action.feeling.updateId){
                    updateFeeling[index].feeling = action.feeling.newfeeling;
                    break;    
                }       
            }
            return updateFeeling;

            

            case 'DELETEFEELING':
            //loop over previous state's feelings
            //splice() out the index to ,1
            //return new array minus the deleted feeling 
                //action.feeling is the id i want to compare to
            let deletedfeeling = state.slice(0);
            for (let i = 0; i < state.length; i++) {
            if(state[i]._id === action.feeling){
            deletedfeeling.splice(i,1)
            break;    
            }       
            }
            return deletedfeeling;
            default:
            return state;
    }
}

export default users;


                    // updateFeeling[i].feeling = action.feeling.newfeeling
