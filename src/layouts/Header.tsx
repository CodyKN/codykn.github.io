import { useLocation } from "@solidjs/router";
import { MenuLinks } from "~/consts/MenuLinks";

export const Header = () => {
    const location = useLocation();
    const active = (path: string) =>
        path == location.pathname
            ? "border-sky-600"
            : "border-transparent hover:border-sky-600";

    return (
        <nav>
            <ul class="container flex items-center p-3 text-gray-200">
                {MenuLinks.map((l) => (
                    <li class={`border-b-2 ${active(l.href)} mx-1.5 sm:mx-6`}>
                        <a href={l.href}>{l.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
