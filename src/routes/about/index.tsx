import blushImage from "./blush.png";

export default function About() {
    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <div class="space-y-6">
                <p>Hi, I don't like to post things online.</p>
                <p>This is just a place to put my projects.</p>
                <div class="min-w-full">
                    <div class="mx-auto max-w-80 pt-16">
                        <img
                            class="mx-auto"
                            src={blushImage}
                            alt="A picture of me blushing."
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}