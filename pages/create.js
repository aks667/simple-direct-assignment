import React, { useState } from "react";
import Link from "next/link";
import {Button, Container, Row, Form, Spinner} from "react-bootstrap";
import axios from "axios";
import customHooks from './customHooks';



const Create = () => {
  const [loading, setLoading] = useState(false);
  async function submitJob() {
    try{
      setLoading(true);
      const data = {
        title   : inputs.title,
        company : inputs.company,
        summary : inputs.summary,
        skills  : inputs.skills,
        email   : inputs.email
      }
      axios.post(
        `${process.env.BACKEND_URL}/postings`, 
        data
      )
      .then(response => {
        setLoading(false);
        if(response.data.success){
          alert("Job Created!");
          window.location.reload();
        }
        else{
          alert("Could not create job!\n" + response.data.message);
        }
      });

    }
    catch(e){
      setLoading(false);
      alert("Could not create job!\n" + e);
      console.log('ERROR----');
      console.log(e);
    }
  }
  const {inputs, handleInputChange, handleSubmit} = customHooks.useJobPostingForm(submitJob);


  return (
    <Container>
      <Link href='/'>
        <Button size='lg' className='mt-5'>
          &larr; Back
        </Button>
      </Link>
      <Row className='h-100 justify-content-center'>
			  <h1 className='display-1 text-center w-100'>Create Posting</h1>
        <Form className='w-100 ml-1 mr-1' onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" name="title" onChange={handleInputChange} value={inputs.title} required={true}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" name="company" onChange={handleInputChange} value={inputs.company} required={true}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Job Summary</Form.Label>
            <Form.Control as="textarea" rows={3} name="summary" onChange={handleInputChange} value={inputs.summary} required={true}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Required Skills</Form.Label>
            <Form.Control as="textarea" rows={1} name="skills" onChange={handleInputChange} value={inputs.skills} required={true}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Recruiter Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@company.com" name="email" onChange={handleInputChange} value={inputs.email} required={true}/>
          </Form.Group>

          &nbsp;
          {loading ? (
            <Button variant="primary" disabled size="lg">
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : (
            <Button size='lg' type="submit">
              Submit
            </Button>
          )}
        </Form>
        
      </Row>
    </Container>
  )
};

export default Create;
