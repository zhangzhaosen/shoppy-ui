'use server'

import { FormError } from "@/app/common/form-error.interface"
import { API_URL } from "@/app/constants/api"
import { getErrorMessage } from "@/app/util/errors"
import { post } from "@/app/util/fetch"
import { redirect } from "next/navigation"

export default async function createUser(
  _prevState:FormError, 
  formData: FormData
){
  const res = await post("users", formData)
  if(res.error){
    return {error: res.error}
  }
  redirect("/")
}