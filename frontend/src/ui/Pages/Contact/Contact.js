import * as Yup from 'yup';
import { Formik } from 'formik';
import { httpConfig } from '../../utils/httpConfig';

export function ContactForm() {
  const validator = Yup.object().shape({
    firstName: Yup.string().required('Required field.'),
    lastName: Yup.string().required('Required field.'),
    email: Yup.string()
      .required('Required field.')
      .email('Must enter an email.'),
    subject: Yup.string().required('Required field.'),
    message: Yup.string()
      .required('Required field.')
      .max(1500, 'Message cannot exceed 1500 characters.'),
  });

  const handleSubmit = (values, { resetForm, setStatus }) => {
    httpConfig.post('./apis/', values).then((reply) => {
      const { message, type, status } = reply;
      if (status === 200) {
        resetForm();
      }
      setStatus({ message, type });
    });
  };

  const message = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={message}
        validationSchema={validator}
      >
        {ContactContent}
      </Formik>
    </>
  );
}

function ContactContent(props) {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <section className='page'>
      <div className='contact-container'>
        <h1>Want to Work Together? Contact Me Now!</h1>
        <form id='contact-form' onSubmit={handleSubmit}>
          <div className='form-section'>
            <FormInput
              id='firstName'
              label='First Name'
              type='text'
              values={values.firstName}
              errors={errors.firstName}
              touched={touched.firstName}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormInput
              id='lastName'
              label='Last Name'
              type='text'
              values={values.lastName}
              errors={errors.lastName}
              touched={touched.lastName}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>

          <div className='form-section'>
          <FormInput
              id='email'
              label='Email'
              type='text'
              values={values.email}
              errors={errors.email}
              touched={touched.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormInput
              id='subject'
              label='Subject'
              type='text'
              values={values.subject}
              errors={errors.subject}
              touched={touched.subject}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </div>

          <div className='form-section'>
            <textarea
              name='message'
              id='message'
              className='textarea'
              rows='10'
              maxLength='1501'
              placeholder='1500 characters max'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && (
              <div className='error'>{errors.message}</div>
            )}
          </div>

          <button type='reset'>Reset</button>
          <button type='submit'>Send</button>

          <div
            className='g-recaptcha'
            data-sitekey='6LedmvQfAAAAAAyPPDilzDWKM492hGHKADhWCGuM'
          ></div>
        </form>
      </div>
    </section>
  );
}

function FormInput(props) {
  return (
    <div className='inline-label'>
      <div className='label'>
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      <input
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.label}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values}
      />
      {props.errors && props.touched && (
        <div className='error'>{props.errors}</div>
      )}
    </div>
  );
}
