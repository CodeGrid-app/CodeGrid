import { Menu, Transition } from '@headlessui/react'

function AccountDropdownMenu() {
  return (
    <Menu>
      <Menu.Button>
        <div id='navbar-avatar' className='navbar-avatar'>
            <div className='avatar-image-wrapper'>
            <img
                src='/images/avatar.png'
                className='avatar-image'
            ></img>
            </div>
        </div>
      </Menu.Button>
      <Menu.Items className={'flex direction-column logged-dropdown-menu'}>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active} flex username-link items-center`}
              href="/"
            >
                <div id='navbar-avatar' className='navbar-avatar'>
                    <div className='avatar-image-wrapper'>
                    <img
                        src='/images/avatar.png'
                        className='avatar-image'
                    ></img>
                    </div>
                </div>
                Username
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active}`}
              href="/"
            >
              Submissions
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active}`}
              href="/"
            >
              Sign out
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default AccountDropdownMenu;