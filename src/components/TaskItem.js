import React, { useState } from 'react';

const TaskItem = () => {
  const [name, setName] = useState('');
  const [points, setPoints] = useState(0);

  return (
    <tr>
      <td><input type="text" value={name} onChange={(e) => setName(e.target.value)}></input></td>
      <td><input type="text" value={points} onChange={(e) => setPoints(parseInt(e.target.value))}></input></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default TaskItem;