import React, { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};
type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  const setCount = (count: number) => dispatch({ type: 'SET_COUNT', count });
  const setText = (text: string) => dispatch({ type: 'SET_TEXT', text });
  const setColor = (color: Color) => dispatch({ type: 'SET_COLOR', color });
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={() => setCount(5)}>SET_COUNT</button>
        <button onClick={() => setText('hihi')}>SET_TEXT</button>
        <button onClick={() => setColor('orange')}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
