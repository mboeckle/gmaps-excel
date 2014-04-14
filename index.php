<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
  <link rel="stylesheet" type="text/css" href="./css/main.css">
  <link rel="stylesheet" type="text/css" href="./css/bootstrap.css">
  <meta charset="utf-8">
  <title>Places search box</title>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" ></script>
  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>
  <script src="./js/main.js"></script>
</head>
<body>
  <input id="pac-input" class="controls" type="text" placeholder="Search Box">
  <div id="map-canvas"></div>

  <div class="insidehere">
    <form action="excel.php" method="post" onsubmit='$("#hiddendata").val( $("<div>").append( $("#report").eq(0).clone() ).html() )'>
      <table class="table table-striped files tablesorter" id="report">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody class='addaddress'>  
        </tbody>
      </table>
    </div>
    <input type="hidden" id="hiddendata" name="hiddendata">  
    <input type="submit" class="btn btn-default navbar-btn export" value="Export to Excel">
</body>
</html>


