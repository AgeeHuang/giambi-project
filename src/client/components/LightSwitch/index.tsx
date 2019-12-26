import React from 'react';
import cx from 'classnames';

import { useGlobalContext, constant } from '../../store';

const LightSwitch: React.FC<{}> = () => {
  const { state, dispatch } = useGlobalContext();
  const handleLightSwitch = (turn: boolean) => {
    return dispatch({
      type: constant.HANDLE_LIGHT_SWITCH,
      payload: turn,
    });
  }
  return (
    <div className="light-switch">
      <div className="light-switch__middle-line" />
      <div
        className={cx(
          'light-switch__moon',
          { 'light-switch__moon--turn-on': state.turnOn },
        )}
      />
      <div className="light-switch__button-body">
        <button
          type="button"
          onClick={() => handleLightSwitch(false)}
          className={cx(
            'light-switch__button',
            'light-switch__turn-off',
          )}
        >
          <i className="fas fa-minus fa-sm" />
        </button>
        <button
          type="button"
          onClick={() => handleLightSwitch(true)}
          className={cx(
            'light-switch__button',
            'light-switch__turn-on',
          )}
        >
          <i className="far fa-circle fa-sm" />
        </button>
      </div>
    </div>
  );
}

export default LightSwitch;
