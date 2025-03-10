import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
 } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Menu>
        <MenuButton as={Button} colorScheme='pink'>
            Profile
        </MenuButton>
        <MenuList>
            <MenuGroup title='Profile'>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
            </MenuGroup>
        </MenuList>
        </Menu>
    </>
  )
}

export default App
