const {z} = require('zod');

const loginSchema = z.object({
     email: z
    .string({required_error: "Email is required"})
    .email({message: "Invalid email format"})
    .trim()
    .min(3, {message: "Email must be atleast 3 characters"})
    .max(255, {message: "Email must not more than 255 characters"}),

    password: z
    .string({required_error: "Password is required"})
    .min(7, {message: "Password must be at least 7 characters"})
    .max(30, {message: "Password must not more than 30 characters"}),
    
})

const signupSchema = loginSchema.extend({
    username: z
    .string({required_error: "Name is required"})
    .trim().min(3, {message: "Name must be atleast 3 characters"})
    .max(30, {message: "Name must not more than 30 characters"}),

   

    phone: z
    .string({required_error: "Phone number is required"})
    .trim()
    .min(10, {message: "Phone number must be atleast 10 digits"})
    .max(15, {message: "Phone number must not more than 15 digits"}),

    
});

module.exports = {signupSchema, loginSchema};