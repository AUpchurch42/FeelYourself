import feelingsReducer from '../build/reducers/Feelings'

const feelings = {
    feelings: []
}

describe('feelingsReducer', () =>{
    it('should create a feeling', () =>{
        expect(feelingsReducer(feelings.feelings, {
            type: "CREATEFEELING",
            feeling: {_id: "test string", feeling: "test string pt 2"}
        })).toEqual([{_id: "test string", feeling: "test string pt 2"}]);
    });  
});