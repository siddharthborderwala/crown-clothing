import React from 'react';
import { CustomButtonConatiner } from './custombutton.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonConatiner {...props}>{children}</CustomButtonConatiner>
);

export default CustomButton;
