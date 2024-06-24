import { TEXT_COLOR, XS_SPACING } from '../const/colors'
import { Typography } from '@mui/material'

function Text({children, variant="",color=TEXT_COLOR,sx}) {
  return (
    <Typography textAlign="left" color={color}  variant={variant} marginBlock={XS_SPACING} sx={sx}>{children}</Typography>
  )
}

export default Text