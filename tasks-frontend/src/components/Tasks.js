import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, updateTasks } from '../actions/actions';
import '../css/Tasks.css';

function Tasks() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // console.log(user.token);
  let tasks = useSelector((state) => state.tasks);
  // console.log(tasks);

  useEffect(() => {
    dispatch(getTasks(user.token));
  }, [dispatch, tasks]);

  const handleEditBtn = (e, i) => {
    e.preventDefault();
    const task = document.getElementById(`task__${i}`);
    if (task.disabled) task.disabled = false;
    else task.disabled = true;
  };
  const handleDeleteBtn = (e, i) => {
    e.preventDefault();
    const taskBox = document.getElementById(`taskBox__${i}`);
    taskBox.style.display = 'none';
    document.getElementById(`task__${i}`).classList.add('notActive');
  };
  const handleSaveBtn = (e) => {
    e.preventDefault();
    const taskers = document.querySelectorAll('.taskToBeDone');
    let updatedTasks = [];
    taskers.forEach((task) => {
      if (!task.classList.contains('notActive'))
        return updatedTasks.push(task.value);
    });
    dispatch(updateTasks(user.token, updatedTasks));
  };
  const handleAddBtn = (e) => {
    e.preventDefault();
    const taskName = prompt('Task name to be added: ');
    if (taskName) {
      const taskers = document.querySelectorAll('.taskToBeDone');
      let updatedTasks = [taskName];
      taskers.forEach((task) => {
        if (!task.classList.contains('notActive'))
          return updatedTasks.push(task.value);
      });
      dispatch(updateTasks(user.token, updatedTasks));
    }
  };
  return (
    <div className='tasksComp'>
      <div className='tasksComp__container'>
        <button className='addTaskBtn' onClick={(e) => handleAddBtn(e)}>
          Add Task
        </button>
        <div className='taskContainer'>
          {tasks.map((task, i) => {
            return (
              <div
                className='taskContainer__box'
                key={`${task}`}
                id={`taskBox__${i}`}
              >
                <input
                  type='text'
                  defaultValue={task}
                  className='taskToBeDone'
                  id={`task__${i}`}
                  disabled={true}
                />
                <button onClick={(e) => handleEditBtn(e, i)}>
                  <i class='far fa-edit'></i>
                </button>
                <button onClick={(e) => handleDeleteBtn(e, i)}>
                  <i class='far fa-trash-alt'></i>
                </button>
              </div>
            );
          })}
        </div>
        <button className='addTaskBtn' onClick={(e) => handleSaveBtn(e)}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Tasks;
