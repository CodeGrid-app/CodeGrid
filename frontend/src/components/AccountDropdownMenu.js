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
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
      <Menu.Items className={'flex direction-column logged-dropdown-menu'}>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'} flex username-link items-center`}
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
      </Transition>
    </Menu>
  )
}

export default AccountDropdownMenu;