import { createAgent, gemini } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event }) => {
      const codeAgent = createAgent({
        name: "code-agent",
        system: "You are an expert NextJS developer.  You write readable and maintainable code. You write simple NextJS and React snippets.",
        model: gemini({ model: "gemini-2.5-flash" }),
      });

      const {output} = await codeAgent.run(
        `Write the following snippet: ${event.data.value}`
      );

      return { output };
    },
);
