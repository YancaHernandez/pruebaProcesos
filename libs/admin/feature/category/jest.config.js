module.exports = {
  name: 'admin-feature-category',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/admin/feature/category',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
