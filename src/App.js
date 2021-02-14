import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>Esse é meu site no ambiente de {process.env.ENVIRONMENT}</h1>
		</div>
	);
}

export default App;
