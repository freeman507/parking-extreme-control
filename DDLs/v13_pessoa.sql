create table pessoa (
	id_pessoa int primary key auto_increment,
    ds_nome varchar(200) not null,
    ds_cpf varchar(200) not null,
	dt_nascimento date not null,
    ds_telefone varchar(200),
    ds_celular varchar(200),
    ds_email varchar(200) not null,
    id_tipo_pessoa int not null
);

alter table pessoa
	add constraint foreign key (id_tipo_pessoa) references tipo_pessoa(id_tipo_pessoa);