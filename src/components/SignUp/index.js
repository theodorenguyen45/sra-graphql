import React from 'react'

import FormInput from 'components/FormInput'
import CustomButton from 'components/CustomButton'

import {
  auth,
  createUserProfileDocument
} from 'firebase/FirebaseUtils'

import './style.scss'

export default () => {
  const [input, setInput] = React.useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    err: '',
    isSubmitting: false
  })

  const {
    displayName,
    email,
    password,
    confirmPassword,
    err,
    isSubmitting
  } = input

  const handleSubmit = async e => {
    e.preventDefault()

    setInput({ ...input, isSubmitting: true })

    if (password !== confirmPassword) {
      setInput({
        ...input,
        err: 'Passwords dont match',
        isSubmitting: false
      })
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
      setInput({ ...input, err: message, isSubmitting: false })
    }
  }

  const handleChange = e => {
    const { name, value } = e.target

    setInput({ ...input, [name]: value })
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      {err && <p className='error'>{err}</p>}
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          disabled={isSubmitting}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          disabled={isSubmitting}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          disabled={isSubmitting}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          disabled={isSubmitting}
          label='Confirm Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit' disabled={isSubmitting}>
            SIGN UP
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
