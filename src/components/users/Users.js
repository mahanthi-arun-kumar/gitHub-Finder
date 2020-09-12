import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  //   state = {
  //     users: [
  //       {
  //         id: "1",
  //         login: "mojombo",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //       },
  //       {
  //         id: "2",
  //         login: "mojombo2",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //       },
  //       {
  //         id: "3",
  //         login: "mojombo3",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //       },
  //     ],
  //   };
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
Users.Proptypes = {
  users: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
