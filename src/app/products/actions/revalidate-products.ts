'use server'

import {  updateTag } from "next/cache"

export default async function revalidateProducts(){
  updateTag("products" )
}