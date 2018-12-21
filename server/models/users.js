module.exports = (sequelize, eDataTypes) => {
  const Users = sequelize.define("Users", {
    FirstName: {
      type: DataTypes.STRING
    },
    LastName: {
      type: DataTypes.STRING
    },
    UserName: {
      type: DataTypes.STRING
    },
    EmailAddress: {
      type: DataTypes.STRING
    }
  });

  // Todo.associate = models => {
  //   Todo.hasMany(models.TodoItem, {
  //     foreignKey: "todoId",
  //     as: "todoItems"
  //   });
  // };

  return Users;
};
