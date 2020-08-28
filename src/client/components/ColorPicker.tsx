import * as React from 'react';


interface Color {
  name: string;
  category: string;
}

interface Props {
  colors: Color[];
  setColor: () => void;
}

const ColorPicker: React.FC<Props> = ({ colors, setColor }) => {
  return (
    <div className="w-100">

    </div>
  );
}

export default ColorPicker;
