import { promises as fs } from 'fs';
import * as path from 'path';

/**
 * DocWriter is a utility class responsible for persisting Markdown documentation to disk.
 *
 * Core Features:
 * - Writes documentation files with unique, timestamp-based filenames for version control.
 * - Maintains a `-latest.md` file to provide quick access to the most recent version.
 *
 * Design Decisions:
 * - Uses raw numeric timestamps (`Date.now()`) in filenames for easy programmatic sorting/filtering.
 * - Keeps versioned and latest copies separate to support both historical tracking and quick access.
 * - Uses the standard `docs/` directory to organize outputs.
 *
 * Example Output Files:
 * - @rescui-use-glow-hover-1711625192837.md  ← versioned
 * - @rescui-use-glow-hover-latest.md         ← always updated
 */
export class DocWriter {
  /**
   * Saves Markdown content to a file in the `docs` directory with a versioned name.
   * Also writes a `-latest.md` version that reflects the most recent documentation.
   *
   * @param content - The Markdown documentation content to write.
   * @param filename - The logical name of the package (e.g., "@rescui-use-glow-hover").
   * @param docsDir - The output directory path (default: "docs").
   * @returns The full path to the versioned Markdown file.
   *
   * @example
   * const path = await DocWriter.saveToFile(markdown, "@rescui-use-glow-hover");
   * // Creates: docs/@rescui-use-glow-hover-1711625192837.md
   * // Updates: docs/@rescui-use-glow-hover-latest.md
   */
  static async saveToFile(content: string, filename: string, docsDir = 'docs'): Promise<string> {
    const dirPath = path.resolve(docsDir);

    // Use raw timestamp for sorting/filtering/versioning
    const timestamp = Date.now(); // Unix timestamp in milliseconds

    const versionedFilename = `${filename}-${timestamp}.md`;
    const versionedFilePath = path.join(dirPath, versionedFilename);
    const latestFilePath = path.join(dirPath, `${filename}-latest.md`);

    await fs.mkdir(dirPath, { recursive: true });

    // Write versioned doc
    await fs.writeFile(versionedFilePath, content, 'utf-8');

    // Write or overwrite latest doc
    await fs.writeFile(latestFilePath, content, 'utf-8');

    return versionedFilePath;
  }
}
