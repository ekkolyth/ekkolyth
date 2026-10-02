import type React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaTiktok,
    FaTwitch,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

type IconName =
    | 'twitch'
    | 'youtube'
    | 'tiktok'
    | 'twitter'
    | 'instagram'
    | 'github'
    | 'email'

const icons = {
    twitch: FaTwitch,
    youtube: FaYoutube,
    tiktok: FaTiktok,
    twitter: FaTwitter,
    instagram: FaInstagram,
    github: FaGithub,
    email: MdEmail,
} satisfies Record<IconName, React.ElementType>

type SocialIconProps = {
    icon: IconName
    href?: string
    ariaLabel?: string
}

export function SocialIcon({ icon, href, ariaLabel }: SocialIconProps) {
    const Icon = icons[icon]
    const Wrapper = href ? 'a' : 'div'

    return (
        <Wrapper
            aria-label={ariaLabel}
            className='bg-zinc-200 rounded-full p-3 hover:bg-indigo-200 transition-all duration-200'
            href={href}
            rel={href ? 'noopener noreferrer' : undefined}
            target={href ? '_blank' : undefined}
        >
            <Icon className='text-zinc-800 size-5' />
        </Wrapper>
    )
}
