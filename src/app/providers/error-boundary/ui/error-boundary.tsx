import { Component, ErrorInfo, ReactNode } from 'react'
import { PageError } from 'widgets/page-error'

interface IErrorBoundaryProps {
	children: ReactNode
}

interface IErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
	constructor(props: IErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		console.log(error)
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props
		if (hasError) {
			return <PageError />
		}

		return children
	}
}

export default ErrorBoundary
