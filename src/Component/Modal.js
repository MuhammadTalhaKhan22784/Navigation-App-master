import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Table} from 'reactstrap';
import '/modal.css'
import Search from './Search';

const Modals = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} className='change-btn-color'>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <div className='header'>
        <ModalHeader toggle={toggle} > {props.modalHeader}  {props.search}
        <Search className='search' />
         </ModalHeader>
         </div>
        <ModalBody>
            <Table bordered>
        <thead>
            <tr>
            <th><input type='checkbox' /></th>
            <th>Fields</th>
            <th>Data Type</th>
            <th>Table</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row"><input type='checkbox' /></th>
            <td>Loginid</td>
            <td>text</td>
            <td>user</td>
            </tr>
            <tr>
            <th scope="row"><input type='checkbox' /></th>
            <td>First Name</td>
            <td>text</td>
            <td>user</td>
            </tr>
            <tr>
            <th scope="row"><input type='checkbox' /></th>
            <td>Last Name</td>
            <td>text</td>
            <td>user</td>
            </tr>
            <tr>
            <th scope="row"><input type='checkbox' /></th>
            <td>Email</td>
            <td>text</td>
            <td>user</td>
            </tr>
        </tbody>
        </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}> Save </Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modals;