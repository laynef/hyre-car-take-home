import * as React from 'react';


interface Color {
  name: string;
  category: string;
}

interface Props {
  colors: Color[];
  setColor: (color: string) => void;
}

const ColorPicker: React.FC<Props> = ({ colors, setColor }) => {
  return (
    <div className="w-100 d-flex flex-row bg-white" style={{ overflow: 'auto', overflowY: 'hidden' }}>
      {colors.map((color: Color, index: number) => (
        <div key={index} onClick={() => setColor(color.name)} className="p-1">
          <div className="rounded-circle" style={{ backgroundColor: color.name, height: '50px', width: '50px' }} />
        </div>
      ))}
    </div>
  );
}

export default ColorPicker;
