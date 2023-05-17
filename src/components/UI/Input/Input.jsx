import React from 'react'
import { ErrorMessage, useField } from 'formik'
import './Input.css'

export default function Input({ label, ...props}) {
  const [field, meta] = useField(props)

  const isValid = meta.touched && !meta.error && 'is-valid'
  const isInValid = meta.touched && meta.error && 'is-invalid'

  return (
    <div className="div">
      <label htmlFor={field.name} className={`mb-1`}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`shadow-none mb-1 ${isValid} ${isInValid} ${props.className}`}
      />

      <ErrorMessage component={'div'} name={field.name} className={`error`} />
    </div>
  )
}
