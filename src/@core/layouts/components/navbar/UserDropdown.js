// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// ** Reactstrap Imports
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'

// ** Default Avatar Image
const getGravatar = (email, size = 120) => {
  const md5 = require('md5')
  const hash = md5(email)
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=mm`
}

const UserDropdown = () => {
  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name fw-bold'>Javier Buil</span>
          <span className='user-status'>Senior Software Engineer</span>
        </div>
        <Avatar img={getGravatar('javier@buil.pro')} imgHeight='40' imgWidth='40' />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to='/' onClick={e => e.preventDefault()}>
          <User size={14} className='me-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/' onClick={e => e.preventDefault()}>
          <Mail size={14} className='me-75' />
          <span className='align-middle'>Inbox</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/' onClick={e => e.preventDefault()}>
          <CheckSquare size={14} className='me-75' />
          <span className='align-middle'>Tasks</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
