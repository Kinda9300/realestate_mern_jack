import * as React from 'react';
import Box from '@mui/material/Box';

import './index.css';

import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { CrimeChart } from './crimeChart';

const ArrestsByOffense = () => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <CrimeChart />
    </Box>
  );
};

export const Crime = () => {
  return (
    <div className="report-content-content">
      <div className="report-content-content-header">
        <span>Crime</span>
      </div>
      <div className="permit-accordian-div">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Arrests by Offense" content={ArrestsByOffense} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>

      <div className="font-size-xs gray-dark mt-s mb-s">Source(s): FBI</div>
    </div>
  );
};
