/**
 * Created by nette on 19.04.17.
 */
import React from 'react';
import { connect } from 'react-redux';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import BigCalendar from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import moment from 'moment';

import { openPostPropertiesDialog } from '../../actions';

const myEventsList = [
    {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2017, 3, 20),
        'end': new Date(2017, 3, 21)
    },
    {
        'title': 'Long Event',
        'start': new Date(2017, 3, 17),
        'end': new Date(2017, 3, 20)
    },

    {
        'title': 'DTS STARTS',
        'start': new Date(2017, 3, 13, 0, 0, 0),
        'end': new Date(2017, 3, 20, 0, 0, 0)
    },

    {
        'title': 'DTS ENDS',
        'start': new Date(2017, 3, 16, 0, 0, 0),
        'end': new Date(2017, 3, 23, 0, 0, 0)
    },

    {
        'title': 'Some Event',
        'start': new Date(2017, 3, 19, 0, 0, 0),
        'end': new Date(2017, 3, 19, 0, 0, 0)
    },
    {
        'title': 'Conference',
        'start': new Date(2017, 3, 21),
        'end': new Date(2017, 3, 23),
        'desc': 'Big conference for important people'
    },
    {
        'title': 'Meeting',
        'start': new Date(2017, 3, 22, 10, 30, 0, 0),
        'end': new Date(2017, 3, 22, 12, 30, 0, 0),
        'desc': 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
        'title': 'Lunch',
        'start':new Date(2017, 3, 22, 12, 0, 0, 0),
        'end': new Date(2017, 3, 22, 13, 0, 0, 0),
        'desc': 'Power lunch'
    },
    {
        'title': 'Meeting',
        'start':new Date(2017, 3, 22,14, 0, 0, 0),
        'end': new Date(2017, 3, 22,15, 0, 0, 0)
    },
    {
        'title': 'Happy Hour',
        'start':new Date(2017, 3, 22, 17, 0, 0, 0),
        'end': new Date(2017, 3, 22, 17, 30, 0, 0),
        'desc': 'Most important meal of the day'
    },
    {
        'title': 'Dinner',
        'start':new Date(2017, 3, 22, 20, 0, 0, 0),
        'end': new Date(2017, 3, 22, 21, 0, 0, 0)
    },
    {
        'title': 'Birthday Party',
        'start':new Date(2017, 3, 23, 7, 0, 0),
        'end': new Date(2017, 3, 23, 10, 30, 0)
    }
];

BigCalendar.momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

class CalendarView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            events: myEventsList
        }

        this.moveEvent = this.moveEvent.bind(this)
    }

    moveEvent({ event, start, end }) {
        const { events } = this.state;

        const idx = events.indexOf(event);
        const updatedEvent = { ...event, start, end };

        const nextEvents = [...events]
        nextEvents.splice(idx, 1, updatedEvent)

        this.setState({
            events: nextEvents
        })

        alert(`${event.title} was dropped onto ${event.start}`);
    }

    render (){
        return (
            <div>
                <h2>Kalendarz</h2>
                <DragAndDropCalendar
                    selectable
                    events={this.state.events}
                    defaultDate={new Date(2017,3,20)}
                    defaultView='week'
                    onEventDrop={this.moveEvent}
                    onSelectEvent={event => console.log(event.title)}
                    onSelectSlot={(slotInfo) => this.props.dispatch(openPostPropertiesDialog(true))}
                />
            </div>
        )
    }
};

CalendarView = connect()(CalendarView);

export default DragDropContext(HTML5Backend)(CalendarView);