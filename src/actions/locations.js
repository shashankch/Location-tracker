import { ADD_LOCATION } from './actionTypes';

export function addlocation(location) {
  return {
    type: ADD_LOCATION,
    location,
  };
}
