import React, { useState } from 'react';
import Bookings from "./data/bookings.json"
import Scheduler from './components/Scdeuler';
const App = () => {
  const [bookings, setBookings] = useState(Bookings)

  return <div>
    <Scheduler/>
  </div>;
};

export default App;
