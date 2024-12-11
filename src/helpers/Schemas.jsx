import * as yup from "yup"

const loginSchema = yup.object({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
})

const MemberLoginSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    phone: yup.string().required("Phone is required"),
})

const addMemberSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    othername: yup.string(),
    phone: yup.string().required("Phone is required"),
    gender: yup.string().required("Gender is required"),
    role: yup.string().required("Role is required"),
    dateOfBirth: yup.string().required("Date of birth is required"),
    ageRange: yup.string().required("Age range is required"),
    image: yup.mixed(),
    status:yup.string().required("Status is required")
})

const EditMemberSchema = yup.object({
    firstname: yup.string(),
    lastname: yup.string(),
    othername: yup.string(),
    phone: yup.string(),
    gender: yup.string(),
    role: yup.string(),
    dateOfBirth: yup.string(),
    ageRange: yup.string(),
    image: yup.mixed(),
    status:yup.string()
})

const addEventSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    venue: yup.string().required("Venue is required"),
    speaker: yup.string().required("Speaker is required"),
    category: yup.string().required("Category is required"),
    status: yup.string().required("Status is required"),
    date: yup.string().required("Date is required"),
    time: yup.string().required("Time is required"),
})

const editEventSchema = yup.object({
    title: yup.string(),
    description: yup.string(),
    venue: yup.string(),
    speaker: yup.string(),
    category: yup.string(),
    status: yup.string(),
    date: yup.string(),
    time: yup.string(),
})

export{
    loginSchema,
    addMemberSchema,
    addEventSchema,
    EditMemberSchema,
    editEventSchema,
    MemberLoginSchema
}