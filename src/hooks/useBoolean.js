import { useState, useMemo } from 'react';

const useBoolean = (iniValue = false) => {
  const [value, setValue] = useState(iniValue);

  const actions = {
    setValue,
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
    toggle: () => setValue(!value),
    reset: () => setValue(iniValue),
  };

  return useMemo(() =>
    [value, actions],
    [value, actions],
  );
};

export { useBoolean };
