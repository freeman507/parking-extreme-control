create table estacionamento (
	id_estacionamento int primary key auto_increment,
    id_quadra int not null,
    id_tipo_estacionamento int not null
);

alter table estacionamento
	add constraint foreign key (id_quadra) references quadra(id_quadra),
    add constraint foreign key (id_tipo_estacionamento) references tipo_estacionamento(id_tipo_estacionamento);