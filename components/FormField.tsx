import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './styles/form-field.module.scss';

interface FormFieldProps {
  name: string;
  className: string;
  label: string;
  errorMessage: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, className, label, errorMessage }) => {
  const { register, formState } = useFormContext();

  return (
    <>
      <input className={className} type="text" placeholder={label} {...register(name)} />{' '}
      <div className={styles.errorMessage}>{errorMessage}</div>
    </>
  );
};

export default FormField;
