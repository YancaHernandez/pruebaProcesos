module.exports = {
  name: 'shared-admin-ui-layouts',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/admin/shared/layouts',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
