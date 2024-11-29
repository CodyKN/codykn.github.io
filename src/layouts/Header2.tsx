import { MenuLinks } from "~/consts/MenuLinks";
import { useLocation } from "@solidjs/router";
// import Search from "../Search";
// import ThemeToggle from "../ThemeToggle";
import { createSignal } from "solid-js";

export const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = createSignal(false);

    return (
        <header class="group relative mb-28 flex items-center" id="main-header">
            <div class="flex sm:flex-col">
                <span class="text-xl font-bold sm:text-2xl">Snot Boogie</span>
                <nav
                    aria-label="Main menu"
                    class={`absolute -inset-x-4 top-14 ${menuOpen() ? "flex" : "hidden"} flex-col items-end gap-y-4 rounded-md bg-bgColor/[.85] py-4 text-accent shadow backdrop-blur sm:static sm:z-auto sm:-ms-4 sm:mt-1 sm:flex sm:flex-row sm:items-center sm:divide-x sm:divide-dashed sm:divide-accent sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none`}
                    id="navigation-menu"
                >
                    {MenuLinks.map((link) => (
                        <a
                            aria-current={
                                location.pathname === link.href
                                    ? "page"
                                    : undefined
                            }
                            class="px-4 py-4 underline-offset-2 sm:py-0 sm:hover:underline"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
            {/* <Search /> */}
            {/* <ThemeToggle /> */}
            <button
                aria-expanded={menuOpen()}
                aria-haspopup="menu"
                aria-label="Open main menu"
                class="group relative ms-4 h-7 w-7 sm:invisible sm:hidden"
                id="toggle-navigation-menu"
                type="button"
                onClick={() => setMenuOpen(!menuOpen())}
            >
                <svg
                    aria-hidden="true"
                    class={`absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-all ${menuOpen() ? "scale-0 opacity-0" : ""}`}
                    fill="none"
                    id="line-svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                >
                    {/* SVG content here */}
                </svg>
            </button>
        </header>
    );
};
