/**
 * Created by nette on 19.04.17.
 */
import React from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

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

const CalendarView = React.createClass({
    onSelectEvent: function (event) {
        console.log('event selected');
    },

    render: function () {
        return (
            <div>
                <h2>Kalendarz</h2>
                <BigCalendar
                    selectable
                    events={myEventsList}
                    defaultDate={new Date()}
                    defaultView='week'
                    onSelectEvent={event => onSelectEvent(event)}
                    onSelectSlot={(slotInfo) => console.log(
                        `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                        `\nend: ${slotInfo.end.toLocaleString()}`
                    )}
                />
            </div>
        );
    }
});

export default CalendarView;