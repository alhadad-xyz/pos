import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { listen } from '../.././app/listener';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { User } from '@styled-icons/boxicons-regular'
import { SettingsOutline } from '@styled-icons/evaicons-outline'

// GET TODAY DATE
export const getDate = () => {
  const d = new Date()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const day = days[d.getDay()]
  const date = d.getDate()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[d.getMonth()]
  const year = d.getFullYear()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const today = `${day}, ${date} ${month} ${year}, ${hour}:${minute}`
  return today
}

// CEK AVAILABLE USER
const Button = styled(Link)`
  padding: .5em 1em;
  background-color: #f4f5f6;
  border-radius: .5em;
  display: flex;
  align-items: center;
  grid-gap: .8em;
  cursor: pointer;
`
const SettingIcon = styled(SettingsOutline)`
  color: #000;
`
const UserIcon = styled(User)`
  color: #000;
`
export const MenuIcon = () => {
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    listen();
  }, [])

  if (auth.user) {
    return (
      <Button to='/dashboard'><SettingIcon size='24' /></Button>
    )
  } else {
    return (
      <Button to='/auth/signin'><UserIcon size='24' /></Button>
    )
  }
}
