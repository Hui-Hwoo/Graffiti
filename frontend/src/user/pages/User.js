import React, { useEffect, useState } from "react";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/hook-http";
import UserList from "../components/UserList";

/* Hui, I think you did a great job with your folder structure and how components
are organized into well-named folders. For example, a component like "ErrorModal"
that pertains to the UI of your web app intuitively goes into a subfolder in
the components folder named "UIElements", which makes it easy to find component files
within the project folder. Great job!*/


const Users = () => {
    const [loadedUser, setLoadedUser] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    process.env.REACT_APP_BACKEND_URL + "/users"
                );
                setLoadedUser(responseData.users);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchUsers();
    }, [sendRequest]);

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className="center">
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && loadedUser && <UserList items={loadedUser} />}
        </React.Fragment>
    );
};


// Prop types here*

export default Users;
