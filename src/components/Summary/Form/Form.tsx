import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import '../../Home/Home';

const StyledTextfield = styled(TextField)({
  margin: '20px 0',
  border: '1px solid gray',
  color: 'white',
});

const StyledFormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '80%',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: 40,
});

const StyledContainer = styled('div')({
  width: '50%',
  marginTop: '6%',
});

const StyledButton = styled(Button)({
  alignSelf: 'center',
  width: '40%',
});

interface FormikTextFieldProps {
  formik: any;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  // eslint-disable-next-line react/require-default-props
  fullWidth?: boolean;
}

const FormikTextField = ({
  formik,
  id,
  name,
  label,
  placeholder,
  fullWidth = true,
}: FormikTextFieldProps) => (
  <StyledTextfield
    fullWidth={fullWidth}
    id={id}
    name={name}
    label={label}
    placeholder={placeholder}
    InputLabelProps={{
      style: { color: '#fff' },
    }}
    value={formik.values[name]}
    onChange={formik.handleChange}
    error={Boolean(formik.errors[name])}
  />
);

const FormValidation = Yup.object().shape({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  email: Yup.string().email('Wrong email').required('Required'),
  birthDate: Yup.date()
    .nullable()
    .min(new Date(1900, 0, 1))
    .required('Required'),
  phoneNumber: Yup.string().required('Required'),
  adress: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
});

const ContactForm: React.FC<{}> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      birthDate: '',
      phoneNumber: '',
      adress: '',
      city: '',
      state: '',
      zipCode: '',
    },
    validationSchema: FormValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      alert('Thank you! Now you will be redirected to main site.');
      navigate('/');
    },
  });

  return (
    <StyledContainer>
      <Typography variant='h5'>SHIPPING DETAILS</Typography>
      <form onSubmit={formik.handleSubmit}>
        <StyledFormContainer>
          <FormikTextField
            fullWidth={false}
            formik={formik}
            id='name'
            name='name'
            label='Name'
            placeholder='Jane'
          />
          <FormikTextField
            fullWidth={false}
            formik={formik}
            id='surname'
            name='surname'
            label='Surname'
            placeholder='Doe'
          />
          <FormikTextField
            formik={formik}
            id='email'
            name='email'
            label='Email'
            placeholder='jane.doe@example.com'
          />
          <FormikTextField
            formik={formik}
            id='phoneNumber'
            name='phoneNumber'
            label='Phone Number'
            placeholder='+11(111) 111-111'
          />
          <FormikTextField
            formik={formik}
            id='birthDate'
            name='birthDate'
            label='Birth date'
            placeholder='12/24/1990'
          />
          <FormikTextField
            formik={formik}
            id='adress'
            name='adress'
            label='Adress'
            placeholder='200 E Main St.'
          />
          <FormikTextField
            formik={formik}
            id='city'
            name='city'
            label='City'
            placeholder='Phoenix'
          />
          <FormikTextField
            fullWidth={false}
            formik={formik}
            id='state'
            name='state'
            label='State'
            placeholder='Arizona'
          />
          <FormikTextField
            fullWidth={false}
            formik={formik}
            id='zipCode'
            name='zipCode'
            label='Zipcode'
            placeholder='85123'
          />
        </StyledFormContainer>
        <StyledButton
          type='submit'
          style={{
            textAlign: 'center',
            float: 'right',
            marginRight: '-60%',
            marginTop: '-5%',
            borderRadius: '16px',
            width: '250px',
            backgroundColor: '#2196f3',
          }}
          variant='contained'
        >
          Submit
        </StyledButton>
      </form>
    </StyledContainer>
  );
};

export default ContactForm;
