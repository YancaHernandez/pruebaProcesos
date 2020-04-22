module.exports = {
  name: 'shared-data-access-document-type',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/shared/data-access/document-type',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
