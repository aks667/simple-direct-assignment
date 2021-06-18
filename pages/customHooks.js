import React, {useState} from 'react';
const useJobPostingForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
        }
        callback();
    }

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

const useSearchForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleInputChange = async function (event) {
        event.persist();
        await setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        callback();
    }

    return {
        handleInputChange,
        inputs
    };
}
export default {useJobPostingForm, useSearchForm};