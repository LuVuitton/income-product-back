import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

const successfulRespone = <T>(
  returnData: T,
): { success: boolean; data: T } => ({ success: true, data: returnData });

const ORDER_NOT_FOUND_ERROR = {
  success: false,
  error: {
    code: HttpStatus.NOT_FOUND,
    message: 'Order not found',
  },
};

const orders: Order[] = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 4,
    title: 'Order 4',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 5,
    title: 'Order 5',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 6,
    title: 'Order 6',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 7,
    title: 'Order 7',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 8,
    title: 'Order 8',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 9,
    title: 'Order 9',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 10,
    title: 'Order 10',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 11,
    title: 'Order 11',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 12,
    title: 'Order 12',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 13,
    title: 'Order 13',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 14,
    title: 'Order 14',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 15,
    title: 'Order 15',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 16,
    title: 'Order 16',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 17,
    title: 'Order 17',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 18,
    title: 'Order 18',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 19,
    title: 'Order 19',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 20,
    title: 'Order 20',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
];

@Injectable()
export class OrdersService {
  findAll() {
    return successfulRespone({ orders, totalCount: orders.length });
  }

  findOne(id: number) {
    const foundOrder = orders.find((order) => order.id === id);

    if (foundOrder) {
      return successfulRespone(foundOrder);
    } else {
      throw new HttpException(ORDER_NOT_FOUND_ERROR, HttpStatus.NOT_FOUND);
    }
  }

  remove(id: number) {
    const index = orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      const removedOrder = orders.splice(index, 1)[0];

      return successfulRespone({
        ordersCount: orders.length,
        removedOrder,
        message: 'order successfully deleted',
      });
    } else {
      throw new HttpException(ORDER_NOT_FOUND_ERROR, HttpStatus.NOT_FOUND);
    }
  }
  // create(createOrderDto: CreateOrderDto) {
  //   return 'This action adds a new order';
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }
}

type Order = {
  id: number;
  title: string;
  date: string;
  description: string;
};
