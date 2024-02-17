<?php include "Views/Template/header.php"; ?>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Usuarios</h1>
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
                            <button type="button" class="btn  bg-gradient-primary btn-lg" onclick="frmUsuario();">Nuevo <i class="fas fa-plus"></i></button>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered table-striped" id="tblUsuarios">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Usuario</th>
                                        <th>Nombre</th>
                                        <th>Caja</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Id</th>
                                        <th>Usuario</th>
                                        <th>Nombre</th>
                                        <th>Caja</th>.
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
        <div class="modal fade" id="nuevo_usuario">
            <div class="modal-dialog">
                <div class="modal-content bg-primary">
                    <div class="modal-header">
                        <h4 class="modal-title" id="title">Nuevo Usuario</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form method="post" id="frmUsuario">
                            <div class="form-group">
                                <label for="usuario">Usuario</label>
                                <input type="hidden" id="id" name="id">
                                <input class="form-control" type="text" id="usuario" name="usuario" placeholder="Usuario">
                            </div>
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input class="form-control" type="text" id="nombre" name="nombre" placeholder="Nombre">
                            </div>
                            <div class="row" id="claves">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="clave">Contraseña</label>
                                        <input class="form-control" type="password" id="clave" name="clave" placeholder="Contraseña">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="confirmar">Confirmar Contraseña</label>
                                        <input class="form-control" type="password" id="confirmar" name="confirmar" placeholder="Confirmar Contraseña">
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="form-group">
                                <label for="caja">Caja</label>
                                <select class="form-control" id="caja" name="caja">
                                    <?php foreach ($data['cajas'] as $row) { ?>
                                        <option value="<?php echo $row['id']; ?>"><?php echo $row['caja']; ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-light" id="btnAccion" onclick="registrarUser(event);">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
    </section> <!-- /.content -->
        </div> <!-- /.content-wrapper -->
<?php include "Views/Template/footer.php"; ?>
