<?php
class TallasModel extends Query{
	private $nombre, $id, $estado;
	public function __construct()
	{
		parent::__construct();
	}
	public function getTallas()
	{
		$sql = "SELECT * FROM tallas";
		$data = $this->selectAll($sql);
		return $data;
	}
	public function registarTalla(string $nombre)
    {
		$this->nombre = $nombre;
		$verificar = "SELECT * FROM tallas WHERE nombre = '$this->nombre'";
		$existe = $this->select($verificar);
		if (empty($existe)) {
			$sql = "INSERT INTO tallas(nombre) VALUES (?)";
			$datos = array($this->nombre);
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
	public function modificarTalla(string $nombre, int $id)
    {
		$this->nombre = $nombre;
        $this->id = $id;
		$sql = "UPDATE tallas SET nombre = ? WHERE id=?";
		$datos = array($this->nombre, $this->id);
		$data = $this->save($sql, $datos);
		if ($data == 1) {
			$res = "modificado";
		} else {
			$res = "error";
		}
		return $res;
    }
	public function editarTall(int $id)
	{
		$sql = "SELECT * FROM tallas WHERE id = $id";
		$data = $this->select($sql);
		return $data;
	}
	public function accionTall(int $estado, int $id) 
	{
		$this->id = $id;
		$this->estado = $estado;
		$sql = "UPDATE tallas SET estado = ? WHERE id = ?";
		$datos = array($this->estado, $this->id);
		$data = $this->save($sql, $datos);
		return $data;
	}
}
?>