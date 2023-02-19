import { Button } from 'components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/action';
import { statusFilters } from 'redux/constans';
import { getFilters } from 'redux/selectirs';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilters);
  const filterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => filterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => filterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => filterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
