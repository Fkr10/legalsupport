import { useDisclaimerAccepted } from '../context/DisclaimerContext.jsx'
import GlassButton from './GlassButton.jsx'

/**
 * Public Button API — maps semantic variant names to DESIGN.md GlassButton variants.
 * accent    → stripe purple primary (CTA)
 * secondary → ghost outline (purple text, purple border)
 * dark      → navy bg, white text
 * ghost     → ghost outline
 * glass     → dark-outline (for use on #08151F dark sections)
 */
export default function Button(props) {
  const { variant = 'accent', ...rest } = props
  const disclaimerAccepted = useDisclaimerAccepted()
  const disabled = !disclaimerAccepted || props.disabled

  const map = {
    accent:    'primary',
    primary:   'primary',
    secondary: 'ghost',
    ghost:     'ghost',
    dark:      'dark',
    glass:     'dark-outline',
  }

  return <GlassButton variant={map[variant] ?? 'primary'} {...rest} disabled={disabled} />
}


