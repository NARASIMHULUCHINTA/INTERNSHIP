import { combineReducers } from 'redux';
import counterReducer from './Counter/CounterReducer';
import userReducer from './User/UserReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
})

export default rootReducer;

/*const rootReducer = {
    counter:{
        count: 0,
    length: 10,
    maxcount: 100
    },
    user:{
        uid: '',
    userName: '',
    isUserLogin: false,
    hobby: [],
    moreData: {
        city: '',
    }
    }
}*/

//rootReducer.counter.count;


//const data = { "counter": { "count": 0, "length": 10, "maxcount": 100 }, "user": { "hobby": [], "isUserLogin": false, "moreData": { "city": "" }, "uid": "", "userName": "" } };