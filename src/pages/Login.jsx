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
    email: z.string().email("Invalid email address"),
    password:z.string().min(8,"Password should be atleast 8."),

})

const Login = () => {

   const [show, setShow] = React.useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            
        },
})



const onSubmit = (data)=>{
  console.log(data);
}

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-1/4 mx-auto mt-35">
           <CardHeader>
             <CardTitle>Login to WonderWise</CardTitle>
             <CardDescription>Please!! Enter your details</CardDescription>
             <CardAction>Card Action</CardAction>
           </CardHeader>
           <CardContent>
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
                  <div className="absolute right-1 bottom-1.5" onClick={()=>{setShow(!show)}}>
             {
              show ? <EyeClosed /> : <Eye />
             }
           </div>
         </div>
         

           </CardContent>
           <CardFooter className="block">
             <Button type="submit" className="w-full">Login</Button>
             <div className='mt-2 text-center'>
              Don't have an account?
              <a className="text-blue-500 underline" href="/register">Register</a>
             </div>
           </CardFooter>
        </Card>
    </form>
  )
}

export default Login
