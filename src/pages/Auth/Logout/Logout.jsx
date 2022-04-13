import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../app/api/auth';
import { userLogout } from '../../../app/features/Auth/actions'

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    logoutUser()
    .then(_ => dispatch(userLogout()))
    .then(_ => navigate('/'));
  }, [dispatch, navigate])
  return (
    <div>
      <div>
        <p>Loging out...</p>
      </div>
    </div>
  )
}

export default Logout