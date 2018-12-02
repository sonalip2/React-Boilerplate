
export default function(state = [], action) {
  switch (action.type) {
    case 'GET_POSTS':
        return Object.assign({}, state, action.payload );
    default:
    return state;
  }
} 