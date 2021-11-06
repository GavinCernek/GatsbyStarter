import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Index = (): JSX.Element => {
	return (
		<Layout>
			<p>Testing</p>
			<ContactForm className="Test" />
		</Layout>
	);
};

export default Index;
