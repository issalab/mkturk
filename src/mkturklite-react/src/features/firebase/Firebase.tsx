import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { init } from './firebaseSlice';

export function Firebase() {
  const dispatch = useAppDispatch();
  dispatch(init());
  return;
}
