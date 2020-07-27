import { Request, Response } from "express";

class OrderController
{
    public createOrder(req: Request, res: Response):void {
        var order = req.body;
        order.trackingId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        res.status(201).json(order);
    }
};

export default OrderController;