import React from 'react';
import { useField } from 'formik';

const Campo = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      <label htmlFor={props.id}>{label}</label>
      <input
        {...field} //todos os eventos que vem do próprio Formik trazidos pelo hook useField
        {...props} // as propriedades que enviamos
        className={meta.error && meta.touched ? 'isInvalid' : ''}
      />
      {meta.error && meta.touched ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Campo;
