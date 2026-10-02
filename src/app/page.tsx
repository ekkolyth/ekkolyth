import { FaCoffee, FaDiscord, FaTwitch, FaTwitter } from 'react-icons/fa'
import { SocialIcon } from '@/components/social-icon'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default function LinkPage() {
    return (
        <div className='min-h-dvh w-full flex items-center justify-center px-4 py-10 m-0'>
            <div className='w-full max-w-md rounded-3xl overflow-hidden shadow-xl'>
                <div className='bg-zinc-950/50 px-6 pt-10 pb-6 text-center'>
                    <Avatar className='size-20 mx-auto mb-4 border-3 '>
                        <AvatarImage alt='Ekkolyth avatar' src='/ekko.png' />
                        <AvatarFallback>EK</AvatarFallback>
                    </Avatar>

                    <h1 className='text-primary-foreground text-3xl mb-4 font-bold'>
                        Ekkolyth
                    </h1>
                    <p className='text-base text-muted-foreground mt-1'>
                        Hey! I&apos;m Ekko. I stream and stuff, and you&apos;re
                        welcome here &lt;3
                    </p>

                    <div className='mt-6 flex flex-col gap-3 mb-2'>
                        <Button
                            asChild
                            className='w-full justify-center'
                            size='lg'
                            variant='ghost'
                        >
                            <a
                                href='https://www.twitch.tv/ekkolyth'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaTwitch />
                                Watch Live
                            </a>
                        </Button>
                        <Button
                            asChild
                            className='w-full justify-center'
                            size='lg'
                            variant='ghost'
                        >
                            <a
                                href='https://twitter.com/ekkolyth'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaTwitter />
                                Follow me on Twitter
                            </a>
                        </Button>
                        <Button
                            asChild
                            className='w-full justify-center'
                            size='lg'
                            variant='ghost'
                        >
                            <a
                                href='https://discord.gg/NyQZaYRcdj'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaDiscord />
                                Join my Discord
                            </a>
                        </Button>
                        <Button
                            asChild
                            className='w-full justify-center'
                            size='lg'
                            variant='ghost'
                        >
                            <a
                                href='https://ko-fi.com/ekkolyth'
                                rel='noopener noreferrer'
                                target='_blank'
                            >
                                <FaCoffee />
                                Buy me a Ko-fi
                            </a>
                        </Button>
                    </div>
                </div>

                <div className='bg-white px-6 py-6 flex justify-center gap-3 text-zinc-700 text-2xl'>
                    <SocialIcon
                        ariaLabel='Twitch'
                        href='https://twitch.tv/ekkolyth'
                        icon='twitch'
                    />
                    <SocialIcon
                        ariaLabel='YouTube'
                        href='https://www.youtube.com/@ekkolyth'
                        icon='youtube'
                    />
                    <SocialIcon
                        ariaLabel='TikTok'
                        href='https://www.tiktok.com/@ekkolyth'
                        icon='tiktok'
                    />
                    <SocialIcon
                        ariaLabel='Twitter'
                        href='https://twitter.com/ekkolyth'
                        icon='twitter'
                    />
                    <SocialIcon
                        ariaLabel='Instagram'
                        href='https://www.instagram.com/ekkolyth'
                        icon='instagram'
                    />
                    <SocialIcon
                        ariaLabel='GitHub'
                        href='https://github.com/ekkolyth'
                        icon='github'
                    />
                    <SocialIcon
                        ariaLabel='Email'
                        href='mailto:hello@ekkolyth.com'
                        icon='email'
                    />
                </div>
            </div>
        </div>
    )
}
