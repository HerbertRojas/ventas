let tblUsuarios, tblClientes, tblCategorias, tblMarcas, tblTallas;
document.addEventListener("DOMContentLoaded", function(){
	//INICIO DE LA TABLA USUARIOS
	tblUsuarios = $('#tblUsuarios').DataTable({
		"aProcessing":true,
        "aServerSide":true,
		"language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
		ajax: {
			url: base_url + "Usuarios/listar",
			dataSrc: ''
		},
		columns: [
			{'data' : 'id'},
			{'data' : 'usuario'},
			{'data' : 'nombre'},
			{'data' : 'caja'},
			{'data' : 'estado'},
			{'data' : 'acciones'}
		],
		"autoWidth": false,
		"resonsieve":true,
        "iDisplayLength": 10
	});
	//FIN DE LA TABLA USUSARIOS

	//INICIO DE LA TABLA CLIENTES
	tblClientes = $('#tblClientes').DataTable({
		"aProcessing":true,
        "aServerSide":true,
		"language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
		ajax: {
			url: base_url + "Clientes/listar",
			dataSrc: ''
		},
		columns: [
			{'data' : 'id'},
			{'data' : 'dni'},
			{'data' : 'nombre'},
			{'data' : 'direccion'},
			{'data' : 'telefono'},
			{'data' : 'correo'},
			{'data' : 'fecha_nacimiento'},
			{'data' : 'estado'},
			{'data' : 'acciones'}
		],
		"autoWidth": false,
		"resonsieve":true,
        "iDisplayLength": 10
	});
	//FIN DE LA TABLA CLIENTES

	//INICIO DE LA TABLA CATEGORIAS
	tblCategorias = $('#tblCategorias').DataTable({
		"aProcessing":true,
        "aServerSide":true,
		"language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
		ajax: {
			url: base_url + "Categorias/listar",
			dataSrc: ''
		},
		columns: [
			{'data' : 'id'},
			{'data' : 'nombre'},
			{'data' : 'estado'},
			{'data' : 'acciones'}
		],
		"autoWidth": false,
		"resonsieve":true,
        "iDisplayLength": 10
	});
	//FIN DE LA TABLA CATEGORIAS

	//INICIO DE LA TABLA MARCAS
	tblMarcas = $('#tblMarcas').DataTable({
		"aProcessing":true,
        "aServerSide":true,
		"language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
		ajax: {
			url: base_url + "Marcas/listar",
			dataSrc: ''
		},
		columns: [
			{'data' : 'id'},
			{'data' : 'nombre'},
			{'data' : 'estado'},
			{'data' : 'acciones'}
		],
		"autoWidth": false,
		"resonsieve":true,
        "iDisplayLength": 10
	});
	//FIN DE LA TABLA MARCAS

	//INICIO DE LA TABLA TALLAS
	tblTallas = $('#tblTallas').DataTable({
		"aProcessing":true,
        "aServerSide":true,
		"language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Spanish.json"
        },
		ajax: {
			url: base_url + "Tallas/listar",
			dataSrc: ''
		},
		columns: [
			{'data' : 'id'},
			{'data' : 'nombre'},
			{'data' : 'estado'},
			{'data' : 'acciones'}
		],
		"autoWidth": false,
		"resonsieve":true,
        "iDisplayLength": 10
	});
	//FIN DE LA TABLA TALLAS
})

