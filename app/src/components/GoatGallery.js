import React from 'react';
import { connect } from 'react-redux';
import { getGoats } from '../actions';

const GoatGallery = (props) => {
  if (props.loading) {
    return <h2>dang those goats are quick...</h2>;
  }
  return (
    <div>
      <div>
        <h1>Are You Goating Me?</h1>
        <button onClick={props.getGoats}>Goat Me!</button>
      </div>
      {props.goats.map(goat => {
        return (
          <img
            key={goat}
            value={goat}
            src={goat}
            alt='goat'
          />
        )
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  goats: state.goats,
  loading: state.loading
  };
};

export default connect(mapStateToProps, { getGoats })(GoatGallery);