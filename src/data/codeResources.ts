export type CodeResource = {
  title: string;
  description: string;
  file: `/resources/${string}`;
  format: string;
  youtubeUrl?: string;
};

export const codeResources: Readonly<Record<string, CodeResource>> = {
  "1049": {
    title: "Runway Free Product Shot Starter Guide",
    description: "Make a short image-to-video product shot with a copyable prompt and check the Runway Free plan limits.",
    file: "/resources/runway-starter-guide.txt",
    format: ".txt",
  },
  "1048": {
    title: "Price Enquiry Reply Kit",
    description: "Templates for fixed prices, custom quotes and a gentle follow-up.",
    file: "/resources/price-enquiry-reply-kit.txt",
    format: ".txt",
  },
  "1047": {
    title: "Claude Website Brief Template",
    description: "Decide what your website needs, fill a sample brief and review it with Claude.",
    file: "/resources/claude-website-brief-template.txt",
    format: ".txt",
  },
  "1046": {
    title: "Website Enquiry Journey Audit",
    description: "Follow the landing page, CTA, form, confirmation and inbox to find where enquiries get stuck.",
    file: "/resources/website-enquiry-journey-audit.txt",
    format: ".txt",
  },
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
