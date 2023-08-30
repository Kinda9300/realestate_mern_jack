// import { useEffect } from 'react';


// material-ui
import { Grid } from '@mui/material';
// import { Link } from 'react-router-dom';

// project imports
import { gridSpacing } from 'store/constant';

// import These Component
import { ReportHeader } from "../reportheader";
import { ReportContent } from "../reportcontent";
import {ReportValuation} from "../reportvaluation";
import {ReportPermits} from "../reportpermits";
import {Zoning} from "../zoning";
import { Environmental } from "../environmental";


// import custom css
import "./index.css";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const RealReport = () => {
//   const [isLoading, setLoading] = useState(true);
//   useEffect(() => {
//     setLoading(false);
//   }, []);

  return (
    <Grid container spacing={gridSpacing}>
        <div className='report-container'>
            <div><span>Back</span></div>
            <div className='report-content'>
                <div className="report-content-left">
                    <ReportHeader />
                    <ReportContent />
                    <ReportValuation />
                    <ReportPermits />
                    <Zoning />
                    <Environmental />
                </div>
                <div className='report-content-right'>

                </div>
            </div>
        </div>
    </Grid>
  );
};

export default RealReport;
