create table veiculo (
	id_veiculo int primary key auto_increment,
    ds_placa varchar(200) not null,
    ds_modelo varchar(200) not null,
    id_tipo_veiculo int not null,
    id_pessoa int not null
);

alter table veiculo
	add constraint foreign key (id_tipo_veiculo) references tipo_veiculo(id_tipo_veiculo),
    add constraint foreign key (id_pessoa) references pessoa(id_pessoa);