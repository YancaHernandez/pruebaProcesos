module.exports = {
  name: 'shared-admin-ui-preloader',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/shared/admin/ui/preloader',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
