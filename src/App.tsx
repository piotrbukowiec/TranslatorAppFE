import React from 'react';
import './App.css'; // Dodaj własne style jeśli są potrzebne
import {Footer} from './components/Footer/Footer';
import {Container} from './components/Container/Container';

const App = () => {
	// const [sourceLanguage, setSourceLanguage] = useState('');
	// const [targetLanguage, setTargetLanguage] = useState('');

	return (
		<>
			<Container />
			<Footer />
		</>
	);
};

export default App;
