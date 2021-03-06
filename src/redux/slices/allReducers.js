import { combineReducers } from 'redux';

import { accountReducer } from './account';
import { eventReducer } from './event';
import { mentorReducer } from './mentor'
import { notificationReducer } from './notifications';
import { problemReducer } from './problem';
import { problemGroupReducer } from './problemGroup';
import { redirectReducer } from './redirect';
import { translatorReducer } from './translator';

const allReducers = combineReducers({
  account: accountReducer,
  problem: problemReducer,
  event: eventReducer,
  mentor: mentorReducer,
  problemGroup: problemGroupReducer,
  notifications: notificationReducer,
  redirect: redirectReducer,
  Intl: translatorReducer,
});

export default allReducers;
