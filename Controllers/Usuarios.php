<?php
class Usuarios extends Controller{
	public function __construct(){
		session_start();
		
		parent::__construct();
	}
	public function index()
	{
		if (empty($_SESSION['activo'])) {
			header("location: ".base_url);
		}
		$data['cajas'] = $this->model->getCajas();
		$this->views->getView($this, "index", $data);
	}
	public function listar()
	{
		$data = $this->model->getUsuarios();
		for ($i=0; $i < count($data); $i++) {
			if ($data[$i]['estado'] == 1) {
				$data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
			} else {
				$data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
			}
			$data[$i]['acciones'] = '<div>
				<button type="button" class="btn bg-gradient-info" onclick="btnEditarUser('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
				<button type="button" class="btn bg-gradient-danger" onclick="btnEliminarUser('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i></button>
				<button type="button" class="btn bg-gradient-success" onclick="btnReingresarUser('.$data[$i]['id'].');"><i class="fas fa-plus"></i></button>
			</div>';
		}
		echo json_encode($data, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function validar()
	{
		if (empty($_POST['usuario']) || empty($_POST['clave'])) {
			$msg = "Los campos estan vacios";
		} else {
			$usuario = $_POST['usuario'];
			$clave = $_POST['clave'];
			$hash = hash("SHA256", $clave);
			$data = $this->model->getUsuario($usuario, $hash);
			if ($data) {
				$_SESSION['id_usuario'] = $data['id'];
				$_SESSION['usuario'] = $data['usuario'];
				$_SESSION['nombre'] = $data['nombre'];
				$_SESSION['activo'] = true;
				$msg = "ok";
			} else{
				$msg = "Usuario o Contraseña incorrecta";
			}
		}
		echo json_encode($msg, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function registrar()
	{
		$usuario = $_POST['usuario'];
		$nombre = $_POST['nombre'];
		$clave = $_POST['clave'];
		$confirmar = $_POST['confirmar'];
		$caja = $_POST['caja'];
		$id = $_POST['id'];
		$hash = hash("SHA256", $clave);
		if (empty($usuario) || empty($nombre) || empty($caja)) {
			$msg = "Todos los campos son obligatorios";
		} else {
			if ($id == "") {
				if ($clave != $confirmar) {
					$msg = "Las Contraseñas no coinciden";
				} else {
					$data = $this->model->registarUsuario($usuario, $nombre, $hash, $caja);
					if ($data == "ok") {
						$msg = "si";
					} else if($data == "existe") {
						$msg = "El Usuario ya Existe";
					}else {
						$msg = "Error al registrar el usuario";
					}
				}
			} else{
				$data = $this->model->modificarUsuario($usuario, $nombre, $caja, $id);
				if ($data == "modificado") {
					$msg = "modificado";
				} else {
					$msg = "Error al modificar el usuario";
				}
			}
			
		}
		echo json_encode($msg, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function editar(int $id)
	{
		$data = $this->model->editarUser($id);
		echo json_encode($data, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function eliminar(int $id)
	{
		$data = $this->model->accionUser(0, $id);
		if ($data == 1) {
			$msg = "ok";
		} else {
			$msg = "Error al eliminar el Usuario";
		}
		echo json_encode($msg, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function reingresar(int $id)
	{
		$data = $this->model->accionUser(1, $id);
		if ($data == 1) {
			$msg = "ok";
		} else {
			$msg = "Error al reingresar el Usuario";
		}
		echo json_encode($msg, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function salir()
	{
		session_destroy();
		header("location: ".base_url);
	}
} 

?>
