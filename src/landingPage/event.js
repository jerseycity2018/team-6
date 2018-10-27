import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const events = [];

function addEvents(quantity) {
  const startId = events.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    events.push({
      event_id: event_id,
      event_description: 'Event description ' + event_id,
      event_date: event_date
    });
  }
}

addEvents(5);

class HoverStripedTable extends React.Component {
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
            <TableHeaderColumn dataField='event_id' isKey={ true }>Event #</TableHeaderColumn>
            <TableHeaderColumn dataField='event_description'>Description</TableHeaderColumn>
            <TableHeaderColumn dataField='event_date'>Date</TableHeaderColumn>
        </BootstrapTable>
        );
    }
  }