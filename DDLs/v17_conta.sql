create table conta (
	id_conta int primary key auto_increment,
    qt_saldo double not null,
    id_pessoa int not null,
    id_veiculo int not null
);

alter table conta
	add constraint foreign key (id_pessoa) references pessoa(id_pessoa),
    add constraint foreign key (id_veiculo) references veiculo(id_veiculo);