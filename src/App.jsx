import AppRoutes from './routes/AppRoutes.jsx'
import { DisclaimerProvider } from './components/FirstVisitDisclaimer.jsx'

export default function App() {
  return (
    <DisclaimerProvider>
      <AppRoutes />
    </DisclaimerProvider>
  )
}
