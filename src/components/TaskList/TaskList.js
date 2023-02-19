import { Task } from 'components/Task/Task';
import { useSelector } from 'react-redux';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constans';
import { getFilters, getTasks } from 'redux/selectirs';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const filter = useSelector(getFilters);
  const tasks = useSelector(getTasks);
  const visibalTasks = getVisibleTasks(tasks, filter);
  return (
    <ul className={css.list}>
      {visibalTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
