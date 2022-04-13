import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getLocation } from '../../app/api/address';
import PropTypes from 'prop-types';

const Select = styled.select`
	width: 100%;
	flex: 50%;
	padding: .4em 1em;
	border-radius: 1em;
	border: 1px solid #888;
`

const SelectMenu = ({location, code, onChange, isInvalid, value}) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocation(location, code)
    .then(({data}) => setLocations(data))
  }, [location, code]);

	return (
		<Select
		  disabled={locations.length === 0} 
      onChange={e => onChange(e.target.value)}
      isInvalid={isInvalid}
      defaultValue=""
    >
			<option value="">Choose Location</option>
      {
        locations.map((location, i) => <option 
            value={JSON.stringify({label: location.nama, value: location.kode})} 
            key={i}
          >{location.nama}
          </option>
        )
      }
		</Select>
	)
}

export default SelectMenu


SelectMenu.defaultProps = {
  location: 'provinsi',
  isInvalid: false,
  value: ''
}

SelectMenu.propTypes = {
  location: PropTypes.oneOf(['provinsi', 'kabupaten', 'kecamatan', 'kelurahan']).isRequired,
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
}