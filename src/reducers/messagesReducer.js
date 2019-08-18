import { FETCH_MESSAGES, CREATE_MESSAGE, SELECT_CHANNEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      const stateCopy = state.slice(0);
      stateCopy.push(action.payload);
      return stateCopy;
    default:
      return state;
  }
}
