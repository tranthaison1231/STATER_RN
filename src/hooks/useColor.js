import { useState } from 'react';

const useColor = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const handleColor = (color, change) => {
    switch (color) {
      case 'red':
        return red + change > 255 || red + change < 0
          ? null
          : setRed(red + change);
      case 'green':
        return green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
      case 'blue':
        return blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
      default:
        return null;
    }
  };
  const color = `rgb(${red}, ${green}, ${blue})`;
  return [color, handleColor];
};

export default useColor;
