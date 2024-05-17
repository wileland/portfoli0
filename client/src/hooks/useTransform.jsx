import { useEffect, useState } from 'react';

const useTransform = (value, inputRange, outputRange) => {
  const [transformedValue, setTransformedValue] = useState(outputRange[0]);

  useEffect(() => {
    const range = inputRange[1] - inputRange[0];
    const progress = (value - inputRange[0]) / range;
    const newValue = outputRange[0] + progress * (outputRange[1] - outputRange[0]);
    setTransformedValue(newValue);
  }, [value, inputRange, outputRange]);

  return transformedValue;
};

export default useTransform;
