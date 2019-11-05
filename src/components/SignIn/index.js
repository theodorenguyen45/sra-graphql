import React from 'react'

import { auth, signInWithGoogle } from 'firebase/FirebaseUtils'

import FormInput from 'components/FormInput'
import CustomButton from 'components/CustomButton'

import './style.scss'

export default () => {
  const [input, setInput] = React.useState({
    email: '',
    password: '',
    error: '',
    isSubmitting: false
  })
  const { email, password, error, isSubmitting } = input

  const handleSubmit = async e => {
    e.preventDefault()

    setInput({ ...input, isSubmitting: true })

    try {
      const res = await auth.signInWithEmailAndPassword(
        email,
        password
      )

      if (res) {
        setInput({
          email: '',
          password: '',
          isSubmitting: false
        })
      }
    } catch (err) {
      setInput({
        ...input,
        error: 'Wrong username or password',
        isSubmitting: false
      })
    }
  }

  const handleChange = e => {
    const { value, name } = e.target

    setInput({ ...input, [name]: value })
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
          disabled={isSubmitting}
          value={email}
          required
        />
        <FormInput
          name='password'
          type='password'
          label='password'
          onChange={handleChange}
          disabled={isSubmitting}
          value={password}
          required
        />
        <div className='buttons'>
          <CustomButton type='Submit'>Sign In</CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            disabled={isSubmitting}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
