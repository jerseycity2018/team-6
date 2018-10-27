import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import firebase from './firebase.js';


class Event extends React.Component {
    constructor(){
      super();
      this.state = {
        event_id: "",
        event_name: "",
        event_description: "",
        event_date: "",
        events: []
      }
    }

    componentDidMount() {
      // const itemsRef1 = firebase.database().ref('events');
      //   const item = {
      //     event_name: "Farm Info Session",
      //     event_description: "Provide Information About the Farm and its goals.",
      //     event_date: "Dec. 25 2018",
      //   }

      //   itemsRef1.push(item);
        

        const eventRef = firebase.database().ref('events');
        eventRef.on('value', (snapshot) => {
          let events = snapshot.val();
          let newEvent = [];
          for (let event in events) {
            newEvent.push({
                event_id: event,
                event_name: events[event].event_name,
                event_description: events[event].event_description,
                event_date: events[event].event_date
            });
          }
          console.log(newEvent)
          this.setState({
            events: newEvent
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
            <BootstrapTable data={ this.state.events } setStatelectRow={ selectRow } keyBoardNav={ keyBoardNav }>
            <TableHeaderColumn  width='150' dataField='event_name' isKey>Event Name</TableHeaderColumn>
            <TableHeaderColumn  width='150' dataField='event_description'>Description</TableHeaderColumn>
            <TableHeaderColumn  width='150'   dataField='event_date'>Date</TableHeaderColumn>
        </BootstrapTable>
        );
    }
}
export default Event;
