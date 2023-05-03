const sequelize = require("../db");
const { Model, DataTypes } = require("sequelize");

//TODO: You need to modify this model (or create a new one to suit your needs)
class Course extends Model {
  static async findCourse(recordid) {
    try {
      const course = await Course.findByPk(recordid);
      return course ? course : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
/*
Fields
1. First name NOT UNIQUE NOT NULL
2. Last name NOT UNIQUE NOT NULL
3. Gender NOT UNIQUE NOT NULL
4. Age NOT NULL
5. Posi-on
6. Salary
7. Department
8. Joining date
*/
Course.init(
  {
    // I changed the course model and introduced this to help you
    // You may leave this record id as is for your solution
    recordid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    //TODO: you need to start changing the fields below to suit your needs
    firstname: {
      type: DataTypes.STRING,
      // REMOVE the 'unique' constraint if your field doesn't need it
      unique: false,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    joindate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Course",
  }
);


/*
ORIGINAL COURSE TEMPLATE
Course.init(
  {
    // I changed the course model and introduced this to help you
    // You may leave this record id as is for your solution
    recordid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    //TODO: you need to start changing the fields below to suit your needs
    courseid: {
      type: DataTypes.STRING,
      // REMOVE the 'unique' constraint if your field doesn't need it
      unique: true,
      allowNull: false,
    },
    coursename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    semester: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coursedesc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    enrollnum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Course",
  }
);
*/
module.exports = Course;
