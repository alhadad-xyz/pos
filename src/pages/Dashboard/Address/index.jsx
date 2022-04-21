import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAddress, createAddress } from '../../../app/api/address';
import SelectMenu from '../../../components/SelectMenu'
import Sidebar from '../Sidebar'
import { Wrapper, Content, Title, Container, List, Forms, Card, Label, Text, Feedback, Input, TextArea, Submit, FormTitle, Header } from './styled'

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