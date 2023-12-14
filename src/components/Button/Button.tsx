import React from 'react';
interface Props {
	sendForm: any;
}
export const Button = (props: Props) => {
	return (
		<button type='button' className='form-element btn-primary' id='translateButton' onClick={props.sendForm}>
			Tłumacz
		</button>
	);
};
