import App from 'app/app'
import { ErrorBoundary } from 'app/providers/error-boundary'
import { ThemeProvider } from 'app/providers/theme-provider'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
)
