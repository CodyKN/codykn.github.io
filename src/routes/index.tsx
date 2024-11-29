import { SocialList } from "~/components/SocialList";

export default function Home() {
    return (
        <main class="text-center mx-auto text-gray-700 py-4">
            <section>
                <h1 class="title mb-6">Hello!</h1>
                <p class="mb-4"></p>
                <SocialList />
            </section>
        </main>
    );
}
