import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import './PartnerBot.css'

class APIComponent extends Component {
	triggerNextStep({ value, trigger }){
		console.log(value);
		console.log(trigger);
		alert(1);
		return '1';
	}

	render(){
		return 'abc';
	}
}

// all available props
const theme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: '#38699F',
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: '#38699F',
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
};

const chatbotStyles = {
	'height': '100vh',
	'width': '50vw'
};

function onUserInput({value, steps}){
	console.log(value);
	console.log(steps);
	alert(1);
	return '1';
}
  
const steps=[
	{
		id: '1',
		message: 'Hello Partner!! I am Partner Assistant Bot (PAB) from Tesco.',
		trigger: '2',
	},
	{
		id: '2',
		message: 'How can I help you today?',
		trigger: '3',
	},
	{
		id: '3',
		user: true,
		trigger: onUserInput
		// end: true,
	},
];

export default class ChatbotComponent extends Component {
  render() {
		return (
			<div className="chat-window">
				<ThemeProvider theme={theme}>
					<ChatBot steps={steps} {...chatbotStyles}/>
				</ThemeProvider>
			</div>
		);
	}
}
