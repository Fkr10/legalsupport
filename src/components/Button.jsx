import GlassButton from './GlassButton.jsx'

// Keep existing `Button` API/variants, map to GlassButton styles.
export default function Button(props) {
  const { variant = 'primary', ...rest } = props

  if (variant === 'accent') {
    return <GlassButton variant="primary" {...rest} />
  }

  if (variant === 'ghost') {
    return <GlassButton variant="secondary" {...rest} />
  }

  // Default: solid, high-contrast primary button.
  return <GlassButton variant="dark" {...rest} />
}

