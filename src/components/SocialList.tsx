import { IconTypes } from 'solid-icons';
import { AiFillGithub } from 'solid-icons/ai'

export const SocialList = () => {
    const socialLinks: {
        Name: string;
        Link: string;
        Icon: IconTypes;
    }[] = [
        {
            Name: "Github",
            Link: "https://github.com/codykn",
            Icon: AiFillGithub,
        },
    ];

    return (
        <div class="flex flex-wrap items-end gap-x-2">
            <p>Find me on</p>
            <ul class="flex flex-1 items-center gap-x-2 sm:flex-initial">
                {
                    socialLinks.map(({ Name, Link, Icon }) => (
                        <li class="flex">
                            <a
                                class="inline-block sm:hover:text-link"
                                href={Link}
                                rel={`noreferrer`}
                                target="_blank"
                            >
                                <Icon class="h-8 w-8" />
                                <span class="sr-only">{Name}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}