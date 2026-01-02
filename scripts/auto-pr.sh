#!/bin/bash

# Script to automate git branch creation, push, and PR creation
# This replicates the manual steps we had to do when gh pr create failed

set -e  # Exit on any error

echo "Starting git workflow automation..."

# Get current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "Current branch: $CURRENT_BRANCH"

# Create a new branch with timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
NEW_BRANCH="auto-pr-$TIMESTAMP"
echo "Creating new branch: $NEW_BRANCH"
git checkout -b "$NEW_BRANCH"

# Stage all changes
echo "Staging all changes..."
git add .

# Commit changes with a generic message if none provided
COMMIT_MESSAGE=${1:-"Automated commit"}
echo "Committing changes..."
git commit -m "$COMMIT_MESSAGE

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to origin
echo "Pushing to origin..."
git push origin "$NEW_BRANCH"

# Create PR with a generic title and description if none provided
PR_TITLE=${2:-"Automated PR - $TIMESTAMP"}
PR_DESCRIPTION=${3:-"This PR was automatically generated."}

echo "Creating pull request..."
PR_URL=$(gh pr create --title "$PR_TITLE" --body "$PR_DESCRIPTION

🤖 Generated with [Claude Code](https://claude.com/claude-code)")

echo "Pull request created successfully!"
echo "PR URL: $PR_URL"

echo "Returning to original branch: $CURRENT_BRANCH"
git checkout "$CURRENT_BRANCH"

echo "Script completed successfully!"