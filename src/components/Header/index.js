import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src = {logo} alt = "GoBarber" />
          <Link to = "/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
        <Notifications />        

          <Profile>
            <div>
              <strong>{profile.avatar.url}</strong>              
              <Link to = "/profile">Meu perfil</Link>
            </div>
            <img src = {profile.avatar && profile.avatar.url} alt = "Profile" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}