import React from 'react';
import { PhareCardType } from '../components';

export type GetPShareStepseContextType = {
  type: PhareCardType;
};
const GetPShareStepsContext = React.createContext<GetPShareStepseContextType>({ type: 'ruby' });

export const GetPShareStepsProvider = GetPShareStepsContext.Provider;

export default GetPShareStepsContext;
