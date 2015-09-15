#!/usr/bin/env node
var revisionRange = process.argv[2];

if (!revisionRange) {
  console.log('Must supply an argument that is a git revision range like `origin/master..origin/develop`. See here for many variations: ');
  console.log('https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html');
  process.exit(1);
}
var exec = require('child_process').execSync;
var dir = process.cwd();
var remote = 'origin';
var gitUrlBase = sh('cd ' + dir + ' && git config --get remote.' + remote + '.url')
.replace(':', '/')
.replace(/^git@/, 'http://')
.replace('.git', '')
.replace('\n', '');

function sh(cmd) {
  return exec(cmd, {encoding: 'utf-8'});
}

function commitFormat() {
  return '[%h](' + gitUrlBase + '/commit/' + '%h)';
}

var x = sh('cd ' + dir + ' && git shortlog ' + revisionRange + ' --numbered --no-merges --format="- ' + commitFormat() + ' %s"');

x = x.replace(/^[a-z|A-Z].*:$/mg, '## $&  ');
x = x.replace(/^\s*\-/mg, '-');
console.log(x);
