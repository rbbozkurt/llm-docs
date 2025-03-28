# 🧠 LLM-Powered Markdown Doc Generator

🚀 LLM Docs is a TypeScript-based CLI tool that generates high-quality, production-ready Markdown documentation for any npm package using LLMs like OpenAI. It is modular, LLM-agnostic, and designed with best practices for automation, scaling, and future extensibility.

## 📌 Features

✅ **Supports Any LangChain-Compatible LLM** – OpenAI, Anthropic, and more via dependency injection.

✅ **Well-Structured Markdown Output** – With Overview, Installation, Compatibility, API Reference, and Examples.

✅ **Timestamped Versioning** – Each generated doc is saved with a timestamp.

✅ **Auto-Writes latest.md** – Always keeps a -latest.md copy for quick access.

✅ **CLI Integration** – Accepts npm package names as command-line arguments.

✅ **Extensible Architecture** – Easily add new output targets, formats, or models.

## 📂 Project Structure

```

📦 llm-docs
├── docs/                       # Output Markdown files
├── src/
│   ├── llm/
│   │   ├── doc-generator.ts    # LLM interaction and prompt logic
│   │   └── doc-writer.ts       # Markdown file writing with versioning
│   └── index.ts                # CLI entry point
├── .env.template               # API keys for your llms (DELETE .template extension)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md                   # This documentatio 
```

## 🛠️ Setup & Running

### 🔴 Prerequisites

- **Node.js 18+**
- **npm**
- **.env** 

Example:
```
OPENAI_API_KEY=sk-...
```

### 🚀 Run the CLI Tool

1️⃣ Clone the repository:

```bash
git clone https://github.com/rbbozkurt/llm-docs.git
cd llm-docs
```


2️⃣ Install dependencies:
```bash
npm install
```

3️⃣ Generate docs for a package:
```bash
npx ts-node src/index.ts @rescui/use-glow-hover
```

This creates:
```
docs/@rescui-use-glow-hover-1711625192837.md #versioned

docs/@rescui-use-glow-hover-latest.md #replace with aliases
```


4️⃣ Use predefined shortcut:
```bash
npm run demo
```

## Sample Doc Generation Output

You can see a real generated documentation file under:

`docs/@rescui-use-glow-hover-1743155993228.md`

This file shows the most recently generated Markdown output for demo and review purposes.

## ⚙️ Scripts
| Script       | Description                                |
|--------------|--------------------------------------------|
| `build`      | Compiles TypeScript to `dist/`             |
| `start`      | Runs compiled output                       |
| `dev`        | Runs `src/index.ts` directly with `ts-node`|
| `demo`       | Generates docs for `@rescui/use-glow-hover`|
| `clean`      | Removes `dist` and generated Markdown      |

---

## 🧱 Extending the Tool
- Implement test generation in `DocGenerator`
- Add additional LLM integrations via LangChain
- Write JSON metadata index of all versions
- Build GitHub Action for automated doc publishing


## 📧 Contact

👤 **R. Berkay Bozkurt**  
📧 Email: resitberkaybozkurt@gmail.com  
📂 GitHub: [github.com/rbbozkurt](https://github.com/rbbozkurt)