import React, { useState } from "react";
import { Wrapper, Details, Name, Role, Updates, Header,Button} from "./page.style";
import UpdatesField from './Components/Update/updatesField';
import { logoutUser } from "../actions/userAction";


const Page = () => {
    const type = "admin";
    const [details, setDetails] = useState({
        Name : localStorage.getItem("uname")
        ? JSON.parse(localStorage.getItem("uname"))
        : {},
        Role: localStorage.getItem("role")
        ? JSON.parse(localStorage.getItem("role"))
        : {}
    });
    //console.log(localStorage.getItem("role"));
    if(localStorage.getItem("role")!=='"admin"'){logoutUser()};
    const text = type ? "administration portal" : "not admin";
    return (
        <>
        <Wrapper>
            <Header userType={type}>{text}</Header>
            <Details>
                <tbody>
                    <tr>
                    <Name>Name: {details.Name}</Name>
                    <Role>Role: {details.Role}</Role>
                    <td><Button onClick={logoutUser}>Logout</Button></td>
                    </tr>
                </tbody>
            </Details>
            
            <Updates>
                {/* userType is dummy for conditional rendering */}
                <UpdatesField userType={type}/>
            </Updates>
        </Wrapper>
        </>
    )
}

export default Page;