//INICIO DE LAS FUNCIONES DE USUARIOS
function frmUsuario() {
	document.getElementById("title").innerHTML = "Nuevo Usuario";
	document.getElementById("btnAccion").innerHTML = "Registrar";
	document.querySelector(".bg-info").classList.replace("bg-info", "bg-primary");
	document.getElementById("claves").classList.remove("d-none");
	document.getElementById("frmUsuario").reset();
	$("#nuevo_usuario").modal("show");
	document.getElementById("id").value = "";
}
function registrarUser(e) {
	e.preventDefault();
	const usuario = document.getElementById("usuario");
	const nombre = document.getElementById("nombre");
	const clave = document.getElementById("clave");
	const confirmar = document.getElementById("confirmar");
	const caja = document.getElementById("caja");
	if (usuario.value == "" || nombre.value == "" || caja.value == "") {
		Swal.fire({
			title: "Error",
			text: "Todos los campos son obligatorios",
			icon: "error"
		});
	} else {
		const url = base_url + "Usuarios/registrar";
		const frm = document.getElementById("frmUsuario");
		const http = new XMLHttpRequest();
		http.open("POST", url, true);
		http.send(new FormData(frm));
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				const res = JSON.parse(this.responseText);
				if (res == "si") {
					Swal.fire({
						title: "Success",
						text: "Usuario registrado con exito",
						icon: "success"
					});
					frm.reset();
					$("#nuevo_usuario").modal("hide");
					tblUsuarios.ajax.reload();
				}else if(res == "modificado"){
					Swal.fire({
						title: "Success",
						text: "Usuario modificado con exito",
						icon: "success"
					});
					$("#nuevo_usuario").modal("hide");
					tblUsuarios.ajax.reload();
				}else{
					Swal.fire({
						title: "Error",
						text: res,
						icon: "error"
					});
				}
			}
		}
	}
}
function btnEditarUser(id) {
	document.getElementById("title").innerHTML = "Actualizar Usuario";
	document.getElementById("btnAccion").innerHTML = "Actualizar";
	document.querySelector(".bg-primary").classList.replace("bg-primary", "bg-info");
	const url = base_url + "Usuarios/editar/"+id;
	const http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();
	http.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			const res = JSON.parse(this.responseText);
			document.getElementById("id").value = res.id;
			document.getElementById("usuario").value = res.usuario;
			document.getElementById("nombre").value = res.nombre;
			document.getElementById("caja").value = res.id_caja;
			document.getElementById("claves").classList.add("d-none");
			$("#nuevo_usuario").modal("show");
		}
	}
	
}
function btnEliminarUser(id){
	Swal.fire({
		title: "¿Esta seguro de eliminar?",
		text: "El usuario no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Usuarios/eliminar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Usuario eliminado con exito.",
							icon: "success"
						});
						tblUsuarios.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
function btnReingresarUser(id){
	Swal.fire({
		title: "¿Esta seguro de reingresar?",
		text: "El usuario se reingresara",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Usuarios/reingresar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Usuario reingresado con exito.",
							icon: "success"
						});
						tblUsuarios.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
//FIN DE LAS FUNCIONES DE USUARIOS

//INICIO DE LAS FUNCIONES DE CLIENTES
function frmCliente() {
	document.getElementById("title").innerHTML = "Nuevo Cliente";
	document.getElementById("btnAccion").innerHTML = "Registrar";
	document.querySelector(".bg-info").classList.replace("bg-info", "bg-primary");
	document.getElementById("frmCliente").reset();
	$("#nuevo_cliente").modal("show");
	document.getElementById("id").value = "";
}
function registrarCli(e) {
	e.preventDefault();
	const dni = document.getElementById("dni");
	const nombre = document.getElementById("nombre");
	const direccion = document.getElementById("direccion");
	const tefefono = document.getElementById("tefefono");
	const correo = document.getElementById("correo");
	const fecha_nacimiento = document.getElementById("fecha_nacimiento");
	if (dni.value == "" || nombre.value == "" || direccion.value == "") {
		Swal.fire({
			title: "Error",
			text: "Todos los campos son obligatorios",
			icon: "error"
		});
	} else {
		const url = base_url + "Clientes/registrar";
		const frm = document.getElementById("frmCliente");
		const http = new XMLHttpRequest();
		http.open("POST", url, true);
		http.send(new FormData(frm));
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				const res = JSON.parse(this.responseText);
				if (res == "si") {
					Swal.fire({
						title: "Success",
						text: "Cliente registrado con exito",
						icon: "success"
					});
					frm.reset();
					$("#nuevo_cliente").modal("hide");
					tblClientes.ajax.reload();
				}else if(res == "modificado"){
					Swal.fire({
						title: "Success",
						text: "Cliente modificado con exito",
						icon: "success"
					});
					$("#nuevo_cliente").modal("hide");
					tblClientes.ajax.reload();
				}else{
					Swal.fire({
						title: "Error",
						text: res,
						icon: "error"
					});
				}
			}
		}
	}
}
function btnEditarCli(id) {
	document.getElementById("title").innerHTML = "Actualizar Cliente";
	document.getElementById("btnAccion").innerHTML = "Actualizar";
	document.querySelector(".bg-primary").classList.replace("bg-primary", "bg-info");
	const url = base_url + "Clientes/editar/" + id;
	const http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();
	http.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			const res = JSON.parse(this.responseText);
			document.getElementById("id").value = res.id;
			document.getElementById("dni").value = res.dni;
			document.getElementById("nombre").value = res.nombre;
			document.getElementById("direccion").value = res.direccion;
			document.getElementById("telefono").value = res.telefono;
			document.getElementById("correo").value = res.correo;
			document.getElementById("fecha_nacimiento").value = res.fecha_nacimiento;
			$("#nuevo_cliente").modal("show");
		}
	}
	
}
function btnEliminarCli(id){
	Swal.fire({
		title: "¿Esta seguro de eliminar?",
		text: "El vliente no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Clientes/eliminar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Cliente eliminado con exito.",
							icon: "success"
						});
						tblClientes.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
function btnReingresarCli(id){
	Swal.fire({
		title: "¿Esta seguro de reingresar?",
		text: "El cliente se reingresara",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Clientes/reingresar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Cliente reingresado con exito.",
							icon: "success"
						});
						tblClientes.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
//FIN DE LAS FUNCIONES DE CLIENTES

//INICIO DE LAS FUNCIONES DE CATEGORIAS
function frmCategoria() {
	document.getElementById("title").innerHTML = "Nueva Categoria";
	document.getElementById("btnAccion").innerHTML = "Registrar";
	document.querySelector(".bg-info").classList.replace("bg-info", "bg-primary");
	document.getElementById("frmCategoria").reset();
	$("#nueva_categoria").modal("show");
	document.getElementById("id").value = "";
}
function registrarCat(e) {
	e.preventDefault();
	const nombre = document.getElementById("nombre");
	if ( nombre.value == "") {
		Swal.fire({
			title: "Error",
			text: "Todos los campos son obligatorios",
			icon: "error"
		});
	} else {
		const url = base_url + "Categorias/registrar";
		const frm = document.getElementById("frmCategoria");
		const http = new XMLHttpRequest();
		http.open("POST", url, true);
		http.send(new FormData(frm));
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				const res = JSON.parse(this.responseText);
				if (res == "si") {
					Swal.fire({
						title: "Success",
						text: "Categoria registrado con exito",
						icon: "success"
					});
					frm.reset();
					$("#nueva_categoria").modal("hide");
					tblCategorias.ajax.reload();
				}else if(res == "modificado"){
					Swal.fire({
						title: "Success",
						text: "Categoria modificado con exito",
						icon: "success"
					});
					$("#nueva_categoria").modal("hide");
					tblCategorias.ajax.reload();
				}else{
					Swal.fire({
						title: "Error",
						text: res,
						icon: "error"
					});
				}
			}
		}
	}
}
function btnEditarCat(id) {
	document.getElementById("title").innerHTML = "Actualizar Categoria";
	document.getElementById("btnAccion").innerHTML = "Actualizar";
	document.querySelector(".bg-primary").classList.replace("bg-primary", "bg-info");
	const url = base_url + "Categorias/editar/" + id;
	const http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();
	http.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			const res = JSON.parse(this.responseText);
			document.getElementById("id").value = res.id;
			document.getElementById("nombre").value = res.nombre;
			$("#nueva_categoria").modal("show");
		}
	}
	
}
function btnEliminarCat(id){
	Swal.fire({
		title: "¿Esta seguro de eliminar?",
		text: "La categoria no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Categorias/eliminar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Categoria eliminado con exito.",
							icon: "success"
						});
						tblCategorias.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
function btnReingresarCat(id){
	Swal.fire({
		title: "¿Esta seguro de reingresar?",
		text: "La categoria se reingresara",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Categorias/reingresar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Categoria reingresado con exito.",
							icon: "success"
						});
						tblCategorias.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
//FIN DE LAS FUNCIONES DE CATEGORIAS

//INICIO DE LAS FUNCIONES DE MARCAS
function frmMarca() {
	document.getElementById("title").innerHTML = "Nueva Marca";
	document.getElementById("btnAccion").innerHTML = "Registrar";
	document.querySelector(".bg-info").classList.replace("bg-info", "bg-primary");
	document.getElementById("frmMarca").reset();
	$("#nueva_marca").modal("show");
	document.getElementById("id").value = "";
}
function registrarMar(e) {
	e.preventDefault();
	const nombre = document.getElementById("nombre");
	if ( nombre.value == "") {
		Swal.fire({
			title: "Error",
			text: "Todos los campos son obligatorios",
			icon: "error"
		});
	} else {
		const url = base_url + "Marcas/registrar";
		const frm = document.getElementById("frmMarca");
		const http = new XMLHttpRequest();
		http.open("POST", url, true);
		http.send(new FormData(frm));
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				const res = JSON.parse(this.responseText);
				if (res == "si") {
					Swal.fire({
						title: "Success",
						text: "Marca registrado con exito",
						icon: "success"
					});
					frm.reset();
					$("#nueva_marca").modal("hide");
					tblMarcas.ajax.reload();
				}else if(res == "modificado"){
					Swal.fire({
						title: "Success",
						text: "Marca modificado con exito",
						icon: "success"
					});
					$("#nueva_marca").modal("hide");
					tblMarcas.ajax.reload();
				}else{
					Swal.fire({
						title: "Error",
						text: res,
						icon: "error"
					});
				}
			}
		}
	}
}
function btnEditarMar(id) {
	document.getElementById("title").innerHTML = "Actualizar Marca";
	document.getElementById("btnAccion").innerHTML = "Actualizar";
	document.querySelector(".bg-primary").classList.replace("bg-primary", "bg-info");
	const url = base_url + "Marcas/editar/" + id;
	const http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();
	http.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			const res = JSON.parse(this.responseText);
			document.getElementById("id").value = res.id;
			document.getElementById("nombre").value = res.nombre;
			$("#nueva_marca").modal("show");
		}
	}
	
}
function btnEliminarMar(id){
	Swal.fire({
		title: "¿Esta seguro de eliminar?",
		text: "La marca no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Marcas/eliminar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Marca eliminado con exito.",
							icon: "success"
						});
						tblMarcas.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
function btnReingresarMar(id){
	Swal.fire({
		title: "¿Esta seguro de reingresar?",
		text: "La marca se reingresara",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Marcas/reingresar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Marca reingresado con exito.",
							icon: "success"
						});
						tblMarcas.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
//FIN DE LAS FUNCIONES DE MARCAS

//INICIO DE LAS FUNCIONES DE TALLAS
function frmTalla() {
	document.getElementById("title").innerHTML = "Nueva Talla";
	document.getElementById("btnAccion").innerHTML = "Registrar";
	document.querySelector(".bg-info").classList.replace("bg-info", "bg-primary");
	document.getElementById("frmTalla").reset();
	$("#nueva_talla").modal("show");
	document.getElementById("id").value = "";
}
function registrarTall(e) {
	e.preventDefault();
	const nombre = document.getElementById("nombre");
	if ( nombre.value == "") {
		Swal.fire({
			title: "Error",
			text: "Todos los campos son obligatorios",
			icon: "error"
		});
	} else {
		const url = base_url + "Tallas/registrar";
		const frm = document.getElementById("frmTalla");
		const http = new XMLHttpRequest();
		http.open("POST", url, true);
		http.send(new FormData(frm));
		http.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				const res = JSON.parse(this.responseText);
				if (res == "si") {
					Swal.fire({
						title: "Success",
						text: "Talla registrado con exito",
						icon: "success"
					});
					frm.reset();
					$("#nueva_talla").modal("hide");
					tblTallas.ajax.reload();
				}else if(res == "modificado"){
					Swal.fire({
						title: "Success",
						text: "Talla modificado con exito",
						icon: "success"
					});
					$("#nueva_talla").modal("hide");
					tblTallas.ajax.reload();
				}else{
					Swal.fire({
						title: "Error",
						text: res,
						icon: "error"
					});
				}
			}
		}
	}
}
function btnEditarTall(id) {
	document.getElementById("title").innerHTML = "Actualizar Talla";
	document.getElementById("btnAccion").innerHTML = "Actualizar";
	document.querySelector(".bg-primary").classList.replace("bg-primary", "bg-info");
	const url = base_url + "Tallas/editar/" + id;
	const http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();
	http.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			const res = JSON.parse(this.responseText);
			document.getElementById("id").value = res.id;
			document.getElementById("nombre").value = res.nombre;
			$("#nueva_talla").modal("show");
		}
	}
	
}
function btnEliminarTall(id){
	Swal.fire({
		title: "¿Esta seguro de eliminar?",
		text: "La talla no se eliminara de forma permanente, solo cambiara el estado a inactivo!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Tallas/eliminar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Talla eliminado con exito.",
							icon: "success"
						});
						tblTallas.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
function btnReingresarTall(id){
	Swal.fire({
		title: "¿Esta seguro de reingresar?",
		text: "La talla se reingresara",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Si",
		cancelButtonText: "No"
	}).then((result) => {
		if (result.isConfirmed) {
			const url = base_url + "Tallas/reingresar/" + id;
			const http = new XMLHttpRequest();
			http.open("GET", url, true);
			http.send();
			http.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
					const res = JSON.parse(this.responseText);
					if(res == "ok"){
						Swal.fire({
							title: "Mensaje!",
							text: "Talla reingresado con exito.",
							icon: "success"
						});
						tblTallas.ajax.reload();
					}else{
						Swal.fire({
							title: "Mensaje!",
							text: res,
							icon: "error"
						});
					}
				}
			}
		}
	});
}
//FIN DE LAS FUNCIONES DE TALLAS