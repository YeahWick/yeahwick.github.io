# Scripts

This directory contains scripts to automate common tasks for managing the blog.

## create-blog-pr.sh

Automates the process of creating a pull request for blog post changes.

### Usage

```bash
./scripts/create-blog-pr.sh "commit_message" "pr_title" "pr_description"
```

### Example

```bash
./scripts/create-blog-pr.sh "Add new quantum computing blog post" "New Blog Post" "Added a comprehensive introduction to quantum computing"
```

### What the script does

1. Creates a new branch with a timestamp
2. Stages all changes
3. Commits changes with the provided message
4. Pushes the branch to origin
5. Creates a pull request with the provided title and description