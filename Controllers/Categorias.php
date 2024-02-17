<?php
class Categorias extends Controller{
	public function __construct(){
		session_start();
		if (empty($_SESSION['activo'])) {
			header("location: ".base_url);
		}
		parent::__construct();
	}
	public function index()
	{
		$this->views->getView($this, "index");
	}
	public function listar()
	{
		$data = $this->model->getCategorias();
		for ($i=0; $i < count($data); $i++) {
			if ($data[$i]['estado'] == 1) {
				$data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
				// $data[$i]['acciones'] = '<div>
				// 	<button type="button" class="btn bg-gradient-info" onclick="btnEditarCli('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
				// 	<button type="button" class="btn bg-gradient-danger" onclick="btnEliminarCli('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i></button>
				// </div>';
			} else {
				$data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
				// $data[$i]['acciones'] = '<div>
				// 	<button type="button" class="btn bg-gradient-success" onclick="btnReingresarCli('.$data[$i]['id'].');"><i class="fas fa-plus"></i></button>
				// </div>';
			}
			$data[$i]['acciones'] = '<div>
				<button type="button" class="btn bg-gradient-info" onclick="btnEditarCat('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
				<button type="button" class="btn bg-gradient-danger" onclick="btnEliminarCat('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i></button>
				<button type="button" class="btn bg-gradient-success" onclick="btnReingresarCat('.$data[$i]['id'].');"><i class="fas fa-plus"></i></button>
			</div>';
		}
		echo json_encode($data, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function registrar()
	{
		$nombre = $_POST['nombre'];
		$id = $_POST['id'];
		if (empty($nombre)) {
			$msg = "Todos los campos son obligatorios";
		} else {
			if ($id == "") {
				$data = $this->model->registarCategoria($nombre);
				if ($data == "ok") {
					$msg = "si";
				} else if($data == "existe") {
					$msg = "La Categoria ya Existe";
				}else {
					$msg = "Error al registrar la categoria";
				}
			} else{
				$data = $this->model->modificarCategoria($nombre, $id);
				if ($data == "modificado") {
					$msg = "modificado";
				} else {
					$msg = "Error al modificar la categoria";
				}
			}
			
		}
		echo json_encode($msg, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function editar(int $id)
	{
		$data = $this->model->editarCat($id);
		echo json_encode($data, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function eliminar(int $id)
	{
		$data = $this->model->accionCat(0, $id);
		if ($data == 1) {
			$msg = "ok";
		} else {
			$msg = "Error al eliminar la Categoria";
		}
		echo json_encode($msg, JSON_UNESCAPED_UNICODE);
		die();
	}
	public function reingresar(int $id)
	{
		$data = $this->model->accionCat(1, $id);
		if ($data == 1) {
			$msg = "ok";
		} else {
			$msg = "Error al reingresar la Categoria";
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