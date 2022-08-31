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
            <div className='inline-label'>
              <div className='label'>
                <label htmlFor='firstName'>First Name</label>
              </div>
              <input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='First Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && (
                <div className='error'>{errors.firstName}</div>
              )}
            </div>
            <div className='inline-label'>
              <div className='label'>
                <label htmlFor='lastName'>Last Name</label>
              </div>
              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Last Name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && (
                <div className='error'>{errors.lastName}</div>
              )}
            </div>
          </div>

          <div className='form-section'>
            <div className='inline-label'>
              <div className='label'>
                <label htmlFor='email'>Email Address</label>
              </div>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className='error'>{errors.email}</div>
              )}
            </div>
            <div className='inline-label'>
              <div className='label'>
                <label htmlFor='subject'>Subject</label>
              </div>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='How Can I Help You?'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              {errors.subject && touched.subject && (
                <div className='error'>{errors.subject}</div>
              )}
            </div>
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
