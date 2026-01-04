#!/bin/bash

# Script to automate the process of creating a new blog post PR
# Usage: ./scripts/create-blog-pr.sh "Commit message" "PR title" "PR description"

set -e  # Exit on any error

# Check if required arguments are provided
if [ $# -lt 3 ]; then
    echo "Usage: $0 \"commit_message\" \"pr_title\" \"pr_description\""
    echo "Example: $0 \"Add new quantum computing blog post\" \"New Blog Post\" \"Added a comprehensive introduction to quantum computing\""
    exit 1
fi

COMMIT_MESSAGE="$1"
PR_TITLE="$2"
PR_DESCRIPTION="$3"

echo "Starting automated blog post PR creation process..."

# Get current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Create a new branch with timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
NEW_BRANCH="blog-post-$TIMESTAMP"
echo "Creating new branch: $NEW_BRANCH"
git checkout -b "$NEW_BRANCH"

# Stage all changes
echo "Staging all changes..."
git add .

# Check if there are any changes to commit
if git diff --cached --exit-code >/dev/null 2>&1; then
    echo "No changes to commit. Creating empty commit..."
    git commit --allow-empty -m "$COMMIT_MESSAGE

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"
else
    # Commit changes
    echo "Committing changes..."
    git commit -m "$COMMIT_MESSAGE

    🤖 Generated with [Claude Code](https://claude.com/claude-code)

    Co-Authored-By: Claude <noreply@anthropic.com>"
fi

# Push to origin
echo "Pushing to origin..."
git push origin "$NEW_BRANCH"

# Create PR
echo "Creating pull request..."
PR_URL=$(gh pr create --title "$PR_TITLE" --body "$PR_DESCRIPTION

🤖 Generated with [Claude Code](https://claude.com/claude-code)")

echo "Pull request created successfully!"
echo "PR URL: $PR_URL"

echo "Script completed successfully!"