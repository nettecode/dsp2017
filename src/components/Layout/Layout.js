/**
 * Created by nette on 30.04.17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import MainMenu from '../MainMenu/MainMenu';
import { openPostPropertiesDialog } from '../../actions';
import NewPostForm from '../NewPostForm/NewPostForm';

import VisiblePostsList from '../../containers/VisiblePostsList/VisiblePostsList';

import SettingsView from '../SettingsView/SettingsView';
import CalendarView from '../CalendarView/CalendarView';

let Layout = React.createClass({
    render: function () {
        return (
            <div>
                <div className="container">
                    <MainMenu />
                    <div className="rightArea">
                        <Route path={'/app/list'} component={VisiblePostsList}></Route>
                        <Route path={'/app/calendar'} component={CalendarView}/>
                        <Route path={'/app/settings'} component={SettingsView}></Route>
                    </div>
                </div>
                <div className="addNewButton">
                    <NewPostForm />
                    {/* FIXME: .ref instead */}
                    <FloatingActionButton onTouchTap={() => {
                        this.props.dispatch(openPostPropertiesDialog(true));
                    }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
});

Layout = connect()(Layout);

export default Layout;