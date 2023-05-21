
import React, { useState, useEffect } from 'react';

import img from '../constants';
export default function API() {
  return (
    <div>
      <img style={{objectFit: "contain", height: '100%', width: '100%'}}src={img.api}  />
    </div>
  );
}