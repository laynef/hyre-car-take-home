import * as React from 'react';
import convert from 'color-convert';


interface Color {
  name: string;
  category: string;
  rgb?: string;
}

interface Props {
  colors: Color[];
  setColor: (color: string) => void;
}

const convertColor = (str: string): string => {
  let color = str.split(' ').map((name: any) => convert.keyword.rgb(name.toLowerCase())).find((name) => name);
  return color ? `rgb(${color[0]}, ${color[1]}, ${color[2]})` : '';
}

const ColorPicker: React.FC<Props> = ({ colors, setColor }) => {
  const items = colors.map(obj => ({ ...obj, rgb: convertColor(obj.name) })).filter(e => !!e.rgb);
  return (
    <div className="w-100 d-flex flex-row bg-white" style={{ overflow: 'auto', overflowY: 'hidden' }}>
      {items.map((color: Color, index: number) => (
        <div key={index} onClick={() => setColor(color.name)} className="p-1">
          <div className="rounded-circle" style={{ backgroundColor: color.rgb, height: '50px', width: '50px' }} />
        </div>
      ))}
    </div>
  );
}

export default ColorPicker;
