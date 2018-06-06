create table usuario (
	id_usuario int primary key auto_increment,
    ds_login varchar(200) not null,
    ds_password varchar(200) not null,
    id_pessoa int not null,
    id_tipo_usuario int not null
);

alter table usuario
	add constraint foreign key (id_pessoa) references pessoa(id_pessoa),
    add constraint foreign key (id_tipo_usuario) references tipo_usuario(id_tipo_usuario);