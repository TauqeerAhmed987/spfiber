import contactImage from '../../assets/images/contact.jpg'
import { contactInfo, socialLinks } from '../../data/site'
import { fadeLeft } from '../../utils/animations'
import { MailIcon, MapPinIcon, PhoneIcon, ShareIcon } from '../icons'
import Reveal from '../ui/Reveal'
import SocialIcon from '../ui/SocialIcon'

function InfoItem({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon />
      </span>
      <div>
        <h6 className="font-heading font-semibold text-heading">{title}</h6>
        {children}
      </div>
    </div>
  )
}

export default function ContactInfo() {
  return (
    <Reveal variants={fadeLeft}>
      <span className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3 block">
        Contact Us
      </span>
      <h2 className="text-3xl md:text-[42px] font-heading font-semibold text-heading leading-tight mb-4">
        Contact Information
      </h2>
      <p className="text-body leading-relaxed mb-8 max-w-md">
        Have a question about fiber installation, wireless coverage, or your
        bill? Send us a message and our support team will get back to you
        shortly.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <InfoItem icon={MapPinIcon} title="Address">
          <span className="text-sm text-body">{contactInfo.address}</span>
        </InfoItem>
        <InfoItem icon={PhoneIcon} title="Phone Number">
          <a
            href={`tel:${contactInfo.phoneHref}`}
            className="text-sm text-body hover:text-primary"
          >
            {contactInfo.phone}
          </a>
        </InfoItem>
        <InfoItem icon={MailIcon} title="Email Address">
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-sm text-body hover:text-primary"
          >
            {contactInfo.email}
          </a>
        </InfoItem>
        <div className="flex items-start gap-3">
          <span className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <ShareIcon />
          </span>
          <div>
            <h6 className="font-heading font-semibold text-heading mb-1">Social</h6>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <SocialIcon name={social.icon} size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden aspect-[550/195]">
        <img
          src={contactImage}
          alt="Spalding Fiber support team"
          className="w-full h-full object-cover"
        />
      </div>
    </Reveal>
  )
}
