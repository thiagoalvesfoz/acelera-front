import React, { Fragment } from 'react';

import {
  Grid,
  Container,
  LinearProgress,
  Card,
  Button
} from '@material-ui/core';

import CountUp from 'react-countup';
import Joyride from 'react-joyride';

export default function LivePreviewExample() {
  const run = true;
  const steps = [
    {
      target: '.tourStep1',
      title: 'Heading example',
      content: 'This is the page heading, section for demonstration purposes.'
    },
    {
      target: '.tourStep6',
      title: 'Buttons',
      content: 'Tour example attached to a button element.'
    },
    {
      target: '.tourStep7',
      content: 'Another button guided tour example.'
    },
    {
      target: '.tourStep4',
      title: 'Dashboard card 1',
      content: 'This is a custom card box that can be used in a dashboard.'
    },
    {
      target: '.tourStep2',
      title: 'Dashboard card 2',
      content: 'This is a custom card box that can be used in a dashboard.'
    },
    {
      target: '.tourStep3',
      title: 'Dashboard card 3',
      content: 'This is a custom card box that can be used in a dashboard.'
    }
  ];

  return (
    <Fragment>
      <div className="px-5 py-1">
        <Joyride
          steps={steps}
          continuous={true}
          run={run}
          scrollToFirstStep={true}
          showProgress={true}
          showSkipButton={true}
        />
        <div className="bg-vicious-stance mb-4 rounded">
          <Container maxWidth="md">
            <div className="text-center py-5">
              <h3 className="display-3 mb-4 font-weight-bold text-white tourStep1">
                Guided Tours Heading Example
              </h3>
              <p className="font-size-lg px-4 mb-4 text-white-50">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </p>
              <div className="text-center">
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  className="font-size-lg mx-2 tourStep6">
                  <span className="btn-wrapper--label">
                    UI Kit Live Preview
                  </span>
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className="font-size-lg mx-2 tourStep7">
                  <span className="btn-wrapper--label">Buy now</span>
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Card className="card-box mb-4 p-3 tourStep4">
              <div className="d-flex align-items-center pb-4 justify-content-between">
                <div>
                  <div className="font-weight-bold">Deliveries</div>
                  <span className="text-black-50 d-block">
                    Total deliveries to date
                  </span>
                </div>
                <div className="display-4 font-weight-bold text-second">
                  <CountUp
                    start={0}
                    end={23.485}
                    duration={6}
                    deplay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </div>
              </div>
              <div>
                <LinearProgress
                  color="secondary"
                  variant="determinate"
                  value={85}
                />
                <div className="align-box-row progress-bar--label mt-2 text-muted">
                  <div>Target</div>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card className="card-box mb-4 p-3 tourStep2">
              <div className="d-flex align-items-center pb-4 justify-content-between">
                <div>
                  <div className="font-weight-bold">Orders</div>
                  <span className="text-black-50 d-block">
                    Total orders to date
                  </span>
                </div>
                <div className="display-4 font-weight-bold text-first">
                  $12,346
                </div>
              </div>
              <div>
                <LinearProgress
                  color="primary"
                  variant="determinate"
                  value={87}
                />
                <div className="align-box-row progress-bar--label mt-2 text-muted">
                  <div>Target</div>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className="card-box mb-4 p-3 tourStep3">
              <div className="d-flex align-items-center pb-4 justify-content-between">
                <div>
                  <div className="font-weight-bold">Customers</div>
                  <span className="text-black-50 d-block">
                    Total customers to date
                  </span>
                </div>
                <div className="display-4 font-weight-bold text-warning">
                  $ 2,3M
                </div>
              </div>
              <div>
                <LinearProgress
                  color="secondary"
                  variant="determinate"
                  value={55}
                />
                <div className="align-box-row progress-bar--label mt-2 text-muted">
                  <div>Target</div>
                  <div className="ml-auto">100%</div>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
