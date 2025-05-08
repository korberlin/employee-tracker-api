/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the employee
 *           example: 1
 *         name:
 *           type: string
 *           description: Employee's full name
 *           example: John Doe
 *         phone:
 *           type: string
 *           description: Employee's phone number
 *           example: 555-123-4567
 *         email:
 *           type: string
 *           description: Employee's email address (must be unique)
 *           format: email
 *           example: john.doe@example.com
 *         salary:
 *           type: number
 *           description: Employee's salary amount
 *           example: 75000
 *         monthlySales:
 *           type: number
 *           description: Total sales made by the employee per month
 *           example: 150000
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the record was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the record was last updated
 *     NewEmployee:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           description: Employee's full name
 *           example: John Doe
 *         phone:
 *           type: string
 *           description: Employee's phone number
 *           example: 555-123-4567
 *         email:
 *           type: string
 *           description: Employee's email address (must be unique)
 *           format: email
 *           example: john.doe@example.com
 *         salary:
 *           type: number
 *           description: Employee's salary amount
 *           example: 75000
 *         monthlySales:
 *           type: number
 *           description: Total sales made by the employee per month
 *           example: 150000
 *     UpdateEmployee:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Employee's full name
 *           example: John Doe
 *         phone:
 *           type: string
 *           description: Employee's phone number
 *           example: 555-123-4567
 *         email:
 *           type: string
 *           description: Employee's email address
 *           format: email
 *           example: john.doe@example.com
 *         salary:
 *           type: number
 *           description: Employee's salary amount
 *           example: 80000
 *         monthlySales:
 *           type: number
 *           description: Total sales made by the employee per month
 *           example: 180000
 *     ApiResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: object
 *           description: Success response data
 *         error:
 *           type: string
 *           description: Error message
 */

import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from '@sequelize/core';
import { Table, Attribute, PrimaryKey, AutoIncrement, CreatedAt, UpdatedAt } from '@sequelize/core/decorators-legacy';

@Table({
    tableName: 'employees',
    underscored: false
})
class Employee extends Model<InferAttributes<Employee>,InferCreationAttributes<Employee>> {
    @PrimaryKey
    @AutoIncrement
    @Attribute({
        type: DataTypes.INTEGER
    })
    declare id: CreationOptional<number>;
    
    @Attribute({
        type: DataTypes.STRING(100),
        allowNull: false
    })
    declare name: string;
    
    @Attribute({
        type: DataTypes.STRING(20),
        allowNull: false,
    })
    declare phone: string;
    
    @Attribute({
        type:DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isEmail: true
        }
    })
    declare email: string;

    @Attribute({
        type:DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
    })
    declare salary: number;
    
    @Attribute({
        type:DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0
    })
    declare monthlySales: number;
    @CreatedAt
    declare createdAt:CreationOptional<Date>;
    @UpdatedAt
    declare updatedAt:CreationOptional<Date>;
}


export default Employee;