#!/bin/bash
# Session initialization hook for Pine Script Development Assistant
# Provides context at session start

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
PROJECTS_DIR="$PROJECT_DIR/projects"

# Count existing projects
if [[ -d "$PROJECTS_DIR" ]]; then
    PROJECT_COUNT=$(find "$PROJECTS_DIR" -maxdepth 1 -name "*.pine" -type f | wc -l | tr -d ' ')
else
    PROJECT_COUNT=0
fi

# Build context message
CONTEXT="Pine Script Development Assistant ready."
CONTEXT="$CONTEXT You have $PROJECT_COUNT Pine Script projects in /projects/."
CONTEXT="$CONTEXT Available skills: /pinescript:start (guided wizard), /pinescript:create (quick create), /pinescript:video (YouTube analysis), /pinescript:templates, /pinescript:examples."

# Output as additional context
echo "{\"hookSpecificOutput\":{\"hookEventName\":\"SessionStart\",\"additionalContext\":\"$CONTEXT\"}}"

exit 0
