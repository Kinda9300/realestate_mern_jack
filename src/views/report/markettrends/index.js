import * as React from 'react';
import Box from '@mui/material/Box';

import './index.css';

import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { Button, Typography } from '@mui/material';
import { PlunkMarketInsightChart } from './plunkMarektInsightChart';
import { HomeCompareChart } from './homeCompareChart';
import { PlunkReModelValueChart } from './plunkRemodelValueChart';

const PlunkHomeValue = () => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Box
        sx={{
          color: 'black',
          fontSize: '20px',
          marginBottom: '50px'
        }}
      >
        Plunk Home Value™
      </Box>
      <Box
        sx={{
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            color: 'black',
            fontSize: '30px',
            marginBottom: '15px'
          }}
        >
          $999,440.32
        </Box>
        <Box
          sx={{
            color: 'green',
            fontSize: '20px',
            marginBottom: '20px'
          }}
        >
          $299.62/day
        </Box>
        <Button
          variant="contained"
          sx={{
            marginBottom: '50px'
          }}
        >
          Improve accuracy
        </Button>
        <Box>powered by plunk</Box>
      </Box>
    </Box>
  );
};
const PlunkMarketInsight = () => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Box
        sx={{
          color: 'black',
          fontSize: '20px'
        }}
      >
        Plunk Market Insights™
      </Box>
      <Box
        sx={{
          color: 'black',
          fontSize: '15px',
          marginBottom: '50px'
        }}
      >
        for 98115 - August 2nd, 2023
      </Box>
      <PlunkMarketInsightChart />
      <PlunkMarketInsightChart />
      <PlunkMarketInsightChart />
      <PlunkMarketInsightChart />
    </Box>
  );
};
const PlunkHomeCompare = () => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Box
        sx={{
          color: 'black',
          fontSize: '20px'
        }}
      >
        Home compared to 91436
      </Box>
      <Box
        sx={{
          color: 'black',
          fontSize: '15px',
          marginBottom: '50px'
        }}
      >
        June 19th, 2023
      </Box>
      <HomeCompareChart />
    </Box>
  );
};
const PlunkRemodelValue = () => {
  return (
    <Box
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Box
        sx={{
          color: 'black',
          fontSize: '20px',
          marginBottom: '50px'
        }}
      >
        Plunk Remodel Value™
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            textAlign: 'right',
            width: '40%',
            marginRight: '20px'
          }}
        >
          <Box
            sx={{
              backgroundColor: 'green',
              borderRadius: 8,
              padding: '10px',
              marginBottom: '30px'
            }}
          >
            <Typography
              sx={{
                color: 'black',
                fontSize: '20px'
              }}
            >
              Plunk Remodel Value™
            </Typography>
            <Typography
              sx={{
                color: 'black',
                fontSize: '30px'
              }}
            >
              $2,267,790
            </Typography>
            <Typography
              sx={{
                color: 'green',
                fontSize: '15px'
              }}
            >
              $299.62 /day
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '15px'
            }}
          >
            Remodel up
          </Typography>
          <Typography
            sx={{
              color: 'black',
              fontSize: '15px',
              marginBottom: '40px'
            }}
          >
            $821,090
          </Typography>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '15px'
            }}
          >
            Plunk Home Value™
          </Typography>
          <Typography
            sx={{
              color: 'black',
              fontSize: '15px',
              marginBottom: '40px'
            }}
          >
            $1,446,700
          </Typography>

          <Box>powered by plunk</Box>
        </Box>
        <Box
          sx={{
            width: '40%'
          }}
        >
          <PlunkReModelValueChart />
        </Box>
      </Box>
    </Box>
  );
};

export const MarketTrends = () => {
  return (
    <div className="report-content-content" id="item-14">
      <div className="report-content-content-header">
        <span>Market Trends - Dover, NH (03820)</span>
      </div>
      <div className="permit-accordian-div" id="item-14-1">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Plunk Home Value™" content={PlunkHomeValue} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      <div className="permit-accordian-div" id="item-14-2">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Plunk Market Insights™" content={PlunkMarketInsight} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      <div className="permit-accordian-div" id="item-14-3">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Home Compare" content={PlunkHomeCompare} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      <div className="permit-accordian-div" id="item-14-4">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Plunk Remodel Value™" content={PlunkRemodelValue} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>

      <div className="font-size-xs gray-dark mt-s mb-s">Source(s): Zoneomics</div>
    </div>
  );
};
