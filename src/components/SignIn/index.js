import React from 'react'

import { auth, signInWithGoogle } from 'firebase/FirebaseUtils'

import FormInput from 'components/FormInput'
import CustomButton from 'components/CustomButton'

import './style.scss'

export default () => {
  const [userDetails, setUserDetails] = React.useState({
    email: '',
    password: ''
  })
  const [error, setError] = React.useState('')
  const [submitting, setSubmitting] = React.useState(false)
  const { email, password } = userDetails

  const handleSubmit = async e => {
    e.preventDefault()

    setSubmitting(true)

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      setError('Wrong username or password')
      setSubmitting(false)
    }
  }

  const handleChange = e => {
    const { value, name } = e.target

    setUserDetails({ ...userDetails, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2>Already has an account?</h2>
      <span>Sign in with your email and password</span>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          label='email'
          onChange={handleChange}
          disabled={submitting}
          value={email}
          required
        />
        <FormInput
          name='password'
          type='password'
          label='password'
          onChange={handleChange}
          disabled={submitting}
          value={password}
          required
        />
        <div className='buttons'>
          <CustomButton type='Submit'>Sign In</CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            disabled={submitting}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
