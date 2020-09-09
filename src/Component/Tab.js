import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import Modals from './Modal'

import '/tab.css';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <TabContent activeTab={activeTab}>



        <TabPane  tabId="3">
            <div className='mt-4'>
            <Modals buttonLabel='New Filters' change-btn-color={true} modalHeader='Add Filter' search={true} />
            </div>

       
     </TabPane>
      </TabContent>
    </div>
  );
}

export default Tabs;