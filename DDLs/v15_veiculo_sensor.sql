create table veiculo_sensor (
	id_veiculo_sensor int primary key auto_increment,
    id_sensor int not null,
    id_veiculo int not null
);

alter table veiculo_sensor
	add constraint foreign key (id_sensor) references sensor(id_sensor),
    add constraint foreign key (id_veiculo) references veiculo(id_veiculo);