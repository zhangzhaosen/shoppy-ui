"use server"

import { post } from "../../common/util/fetch"

export default async function createProduct(
  formData: FormData,
){
  const res = await post("products", formData)
  return res
}