create table tipo_usuario (
	id_tipo_usuario int primary key auto_increment,
	ds_tipo_usuario varchar(200) not null,
    tp_tipo_usuario int not null
);

insert into tipo_usuario (ds_tipo_usuario, tp_tipo_usuario)
	values ('cliente', 1);
    
insert into tipo_usuario (ds_tipo_usuario, tp_tipo_usuario)
	values ('funcionario', 2);
    
insert into tipo_usuario (ds_tipo_usuario, tp_tipo_usuario)
	values ('administrador', 1);