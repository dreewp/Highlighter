import _ from 'lodash';

import { CREATE_HIGHLIGHT, FETCH_HIGHLIGHTS, SEARCH_HIGHLIGHTS } from '../actions/index';

const INITIAL_STATE = { all: [], active: [] }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_HIGHLIGHTS:
      return { all: action.payload.highlights, active: action.payload.highlights }
    case SEARCH_HIGHLIGHTS:
      const activeHighlights = _.filter(state.all, function(highlight) {
        return _.includes(highlight.description, action.payload);
      });
      return { all: state.all, active: activeHighlights };
    default:
      return state;
  }
}