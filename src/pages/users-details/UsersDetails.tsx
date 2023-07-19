import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { User } from "../../model/user";
import { Card } from "../../shared/Card";

export function UsersDetails() {
    const [user, setUser] = useState<User>()
    const params = useParams<{ userId: string }>();

    useEffect(() => {
        console.log('init user effect', params.userId)
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        .then(res => {
            setUser(res.data)
        })
    }, [params.userId]);
    
    return <div>
        {
            user ?
            <UsersDetailsPage data={user} /> :
            <div>loading...</div>
        }
    </div>
}

interface UsersDetailsPageProps {
    data: User;
}

export function UsersDetailsPage(props: UsersDetailsPageProps) {
    useEffect(() => {
        console.log('child user effects', props.data.id)
    }, [props.data.id])

    return (
        <>
        <h1>{props.data.name}</h1>
        <Card title={props.data.name}>
            {props.data.phone}
            </Card>

            <NavLink to="/user/3">Next 3</NavLink>
            <NavLink to="/user/4">Next 4</NavLink>
        </>
    )
}
