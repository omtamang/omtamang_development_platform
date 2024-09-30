import { Formik, Form, Field } from "formik";
import { useState } from "react";

import axios from 'axios';


export default function Newmember() {
    const [username, setUsername] = useState('')
    const [photo, setPhoto] = useState('')

    const [role, setRoles] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')

    function onSubmit(value) {
        console.log(value)

        const user = {
            username: value.username,
            email: value.email,
            photo: value.photo,
            department: value.department,
            role: value.role,
        }

        axios.post("https://assessment-api-biay.onrender.com/users", user)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }



    return (
        <div> 
            <Formik initialValues={{username, photo, email, department, role}}
                enableReinitialize={true}
                onSubmit={onSubmit}
            >
                 {
                    (props) => (
                        <Form className="max-w-[800px] m-auto mt-11">
                            <fieldset className="space-x-11 border text-center">
                                <label>Name</label>
                                <Field type="text" name="username" placeholder="Name"/>
                            </fieldset>

                            <fieldset className="space-x-11 border text-center">
                                <label>Photo</label>
                                <Field type="text" name="photo" placeholder="Enter photo link"/>
                            </fieldset>

                            <fieldset className="space-x-11 border text-center">
                                <label>Email</label>
                                <Field type="text" name="email" placeholder="Enter Email"/>
                            </fieldset>

                            <fieldset className="space-x-11 border text-center">
                                <label>Department</label>
                                <Field type="text" name="department" placeholder="Enter Department" required/>
                            </fieldset>

                            <fieldset className="space-x-11 border text-center">
                                <label>Roles</label>
                                <Field type="text" name="role" placeholder="Enter Roles" required/>
                            </fieldset>

                            <button className="bg-green-500 w-full mt-11 text-white text-center items-center" type="submit">Add</button>
                        </Form>
                    )
                 }
            </Formik>
        </div>
    )
}