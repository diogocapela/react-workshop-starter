import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from '../components/Navbar';

function MainLayout(props) {
  return (
    <div className="MainLayout">
      <Navbar />
      <main>{props.children}</main>
      <footer>This is my footer.</footer>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
