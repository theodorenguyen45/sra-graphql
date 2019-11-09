import React from 'react'

import FormInput from 'components/FormInput'
import CustomButton from 'components/CustomButton'

import { auth, createUserProfileDocument } from 'firebase/FirebaseUtils'

import './style.scss'

export default () => {
  const [userDetails, setUserDetails] = React.useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = React.useState('')
  const [submitting, setSubbmitting] = React.useState(false)
  const { displayName, email, password, confirmPassword } = userDetails

  const handleSubmit = React.useCallback(
    async e => {
      e.preventDefault()

      setSubbmitting(true)

      if (password !== confirmPassword) {
        setError('Passwords dont match')
        setSubbmitting(false)
        return
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        )

        await createUserProfileDocument(user, {
          displayName
        })
      } catch ({ message }) {
        setError(message)
        setSubbmitting(false)
      }
    },
    [confirmPassword, displayName, email, password]
  )

  const handleChange = React.useCallback(
    e => {
      const { name, value } = e.target

      setUserDetails({ ...userDetails, [name]: value })
    },
    [userDetails]
  )

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      {error && <p className='error'>{error}</p>}
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          disabled={submitting}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          disabled={submitting}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          disabled={submitting}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          disabled={submitting}
          label='Confirm Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit' disabled={submitting}>
            SIGN UP
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
