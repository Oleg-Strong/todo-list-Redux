import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/action';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteTask(task.id));
  const toggleCheked = () => dispatch(toggleCompleted(task.id));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={toggleCheked}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={onDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
