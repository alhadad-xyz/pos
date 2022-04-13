import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { registerUser } from '../../../app/api/auth'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: rgb(166,82,15);
	background: linear-gradient(90deg, rgba(166,82,15,1) 0%, rgba(240,118,19,1) 35%, rgba(255,158,1,1) 100%); 
`
const Container = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1em;
	padding: 2em;
	background-color: #eee;
`
const Title = styled.h1`
`
const Field = styled.input`
	margin: 1em 0;
	padding: 1em 2em;
	border: none;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	outline: none;
	border-radius: 1em;
`
const Feedback = styled.p`
	font-size: .8rem;
	margin: 0 auto 0 2em;
	color: red;
`
const Button = styled.button`
	margin: 1em 0;
	padding: 1em 2em;
	border: none;
	outline: none;
	border-radius: 1em;
	font-weight: 800;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	background: rgba(240,118,19,1);
	color: #fff;
	cursor: pointer;
`
const Alert = styled.div`
	position: absolute;
	top: 4%;
	text-align: center;
	padding: 1em 2em;
	background: #ffff;
	border-radius: 1em;
	background: #2cff57;
`
const Text = styled.p`
	font-size: .8rem;
	color: #666;
`

const TextLink = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: rgba(240,118,19,1);
`
const Span = styled.span`
	font-weight: 600;
	cursor: pointer;
	color: blue;
`

const schema = yup.object({
  fullname: yup.string().required('Nama Lengkap harus diisi'),
  email: yup.string().email().required('Email harus valid'),
  password: yup.string().min(8, 'Minimal panjang password harus 8 karakter').required('Password Harus diisi'),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Password konfirmasi tidak sama'),
}).required();


const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
}

const Register = () => {
  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: yupResolver(schema)
  });
  const [status, setStatus] = useState(statusList.idle);
  const navigate = useNavigate();

  const onSubmit = async formData => {
    setStatus(statusList.process);
    const { data } = await registerUser(formData);
    if(data.error) {
      let fields = Object.keys(data.fields);
      fields.forEach(field => setError(field, {type: 'server', message: data.fields[field]?.properties?.message}));
      setStatus(statusList.error);
      return;
    }
    setStatus(statusList.success);
  }

	return (
		<Wrapper>
		{ status === statusList.success ? <Alert> Sign up success, please <Span onClick={() => navigate('/auth/signin')}>login</Span> with your email and password account </Alert> : null }
			<Container onSubmit={handleSubmit(onSubmit)}>			
				<Title>Sign Up</Title>
				<Field 
					type='text' 
					placeholder='Name' 
					isInvalid={errors.fullname}
					{...register('fullname')}
				/>
				<Feedback>{ errors.fullname?.message }</Feedback>

				<Field 
					type='email' 
					placeholder='Email Address' 
					isInvalid={errors.email}
					{...register('email')}
				/>
				<Feedback>{ errors.email?.message }</Feedback>

				<Field 
					type="password" 
          placeholder="Password" 
          isInvalid={errors.password}
          {...register('password')}
        />
				<Feedback>{ errors.password?.message }</Feedback>

				<Field 
					type="password" 
          placeholder="Confirm Password" 
          isInvalid={errors.password_confirmation}
          {...register('password_confirmation')}
        />
				<Feedback>{ errors.password_confirmation?.message }</Feedback>

				<Button type="submit" disabled={status === statusList.process}>
					{ status === statusList.process ? 'Loading...' : 'Register'}
				</Button>

				<Text>Already have an account ? <TextLink to="/auth/signin">Sign in!</TextLink></Text>
			</Container>
		</Wrapper>
	)
}

export default Register