import React from "react";
import { Link } from "react-router-dom";

import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name}></Avatar>
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.placeCount}{" "}
                            {props.placeCount === 1 ? "Place" : "Places"}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};


/* Hui, I notice here and in many other components throughout the project that
prop types were not added to each component. It is a good idea to add proptypes
to each component to make sure that componenents are using correct data types.
It also helps readers of your code to easily identify data types of props, thereby
improving overall readability*/

export default UserItem;
