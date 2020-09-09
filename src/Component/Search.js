import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Search = (props) => {
  return (
    <div>
<InputGroup>
        <Input placeholder="search" />
        <InputGroupAddon addonType="append">
          <InputGroupText>&#x1F50E;</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      </div>

  )
}
export default Search ;