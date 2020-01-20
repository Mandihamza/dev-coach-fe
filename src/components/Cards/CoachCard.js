import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CoachModal from '../Modals/CoachModal';
import Rating from '../DataVisualization/Rating';

const StyledCoachCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 17rem;
  height: 24rem;
  padding: 2.4rem;
  border-radius: 0.8rem;
  margin: 0.5rem;
  color: #595959;
  font-weight: 300;
  text-align: left;
  background: white;
  box-shadow: 0 6px 10px #d3d3d3;

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: #3c4043;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .header-text {
      width: 100%;
    }

    .header-photo {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .picture {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .bullet-points {
  }

  .description {
  }

  .reviews {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  .footer {
    display: flex;
    width: 100%;
    justify-content: flex-end;

    a {
      text-decoration: none;
    }

    .button {
      background-color: #4fad65;
    }
  }
`;

const CoachCard = props => {
  const {
    coach,
    saveCoach,
    getFeedback,
    feedback,
    saveForChat,
  } = props;

  return (
    <StyledCoachCard>
      <div className='header'>
        <div className='header-text'>
          <h3>{`${coach.first_name} ${coach.last_name}`}</h3>
          <p>${coach.hourly_rate} per hour</p>
        </div>
        <div className='header-photo'>
          <Avatar
            className='picture'
            alt='Coach'
            src={coach.avatar_url}
          />
        </div>
      </div>

      <div className='bullet-points'>
        <p>
          <i className='fas fa-map-marker-alt' />
          {coach.location}
        </p>
        <p>
          <i className='fas fa-street-view' />{' '}
          {coach.experience_level === 3
            ? 'Expert in interviewing'
            : coach.experience_level === 2
            ? 'Advanced in interviewing'
            : 'Beginner in interviewing'}
        </p>
      </div>
      <div className='description'>
        <p>{`${coach.description &&
          coach.description.slice(0, 50)}...`}</p>{' '}
      </div>

      <div className='reviews'>
        <Rating rating={coach.rating} size='small' />
        <CoachModal
          coach={coach}
          getFeedback={getFeedback}
          feedback={feedback}
        />
      </div>

      <div className='footer'>
        <Link to='/chat' onClick={saveForChat}>
          <Button
            className='button'
            variant='contained'
            color='primary'
          >
            Chat
          </Button>
        </Link>
        <Link to='/appointment' onClick={saveCoach}>
          <Button
            className='button'
            variant='contained'
            color='primary'
          >
            Request
          </Button>
        </Link>
      </div>
    </StyledCoachCard>
  );
};

export default CoachCard;
