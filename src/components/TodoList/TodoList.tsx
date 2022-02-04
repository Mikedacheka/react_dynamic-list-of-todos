import React from 'react';
import './TodoList.scss';
import classNames from 'classnames';

type Props = {
  handleSelectByStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  todoStatus: string,
  queryHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
  query: string,
  getSelectedUser: (selectedUserId: number) => void,
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({
  handleSelectByStatus,
  todoStatus,
  query,
  todos,
  getSelectedUser,
  queryHandler,
}) => (
  <div className="TodoList">
    <label htmlFor="selectTodosByStatus">
      Выберите ваш любимый вкус:
      <select
        value={todoStatus}
        onChange={handleSelectByStatus}
      >
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="unfinished">Unfinished</option>
      </select>
    </label>
    <input
      type="text"
      placeholder="search"
      value={query}
      onChange={queryHandler}
    />
    <h2>Todos:</h2>
    <div className="TodoList__list-container">
      <ul className="TodoList__list">

        {todos.map((todo) => (
          <li
            key={todo.id}
            className={classNames(
              'TodoList__item',
              { 'TodoList__item--checked': todo.completed },
              { 'TodoList__item--unchecked': !todo.completed },
            )}
          >
            <label htmlFor="todo">
              <input
                type="checkbox"
                readOnly
                checked={todo.completed}
              />
              <p>{todo.title}</p>
            </label>
            <button
              className="
                TodoList__user-button
                TodoList__user-button--selected
                button
              "
              type="button"
              onClick={() => {
                getSelectedUser(todo.userId);
              }}
            >
              User&nbsp;
              {todo.userId}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
