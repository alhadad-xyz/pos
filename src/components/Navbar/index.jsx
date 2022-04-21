import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { listen } from '../.././app/listener';
import { Wrapper, Title, Container, DateNow, Button, SettingIcon, UserIcon } from './styled'

const getDate = () => {
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

const MenuIcon = () => {
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

const Navbar = () => {
    return (
        <Wrapper>
            <Title>Foodie's</Title>
            <Container>
                <DateNow>{getDate()}</DateNow>
                <MenuIcon />                     
            </Container>
        </Wrapper>
    )
}

export default Navbar