import React, { useState } from 'react';
import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [formError, setFormError] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length < 1) {
            setFormError({
                title: 'Invalid Input!',
                message: 'The username cannot be empty'
            })
        } else if (+enteredAge < 1) {
            setFormError({
                title: 'Invalid Input!',
                message: 'The age cannot be empty'
            })
        } else {
            props.onAddUser({
                username: enteredUsername.trim(),
                age: enteredAge.trim()
            })
            setEnteredUsername('')
            setEnteredAge('')
        }
    }

    const nameInputChangeHandler = (event) => {
        // setFormError()
        setEnteredUsername(event.target.value)
    }

    const ageInputChangeHandler = (event) => {
        // setFormError()
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setFormError(null);
    }

    return (
        <div>
            {formError && <ErrorModal onConfirm={errorHandler} title={formError.title} message={formError.message} />}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input id='username' type='text' value={enteredUsername} onChange={nameInputChangeHandler} />
                    </div>

                    <div>
                        <label htmlFor='age'>Age</label>
                        <input id='age' type='number' value={enteredAge} min={1} onChange={ageInputChangeHandler} />
                    </div>

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddUser;
