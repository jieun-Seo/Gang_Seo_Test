import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";

import "./custom.css";
import Editor from './EditorWithUseQuill';

function App() {
  const events = [{ title: "Hello Calendar :)", date: new Date() }];
  return (
      <div className="App">
         <Editor placeholder={'Write something...'} />

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
