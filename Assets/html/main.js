$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$(document).ready( function () {
    $('#myTable').DataTable();
} );

$('#myTable').dataTable( {
  "ordering": false
  
} );