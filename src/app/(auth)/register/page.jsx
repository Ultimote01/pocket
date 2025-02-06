import Link  from'next/link'


import { AuthLayout } from '@/components/AuthLayout'
import "@/styles/register.css"
import { SelectField, TextField } from '@/components/Fields'
import { Button } from '@/components/Button'

export const metadata = {
    title:'Sign Up'
}


export default function Register(){
    return(
        <AuthLayout
        title="Sign up for an account"
        subtitle={<>
            Already registered?{' '}
            <Link href='/login' className='registerlink'>
            Sign in
            </Link>{' '}
            to your account
        </>
        }
        >
            <form>
                <div className='registerform'>
                    <TextField
                    label="First name"
                    name="first_name"
                    type='text'
                    autoComplete='given-name'
                    required
                    />
                    <TextField
                    label='Last name'
                    name='last_name'
                    type='text'
                    autoComplete='family-name'
                    required
                    />

                     <TextField
                        className="registertextfield"
                        label="Email address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        />
                    <TextField
                        className="registertextfield1"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                    <SelectField
                        className='registerselectfield'
                        label='How did you hear about us'
                        name='referral_source'
                    >
                        <option>AltaVista search</option>
                        <option>Super Bowl commercial</option>
                         <option>Our route 34 city bus ad</option>
                         <option>The “Never Use This” podcast</option>
                    </SelectField>
                </div>
                <Button type='submit' color='cyan' className='registerbutton'>
                    Get started today
                </Button>
            </form>

        </AuthLayout>
    )
}