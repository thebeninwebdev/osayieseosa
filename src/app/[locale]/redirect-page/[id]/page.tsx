'use client';

import React from 'react';
import { LampDemo } from '../../components/LampHeader';

export default function Redirect({ params }: { params: { id: string } }) {
  return (
    <div className='w-full'>
        <LampDemo id={params.id} />
        </div>
  );
}

