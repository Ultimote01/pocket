import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import "@/styles/signIn.css"

export const metadata = {
  title: 'Sign In',
}

export default function Login() {
  return (
    <AuthLayout
      title="Sign in to account"
      subtitle={
        <>
          Don’t have an account?{' '}
          <Link href="/register" className="signInlink">
            Sign up
          </Link>{' '}
          for a free trial.
        </>
      }
    >
      <form>
        <div className="signIndiv">
          <TextField
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <Button type="submit" color="cyan" className="signInbutton">
          Sign in to account
        </Button>
      </form>
    </AuthLayout>
  )
}
