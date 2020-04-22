module.exports = {
  name: 'admin-feature-auth',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/admin/feature/auth',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
