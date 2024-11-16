import * as yup from "yup"

const loginSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
})

const addMemberSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    othername: yup.string().required("Other name is required"),
    phone: yup.string().required("Phone is required"),
    gender: yup.string().required("Gender is required"),
    role: yup.string().required("Role is required"),
    dateOfBirth: yup.string().required("Date of birth is required"),
    ageRange: yup.string().required("Age range is required"),
})

export{
    loginSchema,
    addMemberSchema
}