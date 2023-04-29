#!/usr/bin/env node
import React from 'react';
import ReactPDF from '@react-pdf/renderer';

import CV from './pdf';

ReactPDF.render(<CV />, `./brett-dorrans-cv.pdf`);

export { default as copy } from './copy';
