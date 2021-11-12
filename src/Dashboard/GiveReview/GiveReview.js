import React from "react";
import DashNav from "./../DashNav/DashNav";
import useAuth from './../../Hooks/useAuth';

const GiveReview = () => {

  const {user} = useAuth();
  return (
    <>
      <div>
        <DashNav></DashNav>
      </div>
      <br /> <br /> <br /> <br />
      <div>
        <center>
          <input value={user.displayName} type="text" placeholder="name" />
          <input value={user.email} type="email" placeholder="email" />
          <input />
        </center>
      </div>
    </>
  );
};

export default GiveReview;
