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
  title: string;
}

const convertColor = (str: string): string => {
  let array = str.split(' ');
  let colors = array.map((name: any) => convert.keyword.rgb(name.toLowerCase()))
  let color = colors.find((name) => name);
  return color ? `rgb(${color[0]}, ${color[1]}, ${color[2]})` : '';
}

const getColors = (colors: any[]) => {
  return colors
    .map(obj => ({ ...obj, rgb: convertColor(obj.name) }))
    .filter(e => !!e.rgb);
}

const ColorPicker: React.FC<Props> = ({ title, colors, setColor }) => {
  const items = getColors(colors);

  return (
    <div className="w-100 bg-white d-flex flex-column p-2">
      <h2 className="w-100 h4 font-weight-light">{title}</h2>
      <div className="w-100 d-flex flex-row" style={{ overflow: 'auto', overflowY: 'hidden' }}>
        {items.map((color: Color, index: number) => (
          <div key={index} onClick={() => setColor(color.name)} className="p-1">
            <div className="rounded-circle" style={{ backgroundColor: color.rgb, height: '50px', width: '50px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
