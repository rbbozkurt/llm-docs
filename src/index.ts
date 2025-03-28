/**
 * Entry point for generating Markdown documentation using an LLM.
 * 
 * Usage:
 *   Run via CLI by passing the target npm package name:
 * 
 *     npx ts-node src/index.ts @rescui/use-glow-hover
 * 
 * Workflow:
 * 1. Reads the package name from the CLI argument.
 * 2. Initializes a ChatOpenAI instance using the OpenAI API key from `.env`.
 * 3. Passes the LLM to the DocGenerator to generate structured Markdown documentation.
 * 4. Uses DocWriter to persist the output into the `docs/` directory with a timestamped file.
 * 5. Also writes or updates a `-latest.md` file for convenience.
 * 
 * Requirements:
 * - OPENAI_API_KEY must be defined in the `.env` file.
 * - The package name must be passed as a CLI argument.
 */

import dotenv from 'dotenv';
dotenv.config();

import { ChatOpenAI } from "@langchain/openai";
import { DocGenerator } from './llm/doc-generator';
import { DocWriter } from './llm/doc-writer';

// --- Parse CLI args
const [, , rawDocName] = process.argv;

if (!rawDocName) {
  console.error("❌ Please provide a package name as argument. Example:");
  console.error("   npx ts-node src/index.ts @rescui/use-glow-hover");
  process.exit(1);
}

const run = async () => {
  const llm = new ChatOpenAI({
    modelName: 'gpt-4',
    temperature: 0.3,
    openAIApiKey: process.env.OPENAI_API_KEY!,
  });

  const docName = rawDocName;

  const generator = new DocGenerator(llm)
    .setDocName(docName)
    .setPackageUrl(`https://www.npmjs.com/package/${docName}`);

  const markdown = await generator.generate();

  const outputPath = await DocWriter.saveToFile(markdown, docName.replace('/', '-'));

  console.log(`✅ Documentation saved to: ${outputPath}`);
};

run().catch(console.error);
