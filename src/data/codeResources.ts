export type CodeResource = {
  title: string;
  description: string;
  file: `/resources/${string}`;
  format: string;
  youtubeUrl?: string;
};

export const codeResources: Readonly<Record<string, CodeResource>> = {
  "1045": {
    title: "One Topic, Three Posts Workflow",
    description: "Create a teaching post, a checklist, and a service post from one business brief.",
    file: "/resources/one-topic-three-posts-workflow.txt",
    format: ".txt",
  },
  "1044": {
    title: "ChatGPT Brand Voice Starter Guide",
    description: "Build a clear writing brief, use your own examples, and refine social post drafts with reusable prompts.",
    file: "/resources/chatgpt-brand-voice-starter-guide.txt",
    format: ".txt",
  },
  "1042": {
    title: "Website Chatbot Setup Checklist",
    description: "Plan your chatbot’s answers, enquiry routing and human handoff, then test the workflow before launch.",
    file: "/resources/chatbot-setup-checklist.txt",
    format: ".txt",
  },
  "1043": {
    title: "Website Enquiry Form Checklist",
    description: "Check your form fields, confirmation message and enquiry delivery before you launch.",
    file: "/resources/website-enquiry-form-checklist.txt",
    format: ".txt",
  },
};
