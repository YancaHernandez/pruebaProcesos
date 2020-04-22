module.exports = {
  name: 'shared-admin-ui-data-table',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/shared/admin/ui/data-table',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
