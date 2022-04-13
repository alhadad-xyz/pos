import * as yup from 'yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../app/api/auth'
import { userLogin } from '../../../app/features/Auth/actions'
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

const Text = styled.p`
	font-size: .8rem;
	color: #666;
`

const TextLink = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: rgba(240,118,19,1);
`
export const schema = yup.object({
  email: yup.string().email('Email harus valid').required('Email harus diisi'),
  password: yup.string().min(8, 'Password minimal 8 karakter').required('Password harus diisi')
}).required();

export const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
}

const Login = () => {
	const {register, handleSubmit, formState: { errors}, setError} = useForm({
    resolver: yupResolver(schema)
  });
  
  const [status, setStatus] = useState(statusList.idle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async formData => {
    setStatus(statusList.process);
    const { data } = await loginUser(formData);
    if(data.error) {
      setError('password', { type: 'invalidCredential', message: data.message});
      setStatus(statusList.error)
    } else {
      const { user, token } = data;
      dispatch(userLogin({user, token}));
      navigate('/');
    }
    setStatus(statusList.success);
  }

	return (
		<Wrapper>
			<Container onSubmit={handleSubmit(onSubmit)}>			
				<Title>Sign In</Title>
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

				<Button type="submit" disabled={status === statusList.process}>
					{ status === statusList.process ? 'Loading...' : 'Login'}
				</Button>

				<Text>Don't have an account ? <TextLink to="/auth/signup">Sign up!</TextLink></Text>
			</Container>
		</Wrapper>
	)
}

export default Login