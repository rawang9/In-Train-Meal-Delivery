import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../../../actions/orderAction";
import {getPizzaById} from "../../../actions/pizzaAction";
//styles
import { Wrapper, Field, Input, Button, Heading, Text } from "./updateField.style";
const UpdatesField = ({ userType }) => {
    const [trainNoOrderRec, setTrainNoOrderRec] = useState('');
    const [trainNoMealRec, setTrainNoMealRec] = useState('');
    const handleTrainNoOrderChange = (event) => {
        setTrainNoOrderRec(event.target.value);
    }

    const handleTrainNoMealChange = (event) => {
        setTrainNoMealRec(event.target.value)
    }
    const dispatch = useDispatch();
    const chektrainorder = () => {
        if(trainNoOrderRec.length < 5){
            alert("TRAIN didnt exist");
        }else{
            localStorage.setItem("train_nu",trainNoOrderRec);
            //console.log(trainNoOrderRec);
            dispatch(getAllOrders(trainNoOrderRec));
            window.location.href = "/delivery";
        }
    };
    const chektrainmeal = () => {
        if(trainNoMealRec.length < 5){
            alert("TRAIN didnt exist");
        }else{
            localStorage.setItem("train_nu",trainNoMealRec);
            //console.log(trainNoMealRec);
            dispatch(getPizzaById(trainNoMealRec));
            window.location.href = "/admin/pizzalist";
        }
    };


    if(userType !== "admin") {
        return (
            <>
            <Wrapper>
            <Field>
                <Heading>Update Order Record</Heading>
                <Text>Enter Train No.</Text>
                <Input value={trainNoOrderRec} onChange={handleTrainNoOrderChange}></Input>
                <Button onClick={chektrainorder}>Submit</Button>
            </Field>

            <Field>
                <Heading>Update Meal Record</Heading>
                <Text>Enter Train No.</Text>
                <Input value={trainNoMealRec} onChange={handleTrainNoMealChange}></Input>
                <Button onClick={chektrainmeal}>Submit</Button>
            </Field>

            <Field>
                <Heading>Update Administration</Heading>
                <Text><a href="#">Click Here </a>to manage Administration Record</Text>
            </Field>
            </Wrapper>
            </>
        )
    }
    else if(userType === "admin") {
        return (
            <>
            <Wrapper>
            <Field>
                <Heading>Update Order Record</Heading>
                <Text>Enter Train No.</Text>
                <Input value={trainNoOrderRec} onChange={handleTrainNoOrderChange}></Input>
                <Button onClick={chektrainorder}>Submit</Button>
            </Field>

            <Field>
                <Heading>Update Meal Record</Heading>
                <Text>Enter Train No.</Text>
                <Input value={trainNoMealRec} onChange={handleTrainNoMealChange}></Input>
                <Button onClick={chektrainmeal}>Submit</Button>
            </Field>
            </Wrapper>
            </>
        )
    }
}

export default UpdatesField;