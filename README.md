# git-release-report-markdown

Generate a Git Release Report in Markdown by comparing two branches and showing all non-merge commits. 

## Usage

    git-release-report-markdown upstream/master..upstream/release-1.0

And that will output a markdown list of commits grouped by author with commits linked to the repo like so:

```
## Author A (2):
- [f319feb](http://github.com/org/repo/commit/f319feb) commit message here
- [5c7c4f5](http://github.com/org/repo/commit/5c7c4f5) commit message here

## Author B (1):
- [62d0d04](http://github.com/org/repo/commit/62d0d04) commit message here

## Author C (1):
- [bdb10fc](http://github.com/org/repo/commit/bdb10fc) commit message here
```

*The author lines contain two spaces at the end to create a newline BTW.*

To copy output, append this to command: `| pbcopy`.  
To create a file, append this to command: `> path/to/file.md`
To append to a file, append this to command: `>> path/to/file.md`

## Installation

### Global CLI Utility

    npm install --global git-release-report-markdown

Then, `cd` to the git directory you want and execute according to the Usage section above.

### Shared project dependency utility

    npm install git-release-report-markdown --save-dev

You'll then set it as a script to run using [`npm run`](https://docs.npmjs.com/misc/scripts). So edit your `package.json` to contain this: 

```json
{
    "name": "name-of-project",
    "scripts": {
        "release-report": "git-release-report-markdown upstream/master..upstream/release-1.0"
    }
}
```

Now, you can just run `npm run release-report`.
