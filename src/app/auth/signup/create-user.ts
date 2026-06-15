'use server'

import { FormError } from "@/app/common/interfaces/form-error.interface"
import { API_URL } from "@/app/common/constants/api"
import { getErrorMessage } from "@/app/common/util/errors"
import { post } from "@/app/common/util/fetch"
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