import { useDisclaimerAccepted } from '../context/DisclaimerContext.jsx'
import GlassButton from './GlassButton.jsx'

// Keep existing `Button` API/variants, map to GlassButton styles.
export default function Button(props) {
  const { variant = 'primary', ...rest } = props
  const disclaimerAccepted = useDisclaimerAccepted()

  // Disable button if disclaimer not accepted
  const disabled = !disclaimerAccepted || props.disabled

  if (variant === 'accent') {
    return <GlassButton variant="primary" {...rest} disabled={disabled} />
  }

  if (variant === 'ghost') {
    return <GlassButton variant="secondary" {...rest} disabled={disabled} />
  }

  // Default: solid, high-contrast primary button.
  return <GlassButton variant="dark" {...rest} disabled={disabled} />
}

