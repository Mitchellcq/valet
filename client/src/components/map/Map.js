import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.main`
  width: 80%;
  height: 70vh;
  margin-left: 15%;
`;

const GoogleMap = ({ children, ...props }) => (
    <Wrapper>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_API,
            }}
            {...props}
        >
            {children}
        </GoogleMapReact>
    </Wrapper>
);

GoogleMap.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

GoogleMap.defaultProps = {
    children: null,
};

export default GoogleMap;