import React, { Fragment } from 'react';

import { NavLink as RouterLink } from 'react-router-dom';

import {
  Grid,
  Container,
  Input,
  InputLabel,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Button,
  FormControl
} from '@material-ui/core';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

const LivePreviewExample = () => {
  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };
  return (
    <Fragment>
      <div className="app-wrapper min-vh-100">
        <div className="app-main flex-column">
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image"
                  style={{ backgroundImage: 'url(' + hero3 + ')' }}
                />
                <div className="bg-composed-wrapper--content py-5">
                  <Container maxWidth="lg">
                    <Grid container spacing={5}>
                      <Grid
                        item
                        xs={12}
                        lg={7}
                        className="d-flex flex-column align-items-center">
                        <span className="w-100 text-left text-md-center pb-4">
                          <h1 className="display-3 text-xl-left text-center mb-3 font-weight-bold">
                            Faça Login com a sua Conta!!
                          </h1>
                        </span>
                        <Card className="m-0 w-100 p-0 border-0">
                          <CardContent className="p-3">
                            <form className="px-5">
                              <div className="mb-3">
                                <FormControl className="w-100">
                                  <InputLabel htmlFor="input-with-icon-adornment">
                                    Email address
                                  </InputLabel>
                                  <Input
                                    fullWidth
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <MailOutlineTwoToneIcon />
                                      </InputAdornment>
                                    }
                                  />
                                </FormControl>
                              </div>
                              <div className="mb-3">
                                <FormControl className="w-100">
                                  <InputLabel htmlFor="standard-adornment-password">
                                    Password
                                  </InputLabel>
                                  <Input
                                    id="standard-adornment-password"
                                    fullWidth
                                    type="password"
                                    startAdornment={
                                      <InputAdornment position="start">
                                        <LockTwoToneIcon />
                                      </InputAdornment>
                                    }
                                  />
                                </FormControl>
                              </div>
                              <div className="w-100">
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={checked1}
                                      onChange={handleChange1}
                                      value="checked1"
                                      color="primary"
                                    />
                                  }
                                  label="Remember me"
                                />
                              </div>
                              <div className="text-center">
                                <Button
                                  color="primary"
                                  variant="contained"
                                  size="large"
                                  className="my-2">
                                  Logar
                                </Button>
                              </div>
                              <div>
                                <Button
                                  component={RouterLink}
                                  to="/PagesRecoverPassword"
                                  className="my-2">
                                  Esqueci minha senha
                                </Button>
                              </div>
                              <div>
                                <Button
                                  component={RouterLink}
                                  to="/PagesRegister"
                                  className="my-2">
                                  Cadastrar uma nova Conta
                                </Button>
                              </div>
                            </form>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LivePreviewExample;
