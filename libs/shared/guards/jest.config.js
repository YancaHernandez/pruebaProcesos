module.exports = {
  name: 'shared-guards',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/guards',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
