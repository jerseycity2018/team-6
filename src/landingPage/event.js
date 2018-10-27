import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import firebase from './firebase.js';

const events = [];

function addEvents(quantity) {
  const startId = events.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    events.push({
      event_id: event_id,
      event_name: event_name,
      event_description: 'Event description ' + event_id,
      event_date: event_date
    });
  }
}


class Event extends React.Component {
    componentDidMount() {
        const eventRef = firebase.database().ref('events');
        eventRef.on('value', (snapshot) => {
          let events = snapshot.val();
          let newEvent = [];
          for (let event in events) {
            newEvent.push({
                event_id: event,
                event_name: event_name,
                event_description: 'Event description ' + event_id,
                event_date: event_date
            });
          }
          this.setState({
            items: newEvent
          });
        });
    }

    render() {
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true
          };
          const keyBoardNav = {
            clickToNav: false
          };
        return (
            <BootstrapTable data={ events } selectRow={ selectRow } keyBoardNav={ keyBoardNav }>
            <TableHeaderColumn dataField='event_id' isKey={ true }>#</TableHeaderColumn>
            <TableHeaderColumn dataField='event_name'>Event Name</TableHeaderColumn>
            <TableHeaderColumn dataField='event_description'>Description</TableHeaderColumn>
            <TableHeaderColumn dataField='event_date'>Date</TableHeaderColumn>
        </BootstrapTable>
        );
    }
}
export default Event;
