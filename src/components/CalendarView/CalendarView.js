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

import { openPostPropertiesDialog, changePostDateTime } from '../../actions';
import { getVisiblePosts } from '../../reducers';

import './CalendarView.css';

BigCalendar.momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

class CalendarView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            events: this.props.posts
        }

        this.moveEvent = this.moveEvent.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.posts !== this.state.events) {
            this.state.events = nextProps.posts;
        }
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

        this.props.dispatch(changePostDateTime(event.id, start));
    }

    render (){
        return (
            <div>
                <h2>Kalendarz</h2>
                <DragAndDropCalendar
                    selectable
                    events={this.state.events}
                    defaultDate={new Date(2017,3,23)}
                    defaultView='week'
                    onEventDrop={this.moveEvent}
                    onSelectEvent={event => this.props.dispatch(openPostPropertiesDialog(true,event.id))}
                    onSelectSlot={(slotInfo) => this.props.dispatch(openPostPropertiesDialog(true,null,slotInfo.start))}
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    posts: getVisiblePosts(state),
});

CalendarView = connect(
    mapStateToProps
)(CalendarView);

export default DragDropContext(HTML5Backend)(CalendarView);