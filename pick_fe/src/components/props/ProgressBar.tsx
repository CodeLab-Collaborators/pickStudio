import {FC, CSSProperties} from 'react';
import { ProgressBarProps } from '../../types';


const ProgressBar: FC<ProgressBarProps> = ({ value, backgroundColor, barColor }) => {
  const barStyle: CSSProperties = {
    width: `${value}%`,
    background: barColor || 'var(--primary)',
  };

  const containerStyle: CSSProperties = {
    background: backgroundColor || 'bg-gray-200',
  };

  return (
    <div className={`w-full h-1.5 ${containerStyle} bg-gray-300`}>
      <div className="h-full" style={barStyle}></div>
    </div>
  );
}

export default ProgressBar;
