import PropTypes from 'prop-types';
import './Statistics.css';

export default function Statistics(props) {
  const { stats } = props;
  return (
    <section className="Statistics">
      <h2 className="Statistics__title">Upload stats</h2>

      <ul className="Statistics__list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="Statistics__item">
            <span>{label}</span>
            <span>{percentage}</span>
          </li>
        ))}
        {/* <li class="item">
      <span class="label">{stats.label}</span>
      <span class="percentage">{stats.percentage}</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li> */}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
