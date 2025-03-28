import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

/**
 * DocGenerator is responsible for generating Markdown documentation for an npm package
 * using any LangChain-compatible LLM (e.g., ChatOpenAI, ChatAnthropic).
 *
 * Core Features:
 * - Accepts a BaseChatModel instance to decouple LLM implementation from logic
 * - Allows setting the package name and URL for which documentation will be generated
 * - Constructs a detailed prompt to instruct the LLM to generate well-structured Markdown
 *
 * Markdown Output Structure:
 * - Overview: What the package does and why it's useful
 * - Installation: npm/yarn install instructions
 * - Compatibility: Framework and environment support
 * - API Reference: Markdown table with function names, parameters, and types
 * - Usage Examples: Basic and advanced usage with syntax-highlighted code blocks
 * - Additional Notes: Edge cases, tips, caveats
 *
 * Design Decisions:
 * - Uses method chaining (fluent pattern) for setting optional parameters
 * - Prompts are hardcoded to enforce a consistent and professional documentation layout
 * - Can be paired with DocWriter to persist generated documentation to disk
 *
 * Usage:
 * ```ts
 * const generator = new DocGenerator(llm)
 *   .setDocName("@rescui/use-glow-hover")
 *   .setPackageUrl("https://www.npmjs.com/package/@rescui/use-glow-hover");
 *
 * const markdown = await generator.generate();
 * ```
 */
export class DocGenerator {
  private llm: BaseChatModel;
  private docName: string = "your library";
  private packageUrl?: string;

  constructor(llm: BaseChatModel) {
    this.llm = llm;
  }

  setDocName(name: string): this {
    this.docName = name;
    return this;
  }

  setPackageUrl(url: string): this {
    this.packageUrl = url;
    return this;
  }

  async generate(): Promise<string> {
    const systemPrompt = `
You are a senior technical writer and documentation expert.

Your task is to generate high-quality, production-ready Markdown documentation for the \`${this.docName}\` npm package.

Your output must be **well-structured** and follow this format strictly:

## Overview
- What the package does
- Why it is useful

## Installation
- How to install the package with npm and/or yarn

## Compatibility
- Supported frameworks (e.g., React, Vue, etc.)
- Environment requirements (e.g., Node version, browser support)

## API Reference
- Use a Markdown table
- Include function/method name, parameter names, types, and descriptions
- If available, include return types

## Usage Examples
- Show at least one basic and one advanced example
- Use valid syntax highlighting (e.g., \`\`\`ts or \`\`\`jsx)
- Add a short explanation above or below each example

## Additional Notes
- Mention any caveats, edge cases, or limitations
- Provide tips for integration or performance considerations if relevant

### Output Instructions:
- Use **Markdown** syntax correctly
- Use proper headings, bullet points, and code blocks
- Be concise but informative
- Do not add unrelated commentary or markdown artifacts
`;


    const userPrompt = `
The npm package is available at:
${this.packageUrl ?? 'https://www.npmjs.com/package/' + this.docName}

You may also look at its README or source code from the npm registry.

Generate documentation based on public info.
`;

    const response = await this.llm.invoke([
      new SystemMessage(systemPrompt),
      new HumanMessage(userPrompt),
    ]);

    return response.content as string;
  }
}
