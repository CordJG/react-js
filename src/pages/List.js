import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}
const UserList = () => {
    const users = [
        {email: 'user1@gmail.com', name: '이재관'},
        {email: 'user2@gmail.com', name: '이재관2'},
        {email: 'user3@gmail.com', name: '이재관3'},
        {email: 'user4@gmail.com', name: '이재관4'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData = {user} />)}
            </tbody>
        </table>
    )
}

export default UserList;