// LoginPage.js
import React from "react"
import { Login, LoginForm } from "react-admin"

const CustomLoginForm = props => (
  <>
    <LoginForm {...props} />
  </>
)

const CustomLoginPage = props => (
  <Login
    backgroundImage="https://source.unsplash.com/random/1600x900/daily"
    loginForm={<CustomLoginForm />}
    {...props}
  />
)

export default CustomLoginPage
