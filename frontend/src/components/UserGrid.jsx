import { Grid } from "@chakra-ui/react";
import { USERS } from "../dummy/dummy";
import UserCard from "./UserCard";
import { useEffect } from "react";

const UserGrid = ({users}) => {
    const [isLoading, setIsLoading] = userState(true);
    useEffect(()=> {
        const getUsers = async () =>{
            try{
                const res = await fetch("http://localhost:5000/api/friends")
                const data = await res.json();
            } catch(error){

            }
        }
    }, []);

    return (
        <Grid templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
        }}
        gap={4}
        >
            {USERS.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </Grid>
    );
};
export default UserGrid;