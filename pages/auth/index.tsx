import { NextPage } from 'next';
import React from 'react';
import AuthModal from '../../components/AuthModal';
import { MainLayout } from '../../layouts/MainLayout';

const AuthPage: NextPage = () => {
  return (
      <MainLayout>
        <AuthModal />
      </MainLayout>
  );
};

export default AuthPage;
