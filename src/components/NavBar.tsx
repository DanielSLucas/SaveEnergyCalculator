import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

import { Container, DropdownMenu, HorizontalMenu, MenuButton } from '../styles/components/NavBar';

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container showDropdownMenu={showMenu}>
      <div>
        <HorizontalMenu>          
          <li>
            <Link href="/">
              <img src="logoSmall.svg" alt="Calculator"/>            
            </Link>
          </li>
          <li> <Link href="/" >Home</Link> </li>
          <li> <Link href="#" >Smart grid</Link> </li>
          <li> <Link href="/calculator" >Calculadora</Link> </li>          
        </HorizontalMenu>

        
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <FiX /> : <FiMenu />}
        </MenuButton>

        { showMenu && (
          <DropdownMenu>
            <ul>
              <li><Link href="/" >Home</Link></li>
              <li><Link href="#" >Smart grid</Link></li>
              <li><Link href="/calculator" >Calculadora</Link></li>
            </ul>
          </DropdownMenu>
        )}
      </div>
    </Container>
  );
}

export default NavBar;