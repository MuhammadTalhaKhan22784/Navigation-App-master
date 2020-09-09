import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import "./user.css"
import ChipsArray from './dragbutton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function LabTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <TabContext value={value}>
                <AppBar position="static">
                    <TabList onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Properties" value="1" />
                        <Tab label="Columns" value="2" />
                        <Tab label="Filter" value="3" />
                    </TabList>
                </AppBar>
                <TabPanel value="1">
                    <div className="config-header">
                        <div className="con-data-name">
                            
                            <div className="input-data">
                                <div className="con-d-text bold-txt m-left"><text>Name</text></div>
                                <input type="text" placeholder="Name"></input>
                            </div>

                            <div className="con-data-AP">
                                <div className="con-d-radio">
                                    <input type="radio" id="Name" name="Data" value="Name" />
                                    <label className="bold-txt m-left" for="Name">Name</label>
                                    <div className="con-d-APtext"><text>Anyone can use the view</text></div>
                                </div>
                            </div>
                            <div className="con-data-Pvt">
                                <div className="con-d-radio">
                                    <input type="radio" id="Private" name="Data" value="Private" />
                                    <label className="bold-txt m-left" for="Private">Private</label>
                                    <div className="con-d-APtext"><text>Only i can Use Edit this view</text>
                                    </div>
                                </div>
                            </div>

                            <div className="con-data-Pvt">
                                <div className="con-d-radio">
                                    <input type="radio" id="SpecificPersons" name="Data" value="SpecificPersons" />
                                    <label className="bold-txt m-left" for="female">Specific Persons</label>
                                    <div className="con-d-APtext"><text>Only show to selected</text>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="2"><ChipsArray/></TabPanel>
                <TabPanel value="3"></TabPanel>
            </TabContext>
        </div>
    );
}
