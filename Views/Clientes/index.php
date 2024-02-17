<?php include "Views/Template/header.php"; ?>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Clientes</h1>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <button type="button" class="btn  bg-gradient-primary btn-lg" onclick="frmCliente();">Nuevo <i class="fas fa-plus"></i></button>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered table-striped" id="tblClientes">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>DNI</th>
                                        <th>Nombre</th>
                                        <th>Direccion</th>
                                        <th>Telefono</th>
                                        <th>Correo</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>DNI</th>
                                        <th>Nombre</th>
                                        <th>Direccion</th>
                                        <th>Telefono</th>
                                        <th>Correo</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div> <!-- /.card-body -->
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="nuevo_cliente">
            <div class="modal-dialog modal-lg">
                <div class="modal-content bg-primary">
                    <div class="modal-header">
                        <h4 class="modal-title" id="title">Nuevo Cliente</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" id="frmCliente">
                            <div class="form-group">
                                <label for="dni">DNI: </label>
                                <input type="hidden" id="id" name="id">
                                <input class="form-control" type="text" id="dni" name="dni" placeholder="DNI">
                            </div>
                            <div class="form-group">
                                <label for="nombre">Nombre: </label>
                                <input class="form-control" type="text" id="nombre" name="nombre" placeholder="Nombre Cliente">
                            </div>
                            <div class="form-group">
                                <label for="direccion">Direccion: </label>
                                <input class="form-control" type="text" id="direccion" name="direccion" placeholder="Dirreccion">
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="telefono">Telefono: </label>
                                        <input class="form-control" type="text" id="telefono" name="telefono" placeholder="Telefono">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="correo">Correo: </label>
                                        <input class="form-control" type="text" id="correo" name="correo" placeholder="Telefono">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fecha_nacimiento">Fecha Nacimiento: </label>
                                        <input class="form-control" type="text" id="fecha_nacimiento" name="fecha_nacimiento" placeholder="Fecha Nacimiento">
                                    </div>
                                </div>
                                <!-- <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="fecha_nacimiento">Fecha Nacimiento: </label>
                                        <div class="input-group date" id="reservationdate" data-target-input="nearest">
                                            <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate" id="fecha_nacimiento" name="fecha_nacimiento">
                                            <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light" id="btnAccion" onclick="registrarCli(event);">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
    </section> <!-- /.content -->
</div> <!-- /.content-wrapper -->
<?php include "Views/Template/footer.php"; ?>
