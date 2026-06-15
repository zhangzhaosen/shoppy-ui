'use server';
import { jwtDecode } from "jwt-decode"
import { FormError } from "@/app/common/interfaces/form-error.interface"
import { API_URL } from "@/app/common/constants/api"

import { getErrorMessage } from "@/app/common/util/errors"
import { post } from "@/app/common/util/fetch"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AUTHENTICATION_COOKIE } from "../auth-cookie";

export async function login(
  _prevState: FormError,
  formData: FormData
) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  })

  const parsedRes = await res.json()

  if (!res.ok) {
    console.log('parsedRes', parsedRes)
    return { error: getErrorMessage(parsedRes) }
  }

  const setCookieHeader = res.headers.get('Set-Cookie')
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    console.log('setAuthCookie', token);
    (await cookies()).set({
      name: AUTHENTICATION_COOKIE,
      value: token,
      httpOnly: true,
      secure: true,
      expires: new Date(jwtDecode(token as string).exp! * 1000),
    })
  }

  redirect("/")
}

