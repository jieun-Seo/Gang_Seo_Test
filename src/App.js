import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";

//import "@fullcalendar/core/main.css";
//import "@fullcalendar/daygrid/main.css";

import "./custom.css";

function App() {
  const events = [{ title: "Hello Calendar", date: new Date() }];
  return (
      <div className="App">
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>      
    );
}

export default App;
