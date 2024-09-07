import React from 'react';

interface SimpleGridProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
  rowSpacing?: number;
  columnSpacing?: number;
}

export const SimpleGrid: React.FC<SimpleGridProps> = ({
  children,
  columns = 12,
  spacing = 2,
  rowSpacing,
  columnSpacing,
}) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${rowSpacing ?? spacing}px ${columnSpacing ?? spacing}px`,
  };

  return <div style={gridStyle}>{children}</div>;
};
