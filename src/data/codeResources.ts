export type CodeResource = {
  title: string;
  description: string;
  file: `/resources/${string}`;
  format: string;
  youtubeUrl?: string;
};

export const codeResources: Readonly<Record<string, CodeResource>> = {
  "1042": {
    title: "Website Chatbot Setup Checklist",
    description: "Plan your chatbot’s answers, enquiry routing and human handoff, then test the workflow before launch.",
    file: "/resources/chatbot-setup-checklist.txt",
    format: ".txt",
  },
};
