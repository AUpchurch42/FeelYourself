/**
 * actionCreator is the file that gives Redux a blueprint of what each event looks like.
 */

// select a user
export let login = () => {
    console.log('dispatch LOGIN');
    return {
        type: 'LOGIN',
        userId
    };
}

export let logout = () => {
    console.log('dispatch LOGOUT');
    return {
        type: 'LOGOUT',
        userId
    };
}

export let loadFeelings = (feelings) => {
    console.log('dispatch LOADFEELINGS');
    return {
        type: 'LOADFEELINGS',
        feelings
    };
}

export let createFeeling = (feeling) => {
    console.log('dispatch CREATEFEELING');
    return {
        type: 'CREATEFEELING',
        feeling
    };
}

export let deleteFeeling = (feeling) => {
    console.log('dispatch DELETEFEELING');
    return {
        type: 'DELETEFEELING',
        feeling
    };
}

export let updateFeeling = (feeling) => {
    console.log('dispatch UPDATEFEELING');
    return {
        type: 'UPDATEFEELING',
        feeling
    };
}