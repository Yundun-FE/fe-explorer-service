'use strict';

module.exports = app => {
  const { INTEGER, STRING, BOOLEAN } = app.Sequelize;

  const Model = app.model.define('users', {
    userId: {
      type: STRING(255),
      allowNull: false,
    },
    username: {
      type: STRING(255),
      defaultValue: '',
    },
    email: {
      type: STRING(255),
      allowNull: false,
    },
    phoneNumber: {
      type: STRING(255),
      allowNull: false,
    },
    password: {
      type: STRING(255),
      allowNull: false,
    },
    developer: {
      type: BOOLEAN,
      defaultValue: false,
    },
    registerIP: {
      type: STRING(255),
      defaultValue: '',
    },
    message: {
      type: INTEGER,
      defaultValue: 0,
    },
    avatar: {
      type: STRING(255),
      defaultValue: '',
    },
    tz: {
      type: STRING(255),
      defaultValue: '',
    },
    language: {
      type: STRING(255),
      defaultValue: '',
    },
    disabled: {
      type: BOOLEAN,
      defaultValue: false,
    },
  });

  return Model;
};
