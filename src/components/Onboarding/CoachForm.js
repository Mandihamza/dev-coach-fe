import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  FormControl,
  Select,
  InputLabel,
  makeStyles,
  MenuItem,
  TextField,
  Box,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab/';
import { countries } from '../../utils/countries';
import { buttonTheme, Logo } from '../Landing/Landing-styles';
import { FormButton, InfoParagraph } from './StudentForm';
import { chooseUserRole } from '../../state/actions/authenticationActions';

const CoachCardContainer = styled.div`
  max-width: 100%;
  margin: 2rem 0;

  .coach-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50rem;
    background: #fff;
    box-shadow: 0 6px 8px #d3d3d3;
    padding: 1rem;
    border-radius: 6px;

    h1 {
      margin: 0;
    }
    .submit-button {
      margin-bottom: 1rem;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 600,
  },
  textField: {
    width: 600,
    marginTop: '0.6em',
    marginBottom: '0.3em',
  },
  box: {
    '& > *': {
      marginTop: '0.3em',
      marginBottom: '0.3em',
    },
  },
  description: {
    width: 600,
    paddingTop: '1em',
    paddingBottom: '2em',
  },
}));
const CoachForm = props => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    userLocation: '',
    experience: '',
    skills: '',
    description: '',
    github: '',
    linkedin: '',
  });
  return (
    <CoachCardContainer className='coach-card-container'>
      <div className='coach-card'>
        <Link to='/userrole'>
          <Logo />
        </Link>
        <h1>Get Started</h1>
        <InfoParagraph>
          Tell us about yourself. What can you offer as a coach?
        </InfoParagraph>
        <div>
          <Box
            className={classes.box}
            display='flex'
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <FormControl required className={classes.formControl}>
              <Autocomplete
                name='location'
                options={countries}
                getOptionLabel={option => option.name}
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    userLocation: event.target.innerText,
                  })
                }
                renderInput={params => (
                  <TextField
                    required
                    name='location'
                    {...params}
                    label='Select your location'
                    fullWidth
                  />
                )}
              />
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel>Experience</InputLabel>
              <Select
                placeholder='experience'
                name='experience'
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    experience: event.target.value,
                  })
                }
              >
                <MenuItem value={1}>
                  I've worked for 1 - 2 years as a junior developer
                </MenuItem>
                <MenuItem value={2}>
                  I've worked for 2+ years as a mid-level developer
                </MenuItem>
                <MenuItem value={3}>
                  I've worked for 4+ years and am a senior level
                  developer
                </MenuItem>
                <MenuItem value={4}>
                  I've worked for 8+ years and have held senior
                  positions as a tech lead or engineering manager
                </MenuItem>
                <MenuItem value={5}>
                  I've worked as a developer for over 10 years,
                  including at a highly senior level
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel>Skill level</InputLabel>
              <Select
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    skills: event.target.value,
                  })
                }
              >
                <MenuItem value={1}>I'm a skilled developer</MenuItem>
                <MenuItem value={2}>
                  I'm a highly skilled developer
                </MenuItem>
                <MenuItem value={3}>
                  I'm an extremely skilled developer
                </MenuItem>
                <MenuItem value={4}>
                  I'm actually Dan Abramov
                </MenuItem>
                <MenuItem value={5}>
                  I solve leetcode hards in my head while I'm waiting
                  for the bus
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.description}>
              <TextField
                fullWidth
                multiline
                label='Description'
                onChange={event =>
                  setFormValues({
                    ...formValues,
                    description: event.target.value,
                  })
                }
              ></TextField>
            </FormControl>
            <FormButton
              className='submit-button'
              theme={buttonTheme}
              onClick={() => props.chooseUserRole(props, formValues)}
            >
              Submit
            </FormButton>
          </Box>
        </div>
      </div>
    </CoachCardContainer>
  );
};
export default connect(state => state, { chooseUserRole })(CoachForm);
