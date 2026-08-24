export type PromptAnalysis = {
  score: number;
  strengths: string[];
  improvements: {
    category: string;
    title: string;
    description: string;
  }[];
};

export function analyzePrompt(prompt: string): PromptAnalysis {
  const text = prompt.trim();

  const strengths: string[] = [];
  const improvements: PromptAnalysis["improvements"] = [];

  if (!text) {
    return {
      score: 0,
      strengths: [],
      improvements: [
        {
          category: "Prompt",
          title: "Your prompt is empty",
          description:
            "Start by telling the AI what you are trying to learn or accomplish.",
        },
      ],
    };
  }

  // 1. Topic / task
  const hasTask =
    /\b(explain|teach|help|compare|summarize|solve|analyze|describe|show|give|write|create|understand)\b/i.test(
      text
    );

  if (hasTask) {
    strengths.push("Your main task is clear.");
  } else {
    improvements.push({
      category: "Goal",
      title: "Make your task clearer",
      description:
        "Tell the AI exactly what you want it to help you do.",
    });
  }

  // 2. Context
  const hasContext =
    /\b(i am|i'm|i am a|student|grade|class|learning|studying|school)\b/i.test(
      text
    );

  if (hasContext) {
    strengths.push("You provided some context.");
  } else {
    improvements.push({
      category: "Context",
      title: "Add some context",
      description:
        "Tell the AI what you are learning, why you are learning it, or what you already know.",
    });
  }

  // 3. Student level
  const hasLevel =
    /\b(grade|year|beginner|elementary|middle school|high school|university)\b/i.test(
      text
    );

  if (hasLevel) {
    strengths.push("You indicated your learning level.");
  } else {
    improvements.push({
      category: "Level",
      title: "Tell AI your level",
      description:
        "For example, say that you are a Grade 6 student so the explanation can match your level.",
    });
  }

  // 4. Desired response
  const hasFormat =
    /\b(example|examples|steps|simple|simple language|bullet|table|quiz|questions|short|detailed|explain like)\b/i.test(
      text
    );

  if (hasFormat) {
    strengths.push("You gave instructions about the response.");
  } else {
    improvements.push({
      category: "Response",
      title: "Choose how you want to learn",
      description:
        "Tell the AI how you want the information presented, such as simple language, examples, steps, or questions.",
    });
  }

  // 5. Learning behavior
  const hasLearningGoal =
    /\b(test me|quiz me|check my understanding|ask me|don't give|do not give|guide me|practice)\b/i.test(
      text
    );

  if (hasLearningGoal) {
    strengths.push("Your prompt encourages active learning.");
  } else {
    improvements.push({
      category: "Learning",
      title: "Make AI help you learn",
      description:
        "Ask AI to guide you, ask questions, or check your understanding instead of simply giving you the answer.",
    });
  }

  /*
   * Scoring
   *
   * Five categories:
   * Goal       = 20
   * Context    = 20
   * Level      = 20
   * Response   = 20
   * Learning   = 20
   */

  const score =
    (hasTask ? 20 : 0) +
    (hasContext ? 20 : 0) +
    (hasLevel ? 20 : 0) +
    (hasFormat ? 20 : 0) +
    (hasLearningGoal ? 20 : 0);

  return {
    score,
    strengths,
    improvements,
  };
}