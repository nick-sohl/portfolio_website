import React from 'react';

const User = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.image} alt={user.img_alt} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.firstname}</div>
                    <div className="text-sm opacity-50">{user.country}</div>
                  </div>
                </div>
              </td>
              {/* <td>
                {user.email}
                <br />
                <p>Phone: <span>{user.phone}</span></p>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
