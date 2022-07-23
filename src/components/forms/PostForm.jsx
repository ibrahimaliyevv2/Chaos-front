import React from 'react'
import { Form, Button, Input, FormGroup } from 'reactstrap';

function PostForm({ className }) {
    return (
        <div className={className}>
            <Form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <FormGroup row>

                    <textarea className='mw-100' cols="10" rows="5" style={{ resize: 'none' }}></textarea>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default PostForm;