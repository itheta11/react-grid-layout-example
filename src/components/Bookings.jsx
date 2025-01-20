import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import BookingsData from "../data/bookings.json"

const getRooms = () => {
    let rooms = []
    for(let i = 1 ; i <= 2; i++){
        for (let  j = 1 ; j <=10 ; j++){
            rooms.push(i*100 + j)
        }
    }
    return rooms
}

const getBookingsData = () => {
    const totalCols = 24 * 7;
    const totalRows = 10 
    const rowHeight = 64
    const startDate = new Date('2025-01-20').getDate();
    const endDate = new Date('2025-01-26').getDate();

    const allRooms = getRooms();
    const layout = BookingsData.map(bookings => {
        const rooms = bookings.rooms;
        const y = allRooms.indexOf(rooms[0].id);
        const h = rooms.length
        const x = new Date(bookings.checkIn).getDate() - startDate
        const xend = new Date(bookings.checkOut).getDate() - startDate
        const w = (xend - x ) * 2
        return {
            i : bookings.id,
            x,
          y,
          w,
          h,
          rooms: JSON.stringify(rooms.map(x => x.id))
        }
    });
    console.log({layout})
    return layout
}

const Bookings = () => {
  // Define the layout based on your provided positions
  const [layout, setLayout] = useState(getBookingsData());

  const handleResizeStop = (layout, oldItem, newItem) => {
    // Ensure height is a multiple of 2
    newItem.h = Math.max(2, Math.round(newItem.h / 2) * 2);
    setLayout([...layout]);
  };

  return (
    <div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={7}
        rowHeight={64}
        width={1280}
        margin={[1,1]}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
        onResizeStop={handleResizeStop}
        preventCollision={true}
        compactType={null}
      >
        {layout.map(({ i, x, y, w, h, rooms }) => (
          <div
            key={i}
            style={{ border: '1px solid black', textAlign: 'center' }}
          >
            {`Item ${i} x: ${x} y: ${y} w: ${w} h: ${h}, ${rooms}`}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Bookings;
