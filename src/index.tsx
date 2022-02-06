#!/usr/bin/env node
import React from 'react';
import ReactPDF from '@react-pdf/renderer';

import MyDocument from './pdf';

ReactPDF.render(<MyDocument />, `./brett-dorrans-cv.pdf`);
