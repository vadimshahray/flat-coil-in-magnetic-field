import { ErrorFallback } from './ErrorFallback'
import React, { ErrorInfo, PropsWithChildren } from 'react'

export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  { hasError: boolean; error?: Error; errorInfo?: ErrorInfo }
> {
  constructor(props: PropsWithChildren) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          errorInfo={this.state.errorInfo}
        />
      )
    }

    return this.props.children
  }
}
