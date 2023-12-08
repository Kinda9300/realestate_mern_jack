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
import { Hazardous } from "../hazardous";
import { Long } from "../long";
import { Financial } from "../financial";
import { Owner } from "../owner";
import { Neighburhood } from "../neighburhood";

// import custom css
import "./index.css";

const RealReport = () => {

  return (
    <Grid container spacing={gridSpacing}>
        <div className='report-container'>
            <div><span>Back</span></div>
            <div className='report-content'  >
                <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" className="report-content-left">
                    <ReportHeader  />
                    <ReportContent  />
                    <ReportValuation />
                    <ReportPermits />
                    <Zoning />
                    <Environmental />
                    <Hazardous />
                    <Long />
                    <Financial />
                    <Owner />
                    <Neighburhood />

                </div>
                <div className='report-content-right'>
                  <nav id="navbar-example3" className="navbar navbar-light bg-light">
                    <nav className="nav nav-pills flex-column">
                      <a className="nav-link" href="#item-1">Aiden(AI Copilot)</a>
                     
                      <a className="nav-link" href="#item-2">Property Valuation</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-2-1">Valuations</a>
                        <a className="nav-link ml-3 my-1" href="#item-2-2">Valuation Insights</a>
                      </nav>

                      <a className="nav-link" href="#item-3">Permits</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-3-1">PermitHistory</a>
                      </nav>

                      <a className="nav-link" href="#item-4">Zoning</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-4-1">Zoning Uses</a>
                        <a className="nav-link ml-3 my-1" href="#item-4-2">Zoning Information</a>
                      </nav>

                      <a className="nav-link" href="#item-5">Environmental</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-5-1">Climate Risk</a>
                        <a className="nav-link ml-3 my-1" href="#item-5-2">FEMA FLOOD Map</a>
                        <a className="nav-link ml-3 my-1" href="#item-5-3">FLOOD Data</a>
                        <a className="nav-link ml-3 my-1" href="#item-5-4">Average Daily Weather</a>

                      </nav>

                      <a className="nav-link" href="#item-6">Hazardous Materials</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-6-1">Radon & Air Quality</a>
                        <a className="nav-link ml-3 my-1" href="#item-6-2">Environmental Ratings</a>
                        <a className="nav-link ml-3 my-1" href="#item-6-3">Nearby Facilities</a>

                      </nav>

                      <a className="nav-link" href="#item-7">Long-Term Rental</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-7-1">Rental Potential</a>
                        <a className="nav-link ml-3 my-1" href="#item-7-2">Rental Trends</a>
                        <a className="nav-link ml-3 my-1" href="#item-7-3">Comparable Listings</a>

                      </nav>

                      <a className="nav-link" href="#item-8">Financial</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-8-1">Liens</a>
                        <a className="nav-link ml-3 my-1" href="#item-8-2">Loan & Transaction History</a>
                        <a className="nav-link ml-3 my-1" href="#item-8-3">Tax Information</a>
                        <a className="nav-link ml-3 my-1" href="#item-8-4">Tax History</a>

                      </nav>

                      <a className="nav-link" href="#item-9">Ownership</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-9-1">Current Owner</a>
                        <a className="nav-link ml-3 my-1" href="#item-9-2">Previous Sales</a>
                        <a className="nav-link ml-3 my-1" href="#item-9-3">HOA Information</a>

                      </nav>

                      <a className="nav-link" href="#item-10">Neighborhood</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-10-1">School Information</a>
                        <a className="nav-link ml-3 my-1" href="#item-10-2">Nearby Schools</a>
                        <a className="nav-link ml-3 my-1" href="#item-10-3">Neighborhood Scores</a>

                      </nav>

                      <a className="nav-link" href="#item-11">Building & Site</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-11-1">Property Characteristics</a>
                        <a className="nav-link ml-3 my-1" href="#item-11-2">Site Information</a>
                        <a className="nav-link ml-3 my-1" href="#item-11-3">Location Information</a>

                      </nav>

                      <a className="nav-link" href="#item-12">Demographics</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-12-1">Demographics</a>

                      </nav>

                      <a className="nav-link" href="#item-13">Crime</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-13-1">Arrests by Offense</a>
                        <a className="nav-link ml-3 my-1" href="#item-13-2">Violent Crimes</a>
                      </nav>

                      <a className="nav-link" href="#item-14">Market Trends</a>
                      <nav className="nav nav-pills flex-column">
                        <a className="nav-link ml-3 my-1" href="#item-14-1">Snapshot (Last 30 days)</a>
                        <a className="nav-link ml-3 my-1" href="#item-14-2">Sales (Last 6 Months)</a>
                        <a className="nav-link ml-3 my-1" href="#item-14-3">Listings (Last 6 Months)</a>
                        <a className="nav-link ml-3 my-1" href="#item-14-4">Home vs Recently Sold Properties</a>

                      </nav>

                    </nav>
                  </nav>
                </div>
            </div>
        </div>
    </Grid>
  );
};

export default RealReport;
