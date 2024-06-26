// DarkModeCommands.js
import React from 'react';
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeCommands = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <span>
        Dark Mode is <code>{darkMode.value ? 'enabled' : 'disabled'}</code>.
        Turn it{' '}
        <button onClick={darkMode.toggle}>
          {darkMode.value ? 'off' : 'on'}
        </button>
        .
      </span>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
};

export default DarkModeCommands;
