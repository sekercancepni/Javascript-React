import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';

export default class Randomquote extends React.Component {

	constructor () {
		super();
		this.state = {
			Quotes: [
				{
					quote: 'Eğer farklıysan, yalnızlığa mahkum oluyorsun.',
					author: 'Aldous Huxley'
				},
				{
					quote: 'Sevmek, insanı yalnızlaştırıyor.',
					author: 'Virginia Woolf'
				},
				{
					quote: 'Eğer kendi yalnızlığımızı kucaklayamazsak, inzivaya karşı kalkan olarak başka birini kullanırız.',
					author: 'Irvin D. Yalom'
				},
			],
			color: 'rgb(189, 187, 153)',
			quoteIndex: '0',
			quotes: '',
		}
	}

	randomQuotes = () => {
		this.getRandomColor();
		let a = (Math.floor(Math.random() * this.state.Quotes.length));
		this.setState({
			quoteIndex: a,
		})
	};

	getRandomColor = () => {
		var letters = '0123456789ABCDEF';
		var c = '#';

	  	for (var i = 0; i < 6; i++) {
	    	c += letters[Math.floor(Math.random() * 16)];
	  	}

	  	this.setState({
	  		color: c,
	  	})
	};

	a = () => {
		console.log('onLoad calisti');
	};

	render = () => {
		const styles = {
			backgroundColor: this.state.color,
			height:800
		}

		const buttonStyle = {
			backgroundColor: this.state.color,
			width: '100px',
			padding: '10px',
			'borderRadius': '5px',
			'border': '1px solid #fff',
			'boxShadow': '2px 2px 5px #AFE9FF',
			'float': 'right',
			'color': 'white',
		}

		const quoteBox = {
			width: '500px',
			margin: 'auto',
			'backgroundColor': 'white'
		}

		const quoteStyle = {
			'width': '300px',
		    'textAlign': 'center',
		    'margin': 'auto',
		    color: this.state.color,
		}

		const authorStyle = {
			'textAlign': 'center',
			'marginTop': '20px',
			color: this.state.color,
		}

		const infoQuote = {
			'padding': '60px',
			'fontFamily': 'Brush Script Std, Brush Script MT, cursive',
			'fontSize': '30px',
		}

		return (
			<div style={styles}>
				<div style={quoteBox}>
					<div style={infoQuote}>
						<div style={quoteStyle}>
							{this.state.Quotes[this.state.quoteIndex].quote}
						</div>
						<div style={authorStyle}>
							{this.state.Quotes[this.state.quoteIndex].author}
						</div>
						<button style={buttonStyle} onClick={this.randomQuotes}>New quote</button>
					</div>
				</div>
			</div>
		);
	}
}