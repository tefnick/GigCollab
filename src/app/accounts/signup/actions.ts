"use server"

import { FormState, SignupFormSchema } from "@/lib/definitions"
import { log } from "console";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";


export async function signup(prevState: FormState, formData: FormData) {

    // 1. validate fields
    const validationResult = SignupFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    // if validation fails, return errors early
    if (!validationResult.success) {
      return {
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const { name, email, password} = validationResult.data;
    
    // 2. create user
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await prisma.user.create({
    //   data: {
    //     name: name,
    //     email: email,
    //     password: hashedPassword,  
    //   }
    // });

    // revalidatePath()?

    // 3. create session



}