import { combineReducers } from 'redux' ;


const taskListReducer = (taskList=[], action) => {
   switch (action.type) {
      case 'TASK_ENTERED':
    return [...taskList,action.payload];
    
      
     case 'TASK_DELETED':
     taskList.splice(action.payload,1)
     return [...taskList];

     case 'TASK_EDITED':
     taskList.splice(action.payload.id,1, action.payload.update)
     return [...taskList];


     default:
   return taskList ;
}
}

export default combineReducers({
    
   taskList : taskListReducer
});


