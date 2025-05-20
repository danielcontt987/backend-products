import { NextFunction, Request, Response } from "express"
import Product from "../models/Product.model";
import { check, validationResult } from "express-validator";

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {

    //Validación
    await check("name").notEmpty().withMessage('El nombre del producto no puede ir vació').run(req);

    // let errors = validationResult(req)

        let errors = validationResult(req);
       
        if (!errors.isEmpty()) {
          res.status(400).json({ errors: errors.array() });
          return;
        }
       
       const saveProduct = await Product.create(req.body);
       res.json({
           data: saveProduct,
           status: 201
       }).status(201)
      };


// }