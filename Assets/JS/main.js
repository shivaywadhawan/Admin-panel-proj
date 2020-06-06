var ordersDataSet = [
[22,3,5,1,"COD","10/03/20,10:20PM","Snap"],
[22,3,5,1,"COD","10/03/20,10:20PM","Snap"],
[23,3,5,1,"COD","10/03/20,10:20PM","Snap"],
[22,3,5,1,"COD","10/03/20,10:20PM","Snap"],
[22,3,5,1,"COD","10/03/20,10:20PM","Snap"],
[20,3,5,1,"Paytm","10/03/20,10:20PM","Snap"],
[20,3,5,1,"Paytm","10/03/20,10:20PM","Snap"],
[20,3,5,1,"Paytm","10/03/20,10:20PM","Snap"],
[20,3,5,1,"Paytm","10/03/20,10:20PM","Snap"],
[20,3,5,1,"Paytm","10/03/20,10:20PM","Snap"],
[20,3,5,1,"Paytm","10/03/20,10:20PM","Snap"],
];

var transactionsDataSet = [
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
[67,"Paytm",245.28,0.0,"10/03/20,10:20PM"],
]

var userListDataset = [
[3,"Shivay","Wadhawan","xyz@gmail.com",987654321,3],
[3,"Shivay","Wadhawan","xyz@gmail.com",987654321,3],
[3,"Shivay","Wadhawan","xyz@gmail.com",987654321,3],
[3,"Shivay","Wadhawan","xyz@gmail.com",987654321,3],
[3,"Shivay","Wadhawan","xyz@gmail.com",987654321,3],
[3,"Shivay","Wadhawan","xyz@gmail.com",987654321,3],
[3,"Shivay","Wadhawan","xyz@gmail.com",987654321,3],
]



$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$(document).ready(function() {
    $('#myTable').DataTable( {
        data: ordersDataSet,

        columns: [
            { title: "Order Id" },
            { title: "User" },
            { title: "Img Count" },
            { title: "Quantity" },
            { title: "Payment" },
            { title: "Creation Time" },
            { title: "Prod Type" },
            { title: "Details", "data": null }
            

        ],
        columnDefs: [
        
        {    "targets" : "_all" , "orderable" : false  },

         {
        targets: -1,
        data: null,
        defaultContent:"<button type='button' class='btn btn-outline-primary'>Details</button>"
         },

         { "searchable": false, "targets": -1 }
        
        ]

        } );
    
    $('#tranTable').DataTable( {
        data: transactionsDataSet,

        columns: [
            { title: "Transaction Id" },
            { title: "Mode" },
            { title: "Amount" },
            { title: "Discount" },
            { title: "Creation Time" },
            { title: "Details", "data": null }
            

        ],
        columnDefs: [
        
        {    "targets" : "_all" , "orderable" : false  },

         {
        targets: -1,
        data: null,
        defaultContent:"<button type='button' class='btn btn-outline-primary'>Details</button>"
         },

         { "searchable": false, "targets": -1 }
        
        ]

       } );

    $('#userList').DataTable( {
        data: userListDataset,

        columns: [
            { title: "User Id" },
            { title: "First Name" },
            { title: "Last Name" },
            { title: "E-mail" },
            { title: "Mobile" },
            { title: "Order Count" },
            { title: "Details", "data": null }
            

        ],
        columnDefs: [
        
        {    "targets" : "_all" , "orderable" : false  },

         {
        targets: -1,
        data: null,
        defaultContent:"<button type='button' class='btn btn-outline-primary'>Details</button>"
         },

         { "searchable": false, "targets": -1 }
        
        ]

       } );



} );






