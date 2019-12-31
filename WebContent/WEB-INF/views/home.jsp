<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- Material icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <title>Inventarios</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="/inventarios">Aby</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active">
	        <a class="nav-link" onclick="ResumenEvent.init()">Resumen <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item">
	         <a class="nav-link">Ventas<span class="sr-only"></span></a>
	      </li>
	      <li class="nav-item">
	         <a class="nav-link" onclick="ProductosEvent.init()">Productos<span class="sr-only"></span></a>
	      </li>
	    </ul>
	    <form class="form-inline my-2 my-lg-0">
	      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
	      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	    </form>
	  </div>
	</nav>
	<div id="viewContainer"></div>
	<div id="formContainer"></div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/plugins/events/system/commons.js"></script>
    <script type="text/javascript" src="js/plugins/events/resumen/resumenEvent.js"></script>
    <script type="text/javascript" src="js/plugins/services/resumen/resumenService.js"></script>
    <script type="text/javascript" src="js/plugins/events/productos/productosEvent.js"></script>
    <script type="text/javascript" src="js/plugins/services/productos/productosService.js"></script>
    <script type="text/javascript" src="js/plugins/events/productos/nuevoProductoEvent.js"></script>
    
  </body>
</html>