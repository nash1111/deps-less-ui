import React from 'react';

interface EqualSpacingGridProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
}

export const EqualSpacingGrid: React.FC<EqualSpacingGridProps> = ({
  children,
  columns = 12,
  spacing = 2,
}) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${spacing}px`,
  };

  return <div style={gridStyle}>{children}</div>;
};
