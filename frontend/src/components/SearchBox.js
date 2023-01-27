import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Row className='ms-sm-3 align-items-center'>
        <Col md={8}>
          <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
          ></Form.Control>
        </Col>
        <Col>
          <Button
            size='sm'
            type='submit'
            variant='outline-success'
            className='py-2 w-100'
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
