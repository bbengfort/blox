import React from 'react';
import TaskItem from './components/TaskItem';

const App = () => {

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th style={{width: "30%"}}></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TaskItem />
        </tbody>
      </table>
    </div>
  )
}

export default App;
