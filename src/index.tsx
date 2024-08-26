import App from 'app/app'
import { ErrorBoundary } from 'app/providers/error-boundary'
import { StoreProvider } from 'app/providers/store-provider'
import { ThemeProvider } from 'app/providers/theme-provider'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,
)
