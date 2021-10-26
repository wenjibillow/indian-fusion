import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const ColorSchema= Yup.object().shape({
		color: Yup.string().required('Please select a color!!')
	})
export default function ColorThemeFormik() {
	return (
		<Formik
			initialValues={{ 
				color: '',
			}}
			validationSchema={ColorSchema}
			onSubmit={(values, { setSubmitting }) => {
				document.body.style.backgroundColor = values.color
				setSubmitting(false)
			}}
		>
			{({ handleChange, handleSubmit, isSubmitting, values, errors, touched }) => (
				<Form onSubmit={handleSubmit}>
					<select
						name="color"
						value={values.color}
						onChange={handleChange}
					>
						<option value="">Choose your favourite color theme for the website's background</option>
						<option value="white">default color</option>
						<option value="lightgrey">light grey</option>
						<option value='lavenderblush'>lavender blush</option>
						<option value='lightcyan'>light cyan</option>
						<option value='hotpink'>hot pink</option>
					</select>
					{errors.color && touched.color ? <div style={{color: 'red'}}>{errors.color}</div> : null}
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	)
}
					
						


					
						
				 

	




