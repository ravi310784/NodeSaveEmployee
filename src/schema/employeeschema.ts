import {object, z,TypeOf} from 'zod'


export const UserSchema=object({
    
    address: z.string({
        required_error: "address is required",
        invalid_type_error: "Name must be a string"
    }),
    age:z.string({
        required_error: "age is required",
        invalid_type_error: "age must be a string"
    }),    
    department:z.string({
        required_error: "department is required",
        invalid_type_error: "department must be a string"
    }),
    name:z.string({
        required_error: "name is required",
        invalid_type_error: "name must be a string"
    }),
    salary:z.string({
        required_error: "salary is required",
        invalid_type_error: "salary must be a string"
    }),
});

export type UserInput= TypeOf<typeof UserSchema>;