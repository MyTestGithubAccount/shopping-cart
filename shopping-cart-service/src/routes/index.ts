import { Router, Request, Response } from "express";
import * as bodyParser from "body-parser";
import ProductController from "../Controllers/product-controller";
import OrderController from "../Controllers/order-controller";

const routes = Router();
var jsonParser = bodyParser.json()
const productController = new ProductController();
const orderController = new OrderController();

routes.post('/', jsonParser, (req, res)=> productController.getAll(req, res));
routes.post('/orders', jsonParser, (req, res)=> orderController.createOrder(req, res));

export default routes;