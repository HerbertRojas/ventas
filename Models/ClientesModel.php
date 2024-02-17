<?php
class ClientesModel extends Query{
	private $dni, $nombre, $direccion, $telefono, $correo, $fecha_nacimiento, $id, $estado;
	public function __construct()
	{
		parent::__construct();
	}
	public function getClientes()
	{
		$sql = "SELECT * FROM clientes";
		$data = $this->selectAll($sql);
		return $data;
	}
	public function registarCliente(string $dni, string $nombre, string $direccion, string $telefono, string $correo, string $fecha_nacimiento)
    {
        $this->dni = $dni;
		$this->nombre = $nombre;
        $this->direccion = $direccion;
        $this->telefono = $telefono;
        $this->correo = $correo;
        $this->fecha_nacimiento = $fecha_nacimiento;
		$verificar = "SELECT * FROM clientes WHERE dni = '$this->dni'";
		$existe = $this->select($verificar);
		if (empty($existe)) {
			$sql = "INSERT INTO clientes(dni, nombre, direccion, telefono, correo, fecha_nacimiento) VALUES (?,?,?,?,?,?)";
			$datos = array($this->dni, $this->nombre, $this->direccion, $this->telefono, $this->correo, $this->fecha_nacimiento);
			$data = $this->save($sql, $datos);
			if ($data == 1) {
				$res = "ok";
			} else {
				$res = "error";
			}
		}else {
			$res = "existe";
		}
		return $res;
    }
	public function modificarCliente(string $dni, string $nombre, string $direccion, string $telefono, string $correo, string $fecha_nacimiento, int $id)
    {
        $this->dni = $dni;
		$this->nombre = $nombre;
        $this->direccion = $direccion;
        $this->telefono = $telefono;
        $this->correo = $correo;
        $this->fecha_nacimiento = $fecha_nacimiento;
        $this->id = $id;
		$sql = "UPDATE clientes SET dni = ?, nombre = ?, direccion = ?, telefono = ?, correo = ?, fecha_nacimiento = ? WHERE id=?";
		$datos = array($this->dni, $this->nombre, $this->direccion, $this->telefono, $this->correo, $this->fecha_nacimiento, $this->id);
		$data = $this->save($sql, $datos);
		if ($data == 1) {
			$res = "modificado";
		} else {
			$res = "error";
		}
		return $res;
    }
	public function editarCli(int $id)
	{
		$sql = "SELECT * FROM clientes WHERE id = $id";
		$data = $this->select($sql);
		return $data;
	}
	public function accionCli(int $estado, int $id) 
	{
		$this->id = $id;
		$this->estado = $estado;
		$sql = "UPDATE clientes SET estado = ? WHERE id = ?";
		$datos = array($this->estado, $this->id);
		$data = $this->save($sql, $datos);
		return $data;
	}
}
?>