module.exports = {
  name: 'admin-data-access-category',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/admin/data-access/category',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
