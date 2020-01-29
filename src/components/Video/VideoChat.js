import React, { useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Lobby from './Lobby';
import Room from './Room';

const StyledVideoChat = styled.div`
  .videos {
    width: 500px;
    height: 380px;
    margin: 0px auto;
    border: 2px solid #645cff;
    position: relative;
    box-shadow: 1px 1px 11px #9e9e9e;

    .my-video {
      width: 130px;
      position: absolute;
      left: 10px;
      bottom: 10px;
      border: 6px solid #2196f3;

      border-radius: 6px;
      z-index: 2;
    }

    .user-video {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;

      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
`;

const VideoChat = ({ user, peerId }) => {
  const username = user.email;
  const roomName =
    user.role_id === 1
      ? `${user.email}-${peerId}`
      : `${peerId}-${user.email}`;

  const [token, setToken] = useState(null);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}video/token`, {
          identity: username,
          room: roomName,
        })
        .then(res => setToken(res.data.token));
    },
    [roomName, username],
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <StyledVideoChat>
        <Room
          roomName={roomName}
          token={token}
          handleLogout={handleLogout}
        />
      </StyledVideoChat>
    );
  } else {
    render = (
      <StyledVideoChat>
        <Lobby handleSubmit={handleSubmit} />
      </StyledVideoChat>
    );
  }
  return render;
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    peerId: state.interviewReducer.peerId,
  };
};

export default connect(mapStateToProps)(VideoChat);
