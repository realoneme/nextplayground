import React from 'react'
import UserItem from '../../../components/user-item';
import { IUserProps } from '../../../components/user-item'
import { getData } from '../../../utils/utils'


interface IUserPropsWithId extends IUserProps {
    _id: string
}
type Props = {
    users: IUserPropsWithId[]
}

const users = [
    {
        name: 'hanako',
        email: 'hanako@hana.com'
    }, {
        name: 'hanako2',
        email: 'hanako1@hana.com'
    }
]

const UserList = ({ users }: Props) => {
    return (
        users.map(user => <UserItem username={user.username} email={user.email} key={user._id}></UserItem>)
    )

}


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()
    console.log(users);


    return {
        props: { users:users.data }
    }
}

export default UserList;