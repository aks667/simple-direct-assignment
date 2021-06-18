import React, { useState } from "react";
import Link from "next/link";
import {Container, Row, Table, Button, InputGroup, FormControl} from "react-bootstrap";
const Postings = ({posts}) => {
	return (
		<Container>
			<Link href='/'>
				<Button size='lg' className='mt-5'>
					&larr; Back
				</Button>
			</Link>
			<Row className='h-100 justify-content-center'>
				<h1 className='display-1 text-center w-100'>Job Postings</h1>
	
				<Table responsive className='mt-5' striped bordered hover>
					<thead>
						<tr>
							<th>Job Title</th>
							<th>Company</th>
							<th>Job Summary</th>
							<th>Required Skills</th>
							<th>Recruiter Email</th>
						</tr>
					</thead>
					<tbody>
					{
						posts.map(({ title, company, summary, skills, email }, id) => (
							<tr key={company + id}>
								<td>{title}</td>
								<td>{company}</td>
								<td>{summary}</td>
								<td>{skills}</td>
								<td>{email}</td>
							</tr>
						))
					}
					</tbody>
				</Table>
			</Row>
		</Container>
	);
}

export default Postings;

Postings.getInitialProps = async params => {
	let posts = [];
	const res = await fetch(`${process.env.BACKEND_URL}/postings`);
	const resJson = await res.json();
	if (resJson.success) {
		posts = resJson.data.postings;
	}
	return {posts};
};
