import React from 'react'
import { Controller, useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { 
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldLabel } from '../components/ui/field'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { toast } from "sonner"
import {Eye, EyeClosed, EyeIcon} from "lucide-react"



const formSchema = z.object({
    name: z.string().min(5, "Name should be atleast 5 characters."),
    email: z.string().email("Invalid email address"),
    password:z.string().min(8,"Password should be atleast 8."),
    confirmPassword:z.string().min(8,"Password should be atleast 8.")
}).refine((data)=> data.password===data.confirmPassword,{
    message: "Password do not match.",
    path: ["confirmPassword"]
})

const Register = () => {

   const [show, setShow] = React.useState(false);
   const [showConfirm, setShowConfirm] = React.useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
})



const onSubmit = (data)=>{
  console.log(data);
}

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-1/3 mx-auto mt-35">
           <CardHeader>
             <CardTitle>Register to WonderWise</CardTitle>
             <CardDescription>Please!! Enter your details</CardDescription>
             <CardAction>Card Action</CardAction>
           </CardHeader>
           <CardContent>
             <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                     {...field}
                     id={field.name}
                     type="text"
                     placeholder="Hari Sharma"
                     aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors=
                    {[fieldState.error]} />}
                </Field>
  )}
/>
             <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                     {...field}
                     id={field.name}
                     type="email"
                     placeholder="xyz@gmail.com"
                     aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors=
                    {[fieldState.error]} />}
                </Field>
  )}
/>
        <div className='flex items-end gap-2'>
           <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                     {...field}
                     id={field.name}
                     type={show ? "text":"password"}
                     placeholder="*******"
                     aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors=
                    {[fieldState.error]} />}
                </Field>
              )}
           />
                  <Button onClick={()=>{
                    setShow(!show)
                  }} type="button" size='icon' variant='outline'>
             {
              show ? <EyeClosed /> : <Eye />
             }
           </Button>
         </div>
         <div className='relative'>
            <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>ConfirmPassword</FieldLabel>
                    <Input
                     {...field}
                     id={field.name}
                     type={showConfirm? "text" : "password"}
                     placeholder="*******"
                     aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors=
                    {[fieldState.error]} />}
                </Field>
              )}
           />
          <div className=" absolute right-1.5 bottom-1"onClick={()=>{setShowConfirm(!showConfirm)}}>
             {
              showConfirm? <EyeClosed size={18}/>:<Eye size={18}/>
             }
          </div>
           </div>

           </CardContent>
           <CardFooter className="block">
             <Button type="submit" className="w-full">Register</Button>
             <div className='mt-2 text-center'>
              Already have an account?
              <a className="text-blue-500 underline" href="/login">Login</a>
             </div>
           </CardFooter>
        </Card>
    </form>
  )
}

export default Register