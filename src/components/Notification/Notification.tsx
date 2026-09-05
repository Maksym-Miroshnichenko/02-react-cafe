import css from './Notification.module.css';

function Notisication() {
  return (
    <div className={css.notification}>
      <p className={css.message}>No feedback given</p>
    </div>
  );
}

export default Notisication;