import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { WriteModal } from '../../components/WriteModal';
import { MainLayout } from '../../layouts/MainLayout';
import { useAppSelector } from '../../redux/hooks';
import { selectActiveModal } from '../../redux/slices/modal';

const WritePage: NextPage = () => {
  return (
    <MainLayout>
      <WriteModal />
    </MainLayout>
  );
};

export default WritePage;
