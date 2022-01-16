import PropTypes from 'prop-types';
import './Transaction.css';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  return (
    <table className="Transaction">
      <thead className="Transaction-head">
        <tr className="Transaction-head__row">
          <th className="Transaction-head__header">Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="Transaction__body">
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
