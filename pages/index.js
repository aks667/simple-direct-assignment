import React from "react";
import Link from "next/link";
import {Container, Row, Col, Button} from "react-bootstrap";

const Home = () => (
	<Container>
		<Row className='h-100 justify-content-center mt-5'>
			<h1 className='display-1 text-center w-100'>Job Search</h1>
			<Col md={6} className='text-center mt-5'>
				<Link href='/postings'>
					<Button size='lg'>View Postings</Button>
				</Link>
			</Col>
			<Col md={6} className='text-center mt-5'>
				<Link href='/create'>
					<Button size='lg'>Create Posting</Button>
				</Link>
			</Col>
		</Row>
	</Container>
);

export default Home;
