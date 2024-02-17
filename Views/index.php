<!DOCTYPE html>
<html lang="en">
<head>
  	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<title>AdminLTE 3 | Iniciar Secion</title>

  	<!-- Google Font: Source Sans Pro -->
  	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  	<!-- Font Awesome -->
  	<link rel="stylesheet" href="<?php echo base_url; ?>Assets/plugins/fontawesome-free/css/all.min.css">
  	<!-- icheck bootstrap -->
  	<link rel="stylesheet" href="<?php echo base_url; ?>Assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  	<!-- Theme style -->
  	<link rel="stylesheet" href="<?php echo base_url; ?>Assets/dist/css/adminlte.min.css">
  	<link rel="stylesheet" type="text/css" href="<?php echo base_url; ?>Assets/dist/css/style.css">
</head>
<body class="hold-transition login-page">
	<div class="login-box">
  	<!-- /.login-logo -->
  		<div class="card card-outline card-primary">
    		<div class="card-header text-center">
      			<img src="<?php echo base_url; ?>Assets/dist/img/logo.png" style="max-width: 70%; margin: 50px;">
    		</div>
    		<div class="card-body">
      			<p class="login-box-msg">INGRESE SUS DATOS</p>
     			<form id="frmLogin" action="#" method="post">
        			<div class="input-group mb-3">
          				<input class="form-control" type="text" id="usuario" name="usuario" placeholder="Ingrese Usuario">
          				<div class="input-group-append">
            				<div class="input-group-text">
              					<span class="fas fa-user"></span>
            				</div>
          				</div>
        			</div>
        			<div class="input-group mb-3">
          				<input class="form-control" type="password" id="clave" name="clave" placeholder="Ingrese Contraseña">
          				<div class="input-group-append">
            				<div class="input-group-text">
              					<span class="fas fa-lock"></span>
            				</div>
          				</div>
        			</div>
					<div class="alert alert-danger text-center d-none" id="alerta" role="alert">

					</div>
        			<div class="input-group mb-3">
            			<button class="btn btn-primary btn-block" type="submit" onclick="frmLogin(event)">Entrar</button>
        			</div>
      			</form>
    		</div>
    		<!-- /.card-body -->
  		</div>
  		<!-- /.card -->
	</div>
	<!-- /.login-box -->

<!-- jQuery -->
<script src="<?php echo base_url; ?>Assets/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="<?php echo base_url; ?>Assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="<?php echo base_url; ?>Assets/dist/js/adminlte.min.js"></script>
<script type="text/javascript">
	const base_url = "<?php echo base_url; ?>";
</script>
<script src="<?php echo base_url; ?>Assets/dist/js/login.js"></script>
</body>
</html>
