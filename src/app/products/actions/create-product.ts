"use server"

import { revalidatePath, updateTag } from "next/cache"
import { post } from "../../common/util/fetch"

export default async function createProduct(
  formData: FormData,
){
  const res = await post("products", formData)
  updateTag("products")
  return res
}