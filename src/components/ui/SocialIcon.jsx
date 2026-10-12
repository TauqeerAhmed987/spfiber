import { FacebookIcon, InstagramIcon } from '../icons'

const icons = { facebook: FacebookIcon, instagram: InstagramIcon }

export default function SocialIcon({ name, ...props }) {
  const Icon = icons[name]
  return Icon ? <Icon {...props} /> : null
}
