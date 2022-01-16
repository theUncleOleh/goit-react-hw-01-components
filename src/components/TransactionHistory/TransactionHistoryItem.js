import PropTypes from 'prop-types';

export default function TransactionHistoryItem({ id, type, amount, currency }) {
  return (
    <tr className="Transaction__row">
      <td className="Transaction__data">{type}</td>
      <td className="Transaction__data">{amount}</td>
      <td className="Transaction__data">{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
