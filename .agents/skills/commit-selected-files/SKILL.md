---
name: commit-selected-files
description: Use this skill when a commit message should be generated only for selected uncommitted files. The skill lists all changed files with numbers, lets the user choose the relevant ones, and then writes a short English commit message for that selection only.
---

# Commit For Selected Files

Creates a commit message not for the full working tree, but only for the
uncommitted files selected by the user.

## Activation

This skill is opt-in.
Use it only when the user explicitly starts it manually
(for example `$commit-selected-files`).

## Required Rules

1. Show all uncommitted files first, numbered.
2. Numbering must always start at `1`.
3. Show the files in a clear list with full relative paths.
4. Include both staged and unstaged files.
5. Include untracked files as well.
6. Do not generate a commit message before the user has made a selection.
7. The user selects files by number.
8. Accept single numbers, comma-separated lists, and ranges such as `1`,
   `1,3,5`, or `2-4`.
9. Do not derive or append any ticket number from the branch name or from any
   other source.
10. The commit message must be fully in English.
11. The first line must be as short as possible and follow this pattern:
    `<short text>`
12. If the selection contains multiple clearly separate changes, add a concise
    bullet list below the first line.
13. No unnecessary details and no long explanation around the message.
14. If there are no uncommitted files, do not invent a commit message. State
    that explicitly.
15. Work quickly: read only the selected files or their diffs, not the full
    uncommitted state.

## Workflow

1. Collect all uncommitted files with a quick overview.
2. Combine staged, unstaged, and untracked files into one unique list.
3. Show this list in numbered form, for example:

```text
1. path/to/file_a.py
2. path/to/file_b.vue
3. path/to/file_c.md
```

4. Ask the user which file numbers should be included.
5. Parse the selection robustly.
6. Analyze only the selected files:
   - for tracked files, prefer quick diff summaries
   - for untracked files, read the file content directly
7. Summarize the selected changes:
   - What is the main change?
   - Are there multiple clearly separate topics?
8. Output exactly the commit message, not a long explanation around it.

## Response Behavior

On the first invocation, output only the file list plus a short selection
question.

Example:

```text
1. libs/auth/server/dias/auth/api.py
2. frontend/client/src/views/Nutzer/NutzerList.vue
3. docs/nutzer.md

Which files should be included in the commit message?
Please provide the numbers, for example `1`, `1,3`, or `2-3`.
```

After the selection, output only the commit message.

## Output Format

If there is exactly one topic:

```text
<short text>
```

If there are multiple separate topics:

```text
<short text>

- Point 1
- Point 2
```

## Style Rules

- Keep the first line as short as possible
- Use active and precise wording
- Do not repeat raw diff details
- Do not include file lists in the final commit message
- Avoid generic text such as `Various adjustments`
