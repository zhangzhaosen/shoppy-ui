"use server"

import { cookies, headers } from "next/headers"
import { API_URL } from "./constants/api"
import { get } from "./util/fetch"

export default async function getMe() {

  return  get('/users/me')
}