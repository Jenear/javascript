import { createAction, handleActions, combineActions } from 'redux-actions';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

increment(); // { type: 'INCREMENT' }
decrement(); // { type: 'DECREMENT' }
increment(10); // { type: 'INCREMENT', payload: 10 }
decrement([1, 42]); // { type: 'DECREMENT', payload: [1, 42] }

// 这里就是之前的reducer的管理部分
const reducer = handleActions(
  {
    // { type: 'DECREMENT', payload: [1, 42] }
    //{payload}如果不写action写的是{payload}，说明是用的解构，把payload解构出来了
    // INCREMENT: (state, {payload}) => ({
    INCREMENT: (state, action) => ({
      counter: state.counter + action.payload
    }),

    DECREMENT: (state, action) => ({
      counter: state.counter - action.payload
    })
  },
  { counter: 0 }//初始值
);

//combineActions不常用


// 使用了redux - actions之后reducer管理也进行了更改

// 原来的reducer
function timer(state = defaultState, action) {
  switch (action.type) {
    case START:
      return { ...state, runStatus: true };
    case STOP:
      return { ...state, runStatus: false };
    case RESET:
      return { ...state, seconds: 0 };
    case RUN_TIMER:
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
}

// 使用 redux - actions 操作 state
const timer = handleActions({
  START: (state, action) => ({ ...state, runStatus: true }),
  STOP: (state, action) => ({ ...state, runStatus: false }),
  RESET: (state, action) => ({ ...state, seconds: 0 }),
  RUN_TIMER: (state, action) => ({ ...state, seconds: state.seconds + 1 }),
  // 如果只是修改store中的某个值，和immutable一起去修改，写法如下：
  RUN_TIMER: (state, { payload }) => (
    //将state.data1.data 的值改为payload的值
    state.setIn(['data1', 'data'], payload)
  ),
}, defaultState);