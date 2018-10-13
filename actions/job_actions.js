import axios from 'axios';

import {
  FETCH_JOBS,
  LIKE_JOB
} from './types';


export const fetchJobs = (region, callback) => async (dispatch) => {
  let { data } = await axios.get('http://192.168.0.16:3000/jobs');

  dispatch({ type: FETCH_JOBS, payload: data });
  callback();

};

export const likeJob = (job) => {
  return {
    type: LIKE_JOB,
    payload: job
  }
};

