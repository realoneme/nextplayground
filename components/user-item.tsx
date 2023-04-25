import React from "react"

export interface IUserProps {
    username: string;
    email: string;
    key: string;
}
const UserItem: React.FC<IUserProps> = ({ username, email }) => {
    return (
        <>
            <p>name:{username}</p>
            <p>email:{email}</p>
        </>
    )
}

export default UserItem;