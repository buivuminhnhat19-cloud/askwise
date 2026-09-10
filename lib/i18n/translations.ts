export const languages = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文",
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    locale: "en",

    // Navbar
    howItWorks: "How it works",
    students: "Students",
    teachers: "Teachers",
    learnAI: "Learn AI",
    getStarted: "Get Started",

    // Hero
    aiLiteracy: "AI literacy for the next generation",
    heroTitle1: "Learn to use AI",
    heroTitle2: "without losing your thinking",
    heroDescription:
      "AskWise helps students and teachers communicate with AI effectively — without letting AI do the thinking for them.",
    tryAskWise: "Try AskWise",
    seeHowItWorks: "See how it works",

    // How it works
    howItWorksTitle: "From a simple question to a better learning experience.",
    howItWorksDescription:
      "AskWise teaches you what makes a good AI prompt instead of simply generating one for you.",

    stepAsk: "Ask",
    stepAskDescription:
      "Tell AskWise what you are trying to learn or accomplish.",

    stepImprove: "Improve",
    stepImproveDescription:
      "Discover what is missing from your prompt and learn why it matters.",

    stepLearn: "Learn",
    stepLearnDescription:
      "Use the improved prompt with your preferred AI assistant.",

    stepThink: "Think",
    stepThinkDescription:
      "Understand, verify, and think critically about the AI response.",

    // Demo
    demoNeedsImprovement: "Needs improvement",
    demoStrongPrompt: "Strong prompt",
    demoQuality: "Prompt Quality",
    demoExample: "Example",
    demoImproved: "AskWise improved",
    promptCoach: "AskWise Prompt Coach",
    yourPrompt: "Your prompt",
    needsImprovement: "Needs improvement",
    promptQuality: "Prompt Quality",
    askWiseImproved: "AskWise improved",
    strongPrompt: "Strong prompt",
    demoBefore: "Before",
    demoAfter: "After",
    demoPrompt: "Explain photosynthesis.",
    demoImprovedPrompt:
      "I'm a Grade 6 student learning about photosynthesis. Explain it using simple language and everyday examples. Ask me questions to check my understanding, and don't give me the final answer immediately.",
  },

  vi: {
    locale: "vi",

    // Navbar
    howItWorks: "Cách hoạt động",
    students: "Học sinh",
    teachers: "Giáo viên",
    learnAI: "Học về AI",
    getStarted: "Bắt đầu",

    // Hero
    aiLiteracy: "Kỹ năng AI cho thế hệ mới",
    heroTitle1: "Học cách sử dụng AI",
    heroTitle2: "mà không đánh mất tư duy",
    heroDescription:
      "AskWise giúp học sinh và giáo viên giao tiếp với AI hiệu quả — mà không để AI suy nghĩ thay mình.",
    tryAskWise: "Thử AskWise",
    seeHowItWorks: "Xem cách hoạt động",

    // How it works
    howItWorksTitle: "Từ một câu hỏi đơn giản đến một trải nghiệm học tập tốt hơn.",
    howItWorksDescription:
      "AskWise giúp bạn hiểu điều gì tạo nên một prompt tốt thay vì chỉ tạo prompt cho bạn.",

    stepAsk: "Hỏi",
    stepAskDescription:
      "Cho AskWise biết bạn đang muốn học hoặc làm gì.",

    stepImprove: "Cải thiện",
    stepImproveDescription:
      "Tìm ra điều còn thiếu trong prompt và hiểu tại sao nó quan trọng.",

    stepLearn: "Học",
    stepLearnDescription:
      "Sử dụng prompt đã cải thiện với công cụ AI bạn muốn.",

    stepThink: "Suy nghĩ",
    stepThinkDescription:
      "Hiểu, kiểm tra và tư duy phản biện về câu trả lời của AI.",

    // Demo
    demoNeedsImprovement: "Cần cải thiện",
    demoStrongPrompt: "Prompt tốt",
    demoQuality: "Chất lượng Prompt",
    demoExample: "Ví dụ",
    demoImproved: "AskWise đã cải thiện",
    promptCoach: "Trợ lý Prompt AskWise",
    yourPrompt: "Prompt của bạn",
    needsImprovement: "Cần cải thiện",
    promptQuality: "Chất lượng Prompt",
    askWiseImproved: "AskWise đã cải thiện",
    strongPrompt: "Prompt tốt",
    demoBefore: "Trước",
    demoAfter: "Sau",
    demoPrompt: "Hãy giải thích về quá trình quang hợp.",
    demoImprovedPrompt:
      "Tôi là học sinh lớp 6 đang học về quá trình quang hợp. Hãy giải thích bằng ngôn ngữ đơn giản và các ví dụ hằng ngày. Hãy đặt câu hỏi để kiểm tra mức độ hiểu của tôi và đừng đưa ra đáp án cuối cùng ngay lập tức.",
  },

  zh: {
    locale: "zh",

    // Navbar
    howItWorks: "使用方法",
    students: "学生",
    teachers: "教师",
    learnAI: "学习 AI",
    getStarted: "开始使用",

    // Hero
    aiLiteracy: "面向新一代的 AI 素养",
    heroTitle1: "学会使用 AI",
    heroTitle2: "而不是失去自己的思考能力",
    heroDescription:
      "AskWise 帮助学生和教师更有效地与 AI 沟通，同时避免让 AI 代替自己思考。",
    tryAskWise: "试用 AskWise",
    seeHowItWorks: "了解工作方式",

    // How it works
    howItWorksTitle: "从一个简单的问题到更好的学习体验。",
    howItWorksDescription:
      "AskWise 帮助你理解什么才是好的提示词，而不是直接替你生成提示词。",

    stepAsk: "提问",
    stepAskDescription:
      "告诉 AskWise 你想学习或完成什么。",

    stepImprove: "改进",
    stepImproveDescription:
      "找出提示词中缺少的内容，并理解为什么它很重要。",

    stepLearn: "学习",
    stepLearnDescription:
      "使用改进后的提示词和你选择的 AI 工具一起学习。",

    stepThink: "思考",
    stepThinkDescription:
      "理解、验证并批判性地思考 AI 的回答。",

    // Demo
    demoNeedsImprovement: "需要改进",
    demoStrongPrompt: "优秀提示词",
    demoQuality: "提示词质量",
    demoExample: "示例",
    demoImproved: "AskWise 优化后",
    promptCoach: "AskWise 提示词教练",
    yourPrompt: "你的提示词",
    needsImprovement: "需要改进",
    promptQuality: "提示词质量",
    askWiseImproved: "AskWise 优化后",
    strongPrompt: "优秀提示词",
    demoBefore: "之前",
    demoAfter: "之后",
    demoPrompt: "请解释光合作用。",
    demoImprovedPrompt:
      "我是一名正在学习光合作用的六年级学生。请使用简单的语言和日常生活中的例子来解释。请通过提问检查我的理解，并不要立即给出最终答案。",
  },
} as const;