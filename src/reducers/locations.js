import { ADD_LOCATION } from '../actions/actionTypes';

const ProjectsInitialState = [];

export function locations(state = ProjectsInitialState, action) {
  switch (action.type) {
    case 'ADD_LOCATION':
      return state.push(action.location);

    default:
      return state;
  }
}
