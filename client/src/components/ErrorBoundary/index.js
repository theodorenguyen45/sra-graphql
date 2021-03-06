import React from 'react'

class ErrorBoundary extends React.Component {
  constructor() {
    super()

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    //process the error

    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    if (this.state.hasError) return <div>something went wrong</div>

    return this.props.children
  }
}

export default ErrorBoundary
