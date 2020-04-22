module.exports = {
  name: 'admin-data-access-rol',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/admin/data-access/rol',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
