---
name: video
description: Analyzes YouTube trading videos to extract Pine Script specifications. Provide a YouTube URL and get a detailed breakdown of the strategy or indicator.
disable-model-invocation: true
argument-hint: [youtube-url]
allowed-tools: Bash, Read
---

# YouTube Video Analysis

Analyzing YouTube video to extract trading strategy specifications.

## Instructions

When this skill is invoked with a YouTube URL:

1. **Run the video analyzer immediately**:
   ```bash
   python tools/video-analyzer.py "$ARGUMENTS"
   ```

2. **Show the analysis results** to the user, including:
   - Video title and author
   - Detected script type (indicator/strategy)
   - Complexity score
   - Key indicators and patterns identified
   - Entry/exit conditions extracted
   - Suggested features

3. **Confirm with the user**:
   - "Does this capture the strategy correctly?"
   - "Would you like me to adjust anything before implementing?"

4. **Proceed to implementation** using pine-developer skill

## Command Options

If standard analysis fails:

```bash
# Force Whisper transcription (slower but works without captions)
python tools/video-analyzer.py "$ARGUMENTS" --whisper

# Use larger model for better accuracy
python tools/video-analyzer.py "$ARGUMENTS" --whisper --model medium
```

## Error Handling

If video analyzer fails:
1. Check if it's a valid YouTube URL
2. Try with `--whisper` flag
3. If still failing, ask user to describe the strategy manually

## Post-Analysis

After confirming the analysis:
1. Create a project file in `projects/`
2. Use pine-developer to implement the extracted strategy
3. Add debugging tools for verification
