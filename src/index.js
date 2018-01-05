import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({ card }) {
  var {name, cardNumber, expirationDate, bankName} = card;
  return (
    <div className="credit-card">
      <div className="bank-name">{bankName}</div>
      <div className="card-number">{cardNumber}</div>
      <div className="first-four-digits">
      {cardNumber.substring(0, 4)}</div>
      <div className="expiration">
        <span className="valid-thru">Valid Thru</span>
        {expirationDate}
      </div>
      <div className="name">{name}</div>
    </div>
  );
}

CreditCard.propTypes = {
  card: PropTypes.shape({
    bankName: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    expirationDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

var cardInfo = {
  bankName: "GT Bank",
  cardNumber: "1234 4536 6753 7975",
  expirationDate: "8/18",
  name: "MICHEAL ADEYINKA"
};

ReactDOM.render(
  <CreditCard card={cardInfo}/>,
  document.getElementById('root')
);
