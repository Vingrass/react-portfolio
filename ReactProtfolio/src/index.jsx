import { render } from 'react-dom'
import App from './app'
import { ThemeProvider } from './themes'
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
