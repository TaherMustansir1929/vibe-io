import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        await step.sleep("video download", "30s");
        await step.sleep("transcription", "10s");
        await step.sleep("summarization", "5s");
        return { message: `Hello ${event.data.email}!` };
    },
);
