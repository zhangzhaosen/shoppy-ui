'use client'

import MuiNextLink from "@/components/MuiNextLink";
import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from 'next/link'
import login from "./login";
import { useActionState } from "react";
export default function Login() {

  const [state, formAction] = useActionState(login, { error: "" })
  return (
    <form action = {formAction} className="w-full max-w-xs">
      <Stack spacing={2} >
        <TextField name="email" helperText={state.error} error={!!state.error} label="Email" variant="outlined" type="email" />
        <TextField name="password" label="Password" variant="outlined" type="password" />
        <Button type="submit" variant="contained" >Login</Button>
        <MuiNextLink href="/auth/signup" className="self-center">Signup</MuiNextLink>
      </Stack>
    </form>
  )
}