(function () {
    'use strict'

    orderService.$inject = ['$http'];

    function orderService($http) {
        function getOrders() {
            return orders();
        }

        function getOrder(id) {
            return _.find(orders(), function (o) {
                return o.id === id;
            });
        }

        function getOrdersByCustomer(customerId) {
            return orders().filter(function (o) {
                return o.customerId === customerId;
            });
        }

        function postOrder(order) {
            return $http.post('/api/orders', order)
                .then(function (data) {
                    return data;
                });
        }

        return {
            getOrders: getOrders,
            getOrder: getOrder,
            getOrdersByCustomer: getOrdersByCustomer,
            postOrder: postOrder
        }
    };

    angular.module('app')
        .service('orderService', orderService);
})();

//Sample data
function orders() {
    return [
        {
            id: 1,
            orderDate: '2017-06-25T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 15.00,
            totalSale: 15.00,
            totalItems: 3,
            items: [
                {
                    quantity: 2,
                    productId: 1
                },
                {
                    quantity: 1,
                    productId: 4
                }
            ]
        },
        {
            id: 2,
            orderDate: '2017-06-29T00:30:43.16-07:00',
            customerId: 1,
            totalCost: 10,
            totalSale: 9,
            totalItems: 4,
            items: [
                {
                    quantity: 2,
                    productId: 2
                },
                {
                    quantity: 2,
                    productId: 3
                }
            ]
        },
        {
            id: 3,
            orderDate: '2017-07-04T00:30:43.16-07:00',
            customerId: 3,
            totalCost: 5,
            totalSale: 4.75,
            totalItems: 2,
            items: [
                {
                    quantity: 2,
                    productId: 1
                }
            ]
        },
        {
            id: 4,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 5,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 6,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 7,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 8,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 9,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 10,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 11,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 12,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 13,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 14,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 15,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 16,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 17,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 18,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 19,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 20,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 21,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 22,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 23,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 24,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 25,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 26,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 27,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 28,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 29,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 30,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 31,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 32,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 33,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 34,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 35,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 36,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 37,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 38,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 39,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 40,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 41,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 42,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 43,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 44,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 45,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 46,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 47,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 48,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 49,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 50,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 51,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 52,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 53,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 54,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 55,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 56,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 57,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 58,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 59,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 60,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 61,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 62,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 63,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 64,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 65,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 66,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 67,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 68,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 69,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 70,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        },
        {
            id: 71,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        }
    ];
}