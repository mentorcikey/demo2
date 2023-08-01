import React, { useState, useContext, useRef, useEffect } from 'react'
import { exampleContext } from "./index.js"
import "./App.scss"
import { Button, Space } from 'antd';
import { useForm, useController } from "react-hook-form";
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";

// props -> đối tượng để giao tiếp giữa các component với nhau

//các component đấy phải theo quan hệ là cha ->  con 

function App() {

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const {useController} = useController();

    // const handleForm = (props) => {
    //     console.log('handleForm')
    //     console.log('============= props', props)

    //     console.log('============= errors', errors)

    // }

    const formik = useFormik(
        {
            initialValues: { fname: '', lname: '' },
            validationSchema: Yup.object({
                fname: Yup.string()
                    .min(2, "Mininum 2 characters")
                    .max(15, "Maximum 15 characters")
                    .required("Required!"),
                lname: Yup.string()
                    .min(2, "Mininum 2 characters")
                    .max(15, "Maximum 15 characters")
                    .required("Required!")
            }
            ),
            onSubmit: (values) => {
                console.log('============= values', values)
            }
        }
    )

    console.log('============= formik.errors', formik.errors)



    return (
        <div class="container" >
            {/* <form onSubmit={handleSubmit(handleForm)}>
                <label for="fname">First Name : </label>
                <input type="text" name="fname" id="fname" {...register("fname")} />

                <label for="lname">Last Name : </label>
                <input type="text" name="lname" id="lname" {...register("lname", { required: true })} />

                <input type="submit" />
            </form> */}
            <form onSubmit={formik.handleSubmit}>
                <label for="fname">First Name : </label>
                <input type="text" name="fname" id="fname" value={formik.values.fname} onChange={formik.handleChange} />
                {<p style={{ color: "red" }}>formik.errors.fname</p>}
                <label for="lname">Last Name : </label>
                <input type="text" name="lname" id="lname" value={formik.values.lname} onChange={formik.handleChange} />

                <input type="submit" />
            </form>
        </div >
    )
}

export default App