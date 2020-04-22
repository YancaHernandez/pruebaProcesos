/* eslint-disable no-template-curly-in-string */

const gitlabUrl = 'https://gitlab.com';
const gitlabApiPathPrefix = '/api/v4';
const assets = [{ path: 'index.js', label: 'JS distribution' }];

const verifyConditions = [
  ['@semantic-release/changelog'],
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'CHANGELOG.md'],
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ],
  [
    '@semantic-release/gitlab',
    {
      gitlabUrl,
      gitlabApiPathPrefix,
      assets
    }
  ]
];
const analyzeCommits = [['@semantic-release/commit-analyzer']];

const generateNotes = ['@semantic-release/release-notes-generator'];
const prepare = [
  '@semantic-release/changelog',
  [
    '@semantic-release/npm',
    {
      // this here is just for package.log update
      npmPublish: false
    }
  ],
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'CHANGELOG.md'],
      message:
        'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ]
];
const publish = [
  [
    '@semantic-release/gitlab',
    {
      gitlabUrl,
      gitlabApiPathPrefix,
      assets
    }
  ]
];

// skipped steps
const verifyRelease = [];
const fail = [];
const success = [];
const addChannel = [];

module.exports = {
  repositoryUrl: 'https://gitlab.com/akaliia/frontend.git',
  branches: ['master'],
  verifyConditions,
  analyzeCommits,
  verifyRelease,
  generateNotes,
  prepare,
  publish,
  fail,
  success,
  addChannel
};
