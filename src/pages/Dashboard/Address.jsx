import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAddress, createAddress } from '../../app/api/address';
import SelectMenu from '../../components/SelectMenu'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 100vh;
`
const Content = styled.div`
	width: 80%;
	height: 100%;
	padding: 2em;
	background-color: #eee;
	overflow-y: auto;
`
const Title = styled.h1`
	font-size: 2rem
`
const Container = styled.div`
	display: flex;
	justify-content: space-between;
`
const List = styled.div`
	width: 60%;
	height: 80vh;
`
const Forms = styled.form`
	width: 36%;
	padding: 2em;
	border-radius: 1em;
	background-color: #fff;
`
const Card = styled.div`
	margin-bottom: 1em;
	width: 100%;
	display: flex;
	padding: 2em;
	border-radius: 1em;
	background-color: #fff;
	flex-wrap: wrap;
	grid-gap: 1em;
`
const Label = styled.div`
	flex: 30%;
`
const Text = styled.input`
	flex: 50%;
	padding: .4em 1em;
	border-radius: 1em;
	border: 1px solid #eee;
`
const Feedback = styled.p`
	font-size: .8rem;
	margin: 0 auto 0 2em;
	color: red;
`
const Input = styled.input`
	width: 100%;
	flex: 50%;
	padding: .4em 1em;
	border-radius: 1em;
	border: 1px solid #888;
`
const TextArea = styled.textarea`
	width: 100%;
	flex: 50%;
	padding: .4em 1em;
	border-radius: 1em;
	border: 1px solid #888;

`
const Submit = styled.button`
	padding: .4em 2em;
	border: none;
	cursor: pointer;
	outline: none;
	border-radius: 1em;
	border: 1px solid #888;	
	background-color: #f07613;
	color: #fff;
	margin: 1em 0;
`
const FormTitle = styled.h1`
	text-align: center;
	margin-bottom: 1em;
`
const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const schema = yup.object({
  name: yup.string().required('Nama alamat harus diisi'),
  detail: yup.string().required('Detail alamat harus diisi'),
  provinsi: yup.object().required('Provinsi belum dipilih').nullable(),
  kabupaten: yup.object().required('Kabupaten belum dipilih').nullable(),
  kecamatan: yup.object().required('Kecamatan belum dipilih').nullable(),
  kelurahan: yup.object().required('kelurahan belum dipilih').nullable(),
}).required();

const Address = () => {
 	const [address, setAddress] = useState([]);
  const { register, formState: { errors }, handleSubmit, setValue, getValues, watch} = useForm({
    resolver: yupResolver(schema)
  });
  const [status, setStatus] = useState('idle');
  const updateValue = (field, value) => setValue(field, value, {shouldValidate: true, shouldDirty: true});
  const allField = watch();

  useEffect(() => {
    setValue('kabupaten', null);
    setValue('kecamatan', null);
    setValue('kelurahan', null);
  }, [allField.provinsi, setValue]);
  useEffect(() => {
    setValue('kecamatan', null);
    setValue('kelurahan', null);
  }, [allField.kabupaten, setValue]);
  useEffect(() => {
    setValue('kelurahan', null);
  }, [allField.kecamatan, setValue]);

  useEffect(() => {
    getAddress()
    .then(({data: {data}}) => setAddress(data));
  }, []);

  const onSubmit = async formData => {
    const payload = {
      name: formData.name,
      detail: formData.detail,
      provinsi: formData.provinsi.label,
      kabupaten: formData.kabupaten.label,
      kecamatan: formData.kecamatan.label,
      kelurahan: formData.kelurahan.label,
    }

    setStatus('process');
    const { data } = await createAddress(payload);
    if(!data.error) {
      setStatus('success');
	    getAddress()
  	  .then(({data: {data}}) => setAddress(data))
    }
  }

	return (
		<Wrapper>
			<Sidebar />
			<Content>
				<Title>Address</Title>
				<Container>
					<List>
						{
							address.map((item, i) => (
								<Card key={i}>
									<Header>
										<h1>Information</h1>
							</Header>
									<Label>Name : </Label>
									<Text type='text' defaultValue={ item.name } disabled/>
									<Label>Detail :</Label>
									<Text type='text' defaultValue={ item.detail } disabled/>
									<Label>Kelurahan :</Label>
									<Text type='text' defaultValue={ item.kelurahan } disabled/>
									<Label>Kecamatan :</Label>
									<Text type='text' defaultValue={ item.kecamatan } disabled/>
									<Label>Kabupaten :</Label>
									<Text type='text' defaultValue={ item.kabupaten } disabled/>
									<Label>Provinsi :</Label>
									<Text type='text' defaultValue={ item.provinsi } disabled/>
								</Card>
							))
						}
					</List>
					<Forms onSubmit={handleSubmit(onSubmit)}>
							<FormTitle>Add New Address</FormTitle>
							<Label>Name :</Label>
							<Input 
								type='text'
								isInvalid={errors.name}
	              {...register('name')}
							/>
							<Feedback>{ errors.name?.message }</Feedback>
							<Label>Provinsi :</Label>
							<SelectMenu 
								onChange={value => updateValue('provinsi', JSON.parse(value))}
	              isInvalid={errors.provinsi}
	              value={getValues()?.provinsi?.value}
	              location="provinsi"
	            />
							<Feedback>{ errors.provinsi?.message }</Feedback>
							<Label>Kabupaten :</Label>
							<SelectMenu 
							  onChange={value => updateValue('kabupaten', JSON.parse(value))}
	              isInvalid={errors.kabupaten}
	              code={getValues().provinsi?.value}
	              location="kabupaten"
	              value={getValues()?.kabupaten?.value}
	            />
							<Feedback>{ errors.kabupaten?.message }</Feedback>
							<Label>Kecamatan :</Label>
							<SelectMenu 
							  onChange={value => updateValue('kecamatan', JSON.parse(value))}
	              isInvalid={errors.kecamatan}
	              code={getValues().kabupaten?.value}
	              location="kecamatan"
	              value={getValues()?.kecamatan?.value}
	            />
							<Feedback>{ errors.kecamatan?.message }</Feedback>
							<Label>Kelurahan :</Label>
							<SelectMenu 
							  onChange={value => updateValue('kelurahan', JSON.parse(value))}
	              isInvalid={errors.kelurahan}
	              code={getValues().kecamatan?.value}
	              location="kelurahan"
	              value={getValues()?.kelurahan?.value}
	            />
							<Feedback>{ errors.kelurahan?.message }</Feedback>
							<Label>Detail :</Label>
							<TextArea {...register('detail')}></TextArea>	
							<Submit type="submit" disabled={status === 'process'}>
			          { status === 'process' ? 'Saving...' : 'Submit'}
							</Submit>
					</Forms>
				</Container>
			</Content>
		</Wrapper>
	)
}

export default Address