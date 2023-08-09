import React, { ComponentProps, useEffect, useState } from 'react';

type ButtonProps = ComponentProps<'button'>;

export function ButtonToggleTheme(props: ButtonProps) {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  function toggleTheme() {
    setTheme((state) => (state === 'dark' ? 'light' : 'dark'));
  }
  return (
    <>
      <button {...props} onClick={toggleTheme}>
        Toggle
      </button>
    </>
  );
}
