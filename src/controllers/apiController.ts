import type {Response, Request } from 'express';
import Employee from '../models/employee';

export const apiController = {
    get: async (req: Request, res: Response): Promise<void> => {
        try {
            const employees = await Employee.findAll();
            res.status(200).json({success: employees});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while fetching employees' });
        }
    },
    getById: async (req:Request, res:Response) => {
        try { 
            const employeeId = req.params.id;
            const employee = await Employee.findByPk(employeeId);
            if (!employee) {
                res.status(404).json({error: 'Employee does not exist'})
            } else {
                res.status(200).json({success: employee});
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'An error occured while fetching employee'});
        }
    },
    post: async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, phone, email, salary, monthlySales } = req.body;
            
            if (!name || !phone || !email) {
                res.status(401).json({ error: 'Name, phone and email are required' });
                return;
            }
            
            const existingEmployee = await Employee.findOne({ where: { email } });
            
            if (existingEmployee) {
                res.status(400).json({ error: 'Employee already exists' });
                return;
            }
            
            const newEmployee = await Employee.create({
                name, 
                phone, 
                email, 
                salary: parseInt(salary), 
                monthlySales: parseInt(monthlySales)
            });
            
            res.status(201).json({success: newEmployee});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while creating new user' });
        }
    },
    put: async (req:Request, res:Response) => {
        try {
            const employeeId = req.params.id;
            const employee = await Employee.findOne({where: {id: employeeId}});
            if (!employee) {
                res.status(404).json({error: 'Emloyee does not exist'});
            } else {
                const {name, phone, email, salary, monthlySales} = req.body;
                employee.name = name || employee.name;
                employee.phone = phone || employee.phone;
                employee.email = email || employee.email;
                employee.salary = salary || employee.salary;
                employee.monthlySales = monthlySales || employee.monthlySales;
                await employee.save();
                res.status(200).json({success: 'Employee data has been updated'});
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occured while creating new user'});
        }
    },
    delete: async (req:Request, res:Response) => {
        try {
            const employeeId = req.params.id;
            const employee = await Employee.findByPk(employeeId);
            if (!employee) {
                res.status(404).json({error: 'Emplyee does not exist'});
            } else {
                await employee.destroy();
                res.status(200).json({success: 'Employee has been deleted'}); 
            }   
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occured while deleting existing user'});
        }
    }
 };