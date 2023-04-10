import React, { FC } from 'react';

type DisplayBoardProps = {
  numberOfUsers: number;
  getAllUsers: () => void;
};

const DisplayBoard: FC<DisplayBoardProps> = ({ numberOfUsers, getAllUsers }) => {

  const headerStyle = {
    width: '100%',
    padding: '2%',
    backgroundColor: "red",
    color: 'white',
    textAlign: 'center'
  };
  
  return(
    <div style={{backgroundColor:'green'}} className="display-board">
      <h4 style={{color: 'white'}}>Users Created</h4>
      <div className="number" data-testid="numberOfUsers">
        {numberOfUsers}
      </div>
      <div className="btn">
        <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Get all Users</button>
      </div>
    </div>
  );
};

export default DisplayBoard;
