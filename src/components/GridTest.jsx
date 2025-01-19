import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const App = () => {
  // Define the layout based on your provided positions
  const [layout, setLayout] = useState([
    { i: '0', x: 0, y: 0, w: 2, h: 2 },
    { i: '1', x: 2, y: 0, w: 2, h: 3 },
    { i: '2', x: 4, y: 0, w: 2, h: 3 },
    { i: '3', x: 6, y: 2, w: 2, h: 2 },
    { i: '4', x: 8, y: 0, w: 2, h: 2 },
    { i: '5', x: 10, y: 0, w: 2, h: 4 },
    { i: '6', x: 0, y: 4, w: 2, h: 4 },
    { i: '8', x: 4, y: 6, w: 2, h: 5 },
    { i: '10', x: 8, y: 4, w: 2, h: 4 },
    { i: '11', x: 10, y: 5, w: 2, h: 5 },
    { i: '12', x: 0, y: 8, w: 2, h: 6 },
    { i: '13', x: 2, y: 6, w: 2, h: 2 },
    { i: '15', x: 6, y: 10, w: 2, h: 3 },
    { i: '16', x: 8, y: 10, w: 2, h: 5 },
    { i: '17', x: 10, y: 10, w: 2, h: 3 },
    { i: '22', x: 8, y: 8, w: 2, h: 2 },
    { i: '24', x: 0, y: 20, w: 2, h: 5 },
    { i: '25', x: 2, y: 12, w: 2, h: 2 },
    { i: '26', x: 4, y: 20, w: 2, h: 2 },
    { i: '29', x: 10, y: 16, w: 2, h: 3 },
    { i: '32', x: 4, y: 22, w: 2, h: 3 },
    { i: '34', x: 8, y: 18, w: 2, h: 3 },
    { i: '36', x: 0, y: 30, w: 2, h: 5 },
    { i: '37', x: 2, y: 18, w: 2, h: 3 },
    { i: '39', x: 6, y: 30, w: 2, h: 5 },
    { i: '41', x: 10, y: 30, w: 2, h: 5 },
    { i: '43', x: 2, y: 30, w: 2, h: 4 },
    { i: '46', x: 8, y: 28, w: 2, h: 4 },
    { i: '48', x: 0, y: 40, w: 2, h: 2 },
    { i: '49', x: 2, y: 34, w: 2, h: 3 },
  ]);

  const handleResizeStop = (layout, oldItem, newItem) => {
    // Ensure height is a multiple of 2
    newItem.h = Math.max(2, Math.round(newItem.h / 2) * 2);
    setLayout([...layout]);
  };

  return (
    <div>
      <h1>React Grid Layout with Custom Layout</h1>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
        onResizeStop={handleResizeStop}
        preventCollision={true}
        compactType={null}
      >
        {layout.map(({ i, x, y, w, h }) => (
          <div
            key={i}
            style={{ border: '1px solid black', textAlign: 'center' }}
          >
            {`Item ${i} x: ${x} y: ${y} w: ${w} h: ${h}`}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default App;
