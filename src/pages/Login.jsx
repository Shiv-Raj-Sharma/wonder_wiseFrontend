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
import api from '../api/axios'
import useAuth from '../hooks/useAuth'



const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password:z.string().min(8,"Password should be atleast 8."),

})

const Login = () => {

  const {login} = useAuth();

   const [show, setShow] = React.useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            
        },
})



const onSubmit = async (formData)=>{
  console.log(formData);
  const userData = data;
  try {
    const response = await api.post("/auth/login", formData);  // frontend data ko email ra password backend ma gayo ra api.post("/auth/login") end point bata resonse status ra token aayo ani response ma store garo 


    if( response.status === 200 ){   // response.status ma backend la pathako status code hunxa ani yo 200 hamro known status code ho jun hamro backend ko response ma xa
      toast.success("Logged in sucessfully"); //notification

      const token = response.data.token;  // backend ko data or token
      login(formData, token);
      navigate("/dashboard");
    }else{
      toast.error(response.message || "Login Failed"); //backend ko error
    }
  } catch (error) {
    toast.error(error.message || "Login Failed"); //frontend ko error like import vako xaena, api call garna xuto
    console.log(error);  // developer ra tester ko lagi matra ho deploy garne baila remove garna
  }

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
