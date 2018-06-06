create table tipo_pessoa (
	id_tipo_pessoa int primary key auto_increment,
	ds_tipo_pessoa varchar(200) not null,
    tp_tipo_pessoa int not null
);

insert into tipo_pessoa (ds_tipo_pessoa, tp_tipo_pessoa)
	values ('cliente', 1);
    
insert into tipo_pessoa (ds_tipo_pessoa, tp_tipo_pessoa)
	values ('funcionario', 2);
    
insert into tipo_pessoa (ds_tipo_pessoa, tp_tipo_pessoa)
	values ('administrador', 3);