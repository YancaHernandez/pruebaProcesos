module.exports = {
  name: 'shared-admin-ui-theme',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/admin/shared/theme',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
